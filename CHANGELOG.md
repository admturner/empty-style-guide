# Changelog: Empty Style Guide Framework

Author: Adam Turner
URI: https://github.com/admturner/empty-style-guide

This document details all notable changes to the Empty Style Guide framework. It uses [Semantic Versioning](http://semver.org/).

<!--
## Major.MinorAddorDeprec.Bugfix (YYYY-MM-DD)

### Todo (for upcoming changes)
### Security (in case of fixed vulnerabilities)
### Fixed (for any bug fixes)
### Changed (for changes in existing functionality)
### Added (for new features)
### Deprecated (for once-stable features removed in upcoming releases)
### Removed (for deprecated features removed in this release)
-->

## (unreleased)

### Added

- Include file `nav-section.html` to generate the section navigation menu to display all pattern library groups and pages.

## 0.3.0 (2018-03-21)

### Added

- First pattern subdirectory for Global elements and sample first pattern file, `colors.md`.
- Directory `_patterns/` to store individual pattern files and subdirectories for organization.
- A layout file specific to files in the 'patterns' collection, called `pattern.html`.
- Add js to create the custom pattern element and load the shadow DOM.
- Create `foot.html` include to serve JS files after the footer.

### Changed

- Define the 'patterns' collection in `_config.yml`, set it to render on build and set default values to point all files in the patterns directory to the `patterns.html` layout.
- Set `show_dir_listing` to false to prevent navigating directories in production.
- Remove unneeded 'sitecolors' parent group from the `colors.yml` data file to simplify looping across the groups.
- Add call to `foot.html` include in `default.html` layout.
- Update new `foot.html` include to serve `patterns.js` conditionally on pattern collection pages.

## 0.2.0 (2018-03-20)

### Changed

- Add content escaping to head CSS call.
- Use conditional walker to serve UI stylesheet(s) in the `head.html` include file.
- Add new changelog file to the exclude list to keep Jekyll from processing it.

### Added

- New `pattern-styles.html` include to serve the pattern layout styles.
- YAML data file storing all stylesheets, grouped by ui-specific stylesheet(s) and pattern library stylesheets (those used by the site being style-guided).
- CHANGELOG.md for documenting changes to the style guide framework.

## 0.1.1 (2018-03-20)

### Fixed

- Fix missing mapping value in colors.yml data file.

## 0.1.0 (2018-03-20)

### Added

- Add a version site variable to `_config.yml` to track version number (especially for cache busting).
- Add a yaml data file for pattern library colors. Will call these from within a pattern.
- Add .editorconfig for standardizing coding syntax.
- Initial release is essentially a lightly tweaked fork of the default Minima Jekyll theme. It lays the foundation for the addition of the pattern library collection and templating tools.
