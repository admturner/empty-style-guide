---
category: Accessibility
title: "Accessibility Checklist"
authors:
    - name: Adam Turner
updated: 2018-04-11
---

These standards are organized under the [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/WAI/WCAG20/glance/)'s four main guiding principles:

* Perceivable
* Operable
* Understandable
* Robust

<!-- includes links from each of these to the page the describes the requirement in more detail -->

## Basics

Though I provide some checklists here, I don't recommend thinking of accessibility as simply checking off boxes on a list. Accessibility is about meeting users wherever they are -- it's about not excluding people with our design or markup.

Consider these questions as you create content:

* Can someone quickly scan this document and understand the material?
* Is the content written clearly using simple, approachable language?
* Is the message still clear without specific sensory elements like colors, images, video, or sound?
* Can a user navigate the page (and use interactive content like forms and links) with only a keyboard?
* It is predictable: does it use navigation, layout, and design consistent with the rest of the site and with usability best practices?
* Are labels and instructions clear for input elements like forms?
* Is the markup clean and structured?
* Does this content work on at any screen or device size?

## Checklists

Use the following checklists to determine whether your content aligns with the WCAG 2.0 standards and best practices. Not everything you publish will include every element.

<!-- Reorganize this into site-wide content vs. post/page content -->

### Perceivability Checklist

* [ ] All text content is in [plain text]() (for example, there are no images of text).
* [ ] All images have equivalent, [descriptive alternate ("alt") text]().
* [ ] All audiovisual media provides [captioning and transcripts]().
* [ ] Text versions are available for all [charts and graphs]().
* [ ] Form elements and buttons have descriptive associated [text labels]().
* [ ] All content uses [semantic markup]() to designate headings, lists, and emphasized or special text.
* [ ] [Content is organized hierarchically]() into logical sections (determined by markup order, not presentation order).
* [ ] Instructions and descriptions [avoid sensory language]() and do not require the user to see the layout or design of the page or to hear a sound.
* [ ] Tables are used only for specifically [tabular data]().
* [ ] [Color is not used as the sole method of conveying content]() or distinguishing elements (especially links) from their surroundings.
* [ ] All text has a [contrast ratio]() of at least 4.5:1, or 3:1 for heading text (at least 18 point).
* [ ] Users can easily resize the text, and the page [remains readable and functional]() when the text is doubled in size without horizontal scrolling.
* [ ] [Blocks of text]() more than one sentence long are no more than 80 characters wide, are either left- or right-aligned, and have at least 1.5 times line spacing.

### Operability Checklist

* [ ] All page functionality is [available using the keyboard]() and it is visually clear which element has keyboard focus.
* [ ] [Keyboard focus is never trapped]() by one particular page element.
* [ ] A link is provided to [skip directly to content]() to avoid navigation and other repeated page elements.
* [ ] [All links are descriptive]() so that the purpose or destination of each link is clear from the link text alone. (Avoid "click here" or "learn more").
* [ ] No two [links with the same text]() go to different locations.
* [ ] Web pages that are part of a series or in a complex site include an [indication of current location]() (such as with a breadcrumb component).
* [ ] Content and functionality has [no time limits]() or constraints except as required by real-time events (in which case alternatives should be available).
* [ ] [Users can pause, stop, or hide]() all page interruptions (such as alerts) and automatically updating content (such as news tickers or automatically refreshing content).
* [ ] [Moving, blinking, or scrolling]() content that lasts longer than 5 seconds does not occur automatically and can be paused, stopped, or hidden by the user.
* [ ] [No page content flashes]() more the 3 times per second.

### Understandability Checklist

* [ ] [Content is written in plain language](). Writing is concise and straightforward.
* [ ] [Words that may be ambiguous]() or unknown are defined through adjacent text or in a glossary or definition list.
* [ ] Links never force users into a new tab or window (using `target="_blank"`) unless doing so is required to preserve user data (such as on a form), in which case the behavior should be made clear in the link.
* [ ] [When webpage elements receive focus or input]() they do not substantially change the page without making such changes clear in advance (such as spawning popup windows or changing keyboard focus).
* [ ] Required form elements and form elements requiring specific input formats (such as phone numbers) [explain these requirements in their label text]().
* [ ] [Form validation errors]() are presented clearly and instructions and suggestions provided for fixing the error.

### Robustness Checklist

* [ ] All page content uses valid HTML.
* [ ] All page content resizes flexibly to remain usable and user friendly at any screen size.
* [ ] ARIA attributes are used where needed.
* [ ] Content uses semantic HTML5 compliant elements that do not require CSS in order to be legible and functional.
* [ ] Required functionality does not depend on JavaScript to work, or includes functional fallbacks for when JavaScript is unavailable.
* [ ] Stylesheets use valid CSS that is compatible with supported browsers or that includes graceful fallbacks.

## Resources

* US General Services Administration [18F Accessibility Guide Checklist](https://accessibility.18f.gov/checklist/)
* [WebAIM's WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist)
* [MailChimp's Writing for Accessibility guide](https://styleguide.mailchimp.com/writing-for-accessibility/)
* [Bitsofcode Accessibility Cheatsheet](https://bitsofco.de/the-accessibility-cheatsheet/)
* [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
* [Contrast ratio checker](http://leaverou.github.io/contrast-ratio/)
