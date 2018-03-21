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

## 0.2.0 (2018-03-20)

### Changed

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