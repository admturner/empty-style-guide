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

## 0.9.0~expansion (unreleased)

### Changed

- Group style guide subnav sections by category.
- Retain spaces between stylesheets in `head.html` to preserve line breaks.
- Use smaller text size in footer.

### Added

- Add a print stylesheet.

### Removed

- Deleted unused social media accounts.

## 0.8.2 (2018-04-11)

### Fixed

- Move variables into conditionals and generally refactor to solve null property errors.
- Move pattern demo controller functionality inside the custom element constructor to avoid missed calls on other pages.

### Changed

- Revise the article content grid to target an 80ch width for the main content and add another row.
- Rearrange the pattern elements on the article grid.
- Place the post content on the article grid and limit width on large displays.
- Add padding to the main element for narrow displays.
- Add top and bottom margins to `h2` elements.
- Set min-width on main content button elements.
- Bump up font size on main content `ul` and `ol` text.
- Move post meta section outside of header to align on the grid.
- Move pattern source section to bottom section of pattern layout template.
- Call default JavaScript on all pages, rename.
- Rename pattern nav include to `nav-pattern-library` to match the two new sub-navs.

### Added

- Author and date modified variables to the Style Guide front matter.
- Meta section to page template for author(s) and modified date.
- Initial splash page for Style Guide collection.
- Directory for Style Guide collection with initial Accessibility checklist.
- New sub navigation menu for the Style Guide collection.
- Create a Style Guide ('styleguide') collection type.
- A scope value for image assets.

## 0.7.0 (2018-04-10)

### Changed

- Refactor demo container controller event listeners.
- Convert default button into a mixin.
- Revise order of the pattern demo meta and controllers to facilitate flexbox layout.

### Added

- JavaScript controllers to manage the width of the pattern demo container.
- Styles to use flexbox layout for the pattern demo meta layout.
- Create standard and secondary button styles.
- Reset button in the pattern demo to reset the demo container width to the viewport size or the max, whichever is smaller.
- Buttons in the pattern demo section to control changing its width.
- Date yaml file for storing user's preferred breakpoints for the demo container width controller.

## 0.6.1 (2018-04-02)

### Fixed

- Must use quotation marks around numbered titles. Also 404 shouldn't use `title:` yaml to avoid appearing in the main nav.

### Changed

- Increased paragraph font size.
- Adjusted some colors in the header.
- Use JS for pattern lib nav sub-section expander.
- Switch to the Dracula theme for syntax highlighting colors.
- Switch to IBM Plex Sans and Mono for the UI base font.
- Add conditionals to the CSS head link to only include `media` and `type` when actually needed.
- Use UI tile layout for colors pattern.
- Rename `nav-section.html` include to the more descriptive `pattern-nav.html`.
- Remove inline styles from the 404 page and simplify the template (point to the `page` layout instead of `default`).
- Replace default first post with a brief post about doing CSS audits.
- Add some frontmatter to the `main.scss` file.

### Added

- JS controllers to set pattern nav menu to dockable.
- Basic layout template for the items in the 'usage' collection.
- Add "Usage" section to the `pattern.html` layout when one is present in the `_usage` directory matching the title of the current pattern.
- Add "Usage" collection definition in the site config file.
- Add full pattern library navigation menu to the `patterns.md` pattern library splash page.
- Directory `_usage` to contain usage descriptions, organized however the user wants, as long as the title matches exactly with the target pattern being described.
- Add Open Sans to the pattern demo font stack.
- Add pattern demo styles for a tiled UI layout.

## 0.5.0 (2018-03-26)

### Added

- Initial style for the section navigation menu.
- Expand/collapse SVG icon in the `nav-section` include.
- Update `header` include markup and styles to use flex layout for the site title and the main nav menu.
- Update `footer` include markup and styles to use flex layout.
- Create initial grid layout defining a full-width header, a two-column middle row with the section nav and the main content, and a full-width footer.
- Sections in the `pattern.html` layout for "Usage" and "Source" of each pattern.

### Changed

- Use conditional to only display section navigation on pattern library pages.
- Make section navigation menu expandable and collapsible using CSS display.
- Darken default link color.
- Move default list styles from universal to target only `main` lists.
- Simplify header markup and prep for JS toggler instead of `input` hack.
- Stop using vertical rhythm mixin.
- Move the section nav menu outside of the `main` element (both to simplify grid declaration and because as a repeating element it maybe shouldn't be there anyway).
- Switched from 2 spaces to 4-space tabs in `_base` and `_layout` scss files.
- Convert all pattern files from Markdown to HTML to improve fidelity of pattern source. (Jekyll will still process them as long as they have YAML frontmatter.)

### Removed

- Remove all styles related to float-style site layout.
- Refactor all layouts and includes to remove `.wrapper` divs and use `.section`s where appropriate.
- Refactor the header markup to remove unneeded classes.

## 0.4.0 (2018-03-21)

### Added

- Add initial pattern item pages.
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
