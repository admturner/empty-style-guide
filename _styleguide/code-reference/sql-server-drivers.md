---
category: "HRS Code Reference"
order: 1
title: "Environment: SQL Server ODBC Setup"
authors:
  - name: Adam Turner
updated: 2018-08-21
tags: Docs, Microsoft, WordPress, Databases, Environment
---

In order to connect to a Microsoft SQL Server from WordPress you need to install Microsoft ODBC drivers and the SQLSRV and/or PDO_SQLSRV extensions for PHP. After that you can write your own methods to interact with one or more SQL Server databases.

These instructions are targeted to a local development environment using:

* [VirtualBox 5.x](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant 2.1+](https://www.vagrantup.com/downloads.html)
* [Varying Vagrant Vagrants (VVV)](https://varyingvagrantvagrants.org/docs/en-US/installation/software-requirements/)

But you should be able to apply the method to any similar environment.

## System Requirements

* Ubuntu 16.04 (Note: VVV installs Ubuntu 14.04 by default. I found that Microsoft's `unixodbc` package had some version conflicts with Ubuntu <16.04.)
* Nginx
* PHP 7.0+
* WordPress

These instructions should work in other Linux environments as well, but may require some adjustments.

## Required Utilities

In order to connect to a MS SQL Server database from WordPress you will need to install the [Microsoft ODBC Driver for SQL Server](https://docs.microsoft.com/en-us/sql/connect/odbc/microsoft-odbc-driver-for-sql-server?view=sql-server-2017) on Linux as well as the appropriate PHP extension for your needs (`SQLSRV` or `PDO_SQLSRV` or both).

The full list of drivers, dependencies, and extensions we'll need to install is relatively short:

* [Microsoft ODBC Driver 17 for SQL Server](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server?view=sql-server-2017) (`msodbcsql17`)
* ODBC libraries for UNIX, development files (`unixodbc-dev`)
* PHP [SQLSVR extension](https://php.net/manual/en/book.sqlsrv.php) (`sqlsrv`)
* PHP [PDO_SQLSRV](https://php.net/manual/en/ref.pdo-sqlsrv.php) extension (`pdo_sqlsrv`) if you want to use PDO.

## Installation and Configuration

Installation and configuration can be automated in <abbr title="Varying Vagrant Vagrants">VVV</abbr> during the provision process using the VVV provision-post method. The VVV Vagrantfile calls `provision-post.sh` as a post-hook to the default provisioning. We'll use this to install the additional packages without having to edit the default provisioner script.

Create a file called `provision-post.sh` in the `provision/` directory.

Paste the following script into the new `provision-post.sh` file:

~~~
#!/bin/bash
#
# provision-post.sh
#
# This file is specified in Vagrantfile and is loaded by Vagrant after the
# primary provisioning script runs. It provides some additional packages for
# use in connecting to Microsoft SQL Server with PHP. General instructions
# for driver installation and setup from: https://docs.microsoft.com/en-us/sql/connect/php/microsoft-php-driver-for-sql-server?view=sql-server-2017

# PACKAGE INSTALLATION
#
# Build a bash array to pass all of the packages we want to install to a single
# apt-get command. This avoids doing all the leg work each time a package is
# set to install. It also allows us to easily comment out or add single
# packages. We set the array as empty to begin with so that we can append
# individual packages to it as required.
apt_package_install_list=()

# Start with a bash array containing all additional packages we want to install
# in the virtual machine. We'll then loop through each of these and check
# individual status before adding them to the apt_package_install_list array.
apt_package_check_list=(
  # Please avoid apostrophes in these comments - they break vim syntax
  # highlighting.

  # required ODBC packages
  unixodbc-dev

)

### FUNCTIONS

not_installed() {
  dpkg -s "$1" 2>&1 | grep -q 'Version:'
  if [[ "$?" -eq 0 ]]; then
    apt-cache policy "$1" | grep 'Installed: (none)'
    return "$?"
  else
    return 0
  fi
}

print_pkg_info() {
  local pkg="$1"
  local pkg_version="$2"
  local space_count
  local pack_space_count
  local real_space

  space_count="$(( 20 - ${#pkg} ))" #11
  pack_space_count="$(( 30 - ${#pkg_version} ))"
  real_space="$(( space_count + pack_space_count + ${#pkg_version} ))"
  printf " * $pkg %${real_space}.${#pkg_version}s ${pkg_version}\n"
}

package_check() {
  # Loop through each of our packages that should be installed on the system. If
  # not yet installed, it should be added to the array of packages to install.
  local pkg
  local pkg_version

  for pkg in "${apt_package_check_list[@]}"; do
    if not_installed "${pkg}"; then
      echo " *" "$pkg" [not installed]
      apt_package_install_list+=($pkg)
    else
      pkg_version=$(dpkg -s "${pkg}" 2>&1 | grep 'Version:' | cut -d " " -f 2)
      print_pkg_info "$pkg" "$pkg_version"
    fi
  done
}

pp_package_install() {
  echo "Installing custom packages..."
  package_check

  if [[ ${#apt_package_install_list[@]} = 0 ]]; then
    echo -e "No apt packages to install.\n"
  else
    # Before running `apt-get update`, add the public keys for the packages
    # we are installing from non standard sources.

    # Retrieve the MS ODBC signing key from packages.microsoft.com.
    echo "Applying Microsoft ODBC signing key..."
    wget --quiet https://packages.microsoft.com/keys/microsoft.asc -O- | apt-key add -

    # Add the MS SQL Drivers to the apt sources.
    wget --quiet https://packages.microsoft.com/config/ubuntu/16.04/prod.list -O- > /etc/apt/sources.list.d/mssql-release.list

    # Update all of the package references.
    echo "Running apt-get update..."
    apt-get -y update

    # Install required apt packages.
    echo "Installing apt-get packages..."

    #apt-get -y install ${apt_package_install_list[@]}
    apt-get -y install unixodbc-dev

    # Have to install msodbcsql17 outside the apt_package_install_list method
    # because Microsoft built in a weird interactive EULA check.
    ACCEPT_EULA=Y apt-get install msodbcsql17

    # Clean up unnecessary packages and clean up apt caches.
    echo "Removing unneeded packages..."
    apt-get autoremove -y
    apt-get clean
  fi
}

sqlsrv_install() {
  # Install PHP drivers for SQL Server using PECL.
  echo "Installing sqlsrv and pdo_sqlsrv..."
  pecl install sqlsrv
  pecl install pdo_sqlsrv
}

sqlsrv_setup() {
    # Configure PHP to load the MS MS SQL Server drivers in PHP and nginix.
    #
    # Load the sqlsrv drivers at PHP startup.
    echo "Configuring sqlsrv driver extensions for PHP..."
    echo "extension=pdo_sqlsrv.so" >> `php --ini | grep "Scan for additional .ini files" | sed -e "s|.*:\s*||"`/30-pdo_sqlsrv.ini
    echo "extension=sqlsrv.so" >> `php --ini | grep "Scan for additional .ini files" | sed -e "s|.*:\s*||"`/20-sqlsrv.ini

    # Load the sqlsrv drivers in nginx.
    echo "Configuring sqlsrv driver extensions for nginx..."
    echo "extension=sqlsrv.so" >> /etc/php/7.0/fpm/conf.d/20-sqlsrv.ini
    echo "extension=pdo_sqlsrv.so" >> /etc/php/7.0/fpm/conf.d/30-pdo_sqlsrv.ini
}

pp_services_restart() {
    echo -e "\nRestart services..."
    service nginx restart
    service php7.0-fpm restart
}

### SCRIPT

pp_package_install
sqlsrv_install
sqlsrv_setup
pp_services_restart
~~~

Save the file and re-provision your Vagrant machine with either `vagrant reload --provision` or `vagrant up --provision` to run this installation and configuration setup. After that, it should be working.
