---
category: Accessibility
order: 1
authors:
  - name: Adam Turner
  - name: WSU Web Communication
  - name: 18F
title: "Headings"
updated: 2018-06-18
---

Headings are the titles and subtitles used within text content. They help draw attention to content sections within a web page and organize content into related groups.

Using a clear heading structure helps improve the user experience by:

* Providing a consistent look for a site.
* Offering a hierarchical structure for web page content.
* Providing guidance for users to easily navigate and quickly scan (either visually or with a screen reader) for the information they seek.

## Headings and Screen Readers

Screen readers and speech software, like <abbr title="NonVisual Desktop Access">NVDA</abbr>, <abbr title="Job Access with Speech">JAWS</abbr>, Orca, VoiceOver, and TalkBack, allow people who are blind or visually impaired to read text on a website. They are also useful for users who choose to listen to speech output of a page rather than view it. Users of these tools often start by scanning for headings to help them quickly learn what content is on a web page. For people who use screen readers, clear heading hierarchies are critical for navigating and scanning a page.

## Headings and Heading Structure

When laying out a page, headings provide a semantic way to lay out sections of content. A heading element briefly describes the topic of the section it introduces. Heading elements are used by users of assistive technology to navigate a page quickly and to understand the structure of a page.

Every page should have a main heading designated with the `<h1>` element. This will almost always be the page title (or the site title on the home page). Use `<h1>` elements only once per page. In WordPress, the template will often output the main heading automatically, so when entering content users should avoid using the `<h1>` heading level. (See the [WordPress Guides headings page](/styleguide/wp-guides/headings/) for more detail.)

Other heading levels may be used more than once following document outline order and you may reset headings up to <h2> with the <section> element.

For sub-sections, use `<h2>` to `<h6>` in document outline order. `<h2>` is the most important and `<h6>` is the least. Avoid skipping headings. Avoid breaking document outline order (you may go from `<h2>` to `<h3>`, but never `<h3>` to `<h1>`). You can picture this as a document outline, where the page title is the main title, and each following section and sub-section is a different level in the outline, like so:

* [Heading level 1] Page Title
    - [Heading level 2] Section #1 of the Page Content
	    + [Heading level 3] Sub-Section of Section #1
		+ [Heading level 3] Another sub-section of Section #1
    - [Heading level 2] Section #2 of the Page Content
	    + [Heading level 3] Sub-Section of Section #2
		    * [Heading level 4] Sub-Sub-Section

## Examples

### Well Structured Headings - Pass Accessibility Standards

Here is an example of a heading structure that would pass accessibility standards:

<h1>Page Title</h1>

Every page should have a main heading, denoted with the <h1> element, but not every page requires sections beyond that. If the page is short, or does not include clearly defined sections, all of the content can be organized under the main heading.

<h2>Section #1 of the Page Content</h2>

Always use the <h2> element for the primary sections of a page. If you only have primary sections, then the only headings your page will contain are <h1> and <h2> heading.

<h3>Sub-Section of Section #1</h3>

If you need to provide another section of content within an existing section, use the heading one level down from its parent. Here, for example, we used an <h3> element (heading level 3) because this content is a sub-section of an <h2> element (heading level 2).

<h3>Another sub-section of Section #1</h3>

You can repeat section headings as many times as you have sections.

<h2>Section #2 of the Page Content</h2>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.

<h3>Sub-Section of Section #2</h3>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.

<h4>Sub-Sub-Section</h4>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.

~~~
<h1>Page Title</h1>

Every page should have a main heading, denoted with the <h1> element, but not every page requires sections beyond that. If the page is short, or does not include clearly defined sections, all of the content can be organized under the main heading.

<h2>Section #1 of the Page Content</h2>

Always use the <h2> element for the primary sections of a page. If you only have primary sections, then the only headings your page will contain are <h1> and <h2> heading.

<h3>Sub-Section of Section #1</h3>

If you need to provide another section of content within an existing section, use the heading one level down from its parent. Here, for example, we used an <h3> element (heading level 3) because this content is a sub-section of an <h2> element (heading level 2).

<h3>Another sub-section of Section #1</h3>

You can repeat section headings as many times as you have sections.

<h2>Section #2 of the Page Content</h2>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.

<h3>Sub-Section of Section #2</h3>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.

<h4>Sub-Sub-Section</h4>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.
~~~

### Poorly Structured Headings - Fail Accessibility Standards

Here is an example of a heading structure that would fail accessibility standards, making the content organization unclear:

<h2>Page Title</h2>

This fails because the main heading should be an <h1> element. If there were no other heading elements on the page this *might* be acceptable, but every page should have a main heading denoted with the <h1> element.

<h1>Section #1 of the Page Content</h1>

This fails because it uses an <h1> element -- which should be reserved for the main page heading -- to identify a section of the main page. A child section should never have a higher level than its parent. Always use the <h2> element for the primary sections of a page.

<h3>Sub-Section of Section #1</h3>

This fails because it has skipped a heading level by going directly from <h1> to <h3>.

<h1>Another sub-section of Section #1</h1>

This fails because you can only have one main heading <h1> element per page.

~~~
<h2>Page Title</h2>

This fails because the main heading should be an <h1> element. If there were no other heading elements on the page this *might* be acceptable, but every page should have a main heading denoted with the <h1> element.

<h1>Section #1 of the Page Content</h1>

This fails because it uses an <h1> element -- which should be reserved for the main page heading -- to identify a section of the main page. A child section should never have a higher level than its parent. Always use the <h2> element for the primary sections of a page.

<h3>Sub-Section of Section #1</h3>

This fails because it has skipped a heading level by going directly from <h1> to <h3>.

<h1>Another sub-section of Section #1</h1>

This fails because you can only have one main heading <h1> element per page.
~~~

## Common Usability Errors

* Bold text and/or larger text size is used to represent a heading instead of using the heading tags
* Heading levels are skipped
* Heading levels are out of order
* There are multiple Heading 1 <h1> headings
* A Heading 1 (Page title) is not used
* Heading tags are used, but there is no content between the tags to identify the heading content (e.g. `<h2> </h2>`)
