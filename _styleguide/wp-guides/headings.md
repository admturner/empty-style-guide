---
category: 'WordPress Guides'
order: 1
authors:
  - name: Adam Turner
title: "WP Headings"
updated: 2018-06-18
---

<div class="clarification">

<h2>Quick-Guide</h2>

<ol>
	<li>There can only be one main heading (h1) per page:
		<ul>
			<li>If using the Builder Template enter the main heading in an H1 page builder section.</li>
			<li>If using any other template enter the main heading in the main title field of the Add/Edit Page screen.</li>
		</ul>
	</li>
	<li>To create a sub-heading: highlight the desired heading text and select the appropriate heading level from the editor dropdown menu.</li>
	<li><a href="#things-to-correct-if-you-see-them">Things to correct if you see them</a>.</li>
</ol>

</div>

It's important to use a clear heading structure in all site content. Headings should be used to organize content and convey meaning, and not simply for stylistic purposed.

Review the [Headings Accessibility page]({{"/styleguide/accessibility/headings/" | relative_url}}) for more detailed information on accessible headings and document structure.

<aside class="clarification">
	<p><strong>Templates</strong></p>
	<p>You can tell what template you are using by checking the "Page Template" meta box on the Edit Page screen, which looks like this:</p>
	<img alt="Detail of a WordPress edit page screen showing a form section titled Page Template and a dropdown menu listing different page templates, currently set to Builder Template" src="../../../assets/images/guides/metabox-page-template.jpg">
</aside>

## The Main Heading: <h1>

Every page should start with a level one (`<h1>` element) heading. Whether you need to create one manually or not depends on the theme Page Template you're using.

### If using the Builder Template:

You'll need to manually add a main heading using the "H1 Header" page builder section.

1. Select the "H1 Header" option from the "Page Builder" menu on the Add/Edit Page screen. This will add an `<h1>` element to store the page title.
2. Make sure the H1 Header builder section is the first item in the Page Builder menu. (If it isn't, click the item bar and drag up to place it first.)
3. Enter the page title in the page builder Page Title field:

![Enter the page title in the page builder Page Title field]({{"/assets/images/guides/metabox-builder-page-title.jpg" | relative_url}})

### If using any other template:

Enter the page title in the main title field of the Add/Edit Page screen:

![Enter the page title in the main title field of the Add/Edit Page screen]({{"/assets/images/guides/metabox-page-title.jpg" | relative_url }})

It will automatically appear on the page as the main heading in an `<h1>` element.

## Sub-Headings: <h2> - <h6>

### Do You Need Sub-headings?

While every page requires one -- and only one -- main heading (`<h1>` element), the sub-headings from level 2 to level 6 are optional. If your page has only one section, then you don't need any headings other than the main heading. If your page has three main sections, then you'll want three level 2 headings.

The best way to decide whether your page needs sub-headings or not is to create a quick outline, either in your head or written out, of the page content. If it looks something like this:

* [Heading level 1] Page Title
    - [Heading level 2] Section #1 of the Page Content
	    + [Heading level 3] Sub-Section of Section #1
		+ [Heading level 3] Another sub-section of Section #1
    - [Heading level 2] Section #2 of the Page Content
	    + [Heading level 3] Sub-Section of Section #2
		    * [Heading level 4] Sub-Sub-Section

Then you need to use sub-headings.

### Creating Sub-Headings

<figure class="aside clarification">
	<p><strong>Select from Heading 2 &ndash; Heading 6</strong></p>
	<img src="../../../assets/images/guides/editor-select-heading.jpg" alt="Detail of the Edit Post form with the text type dropdown menu selected.">
	<figcaption>Highlight the desired heading text and select the appropriate heading level from the dropdown menu.</figcaption>
</figure>

Use the WordPress text editor to create sub-headings. (*Note: If using the Builder Template, do not use the title field of the page sections like Single, Sidebar left, or Thirds.*)

1. Highlight the text you want to use as the heading text (it should be relatively short and descriptive of the section content).
2. Select the text type dropdown menu from the rich text editor bar (it will likely read "Paragraph").
3. Select the appropriate heading level from the dropdown menu.
4. Preview & Save/Update your changes.

## Things to Correct If You See Them

* Bold text and/or larger text size is used to represent a heading instead of using the heading tags

* Heading levels are skipped

* Heading levels are out of order

* There are multiple Heading 1 <h1> headings

* Heading tags are used, but there is no content between the tags to identify the heading content (e.g. `<h2> </h2>`)
