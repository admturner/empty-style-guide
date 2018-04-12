---
title: "Standard Page Layout"
---

### Semantic Headings

There will be only one main heading (`<h1>` element) per page. The main heading is automatically created from the "Title" field on the Add/Edit Page screen.

Users should never manually add an `h1` element in the page body. Headings 2-6, however, are fair game as long as they are used hierarchically and meaningfully.

#### Use subheadings meaningfully

Don't use formatting such as font size or bold to give the visual appearance of a heading to a non-heading element.

Never use headings (`<h1>`&ndash;`<h6>`) to achieve visual results only. If you want to emphasize something use `<strong>` (bold appearance) or `<em>` (emphasized/italicized appearance), or use another style that doesn't affect the markup.

#### Use subheadings hierarchically

Headings should be used to organize content into sections, using 2nd-degree headings (`<h2>`) for major section headings and lower-degree headings (`<h3>` to `<h6>`) for subsequent sections as needed.

Never skip a heading level (don't use a `<h2>` heading followed by a `<h4>` heading, for example).

The following shows an outline of what a page might contain:

* Heading 1 (`<h1>` the main heading)
	- Heading 2 (`<h2>` major section heading)
		- Heading 3 (`<h3>`) sub-heading for minor sections
		- Heading 3 (`<h3>`) sub-heading for minor sections
	- Heading 2 (`<h2>` another major section heading)
		- Heading 3 (`<h3>`) sub-heading for minor sections
			- Heading 4 (`<h4>`) lower-level heading
		- Heading 3 (`<h3>`) sub-heading for minor sections
		- Heading 3 (`<h3>`) sub-heading for minor sections
	- Heading 2 (`<h2>` a third major section heading)
