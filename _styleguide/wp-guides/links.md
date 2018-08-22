---
category: "WordPress Guides"
order: 3
title: "WP Links"
authors:
  - name: Adam Turner
updated: 2018-06-19
---

<div class="clarification">

<h2>Quick-Guide</h2>

<ul>
	<li>Make link text meaningful: For example, &ldquo;Read More&rdquo; does not clearly explain what information your user will find when the link is selected. Instead use &ldquo;Read more about Butch Cougar.&rdquo;</li>
	<li>Avoid verbs that imply a specific way of selecting a link, such as &ldquo;click&rdquo; or &ldquo;tap.&rdquo; Use more inclusive verbs such as &ldquo;select&rdquo; or more specific verbs like &ldquo;read,&rdquo; &ldquo;review,&rdquo; or &ldquo;visit.&rdquo;</li>
	<li>On each webpage, use a link to a specific site once; avoid duplicating links that go to the same destination.</li>
	<li>Keep the default link styles &ndash; these are set at the site theme level and shouldn't be overridden at the content level.</li>
	<li>Do not set links to open in a new window/tab (`target="_blank"`) unless it's required to prevent losing user-entered content (like on a form). Work with one of the system administrators if you have questions.</li>
</ul>

</div>

Having clear, concise, and meaningful links can improve the accessibility, usability, and reach of your website.

Review the [Links Accessibility page]({{"/styleguide/accessibility/links/" | relative_url}}) for more detailed information on accessible links, including rules about repetition and images used as links.

## Links in WordPress

The following instructions for adding and updating links in WordPress are based on using the Visual editor.

<figure class="clarification aside">
	<img src="../../../assets/images/guides/editor-link-editor.jpg" alt="Detail of the WordPress link editor screen showing the link editor form, including URL and Link Text fields.">
	<figcaption>Select the "Link Options" button (a gear icon) to open this edit link window with more options.</figcaption>
</figure>

### Create a New Link

* Highlight the text you want to use as the link text.
* Select the "Insert/edit link" button in the text editor toolbar to open the link editor.
* Enter or paste the full desired URL into the URL field or select the link options button (a gear icon) to open the edit link window.
  - From the edit link window you can set the URL and link text, or select from a list of other pages on the site to link to. You can also adjust the link behavior, but do not check the "Open link in new tab" option unless it meets the [exception for opening links in a new window]({{"/styleguide/accessibility/links#opening-links-in-browsers-new-tabs" | relative_url}}).
* Select the Apply button (an arrow icon) to save your changes.

### Update an Existing Link

* Select the link you want to update to open the link editor tooltip. From here you can:
  - visit the link to check that it works,
  - edit the link using the "edit" button, or
  - remove the link using the "remove link" button. ![Detail of the link editor tooltip showing the URL, the edit button, and the remove link button.]({{"/assets/images/guides/editor-link-editor-tooltip.jpg" | relative_url}})

* **To stop a link opening in a new window/tab:** Select the link, then the "edit" button (a pencil icon), and then open the detail menu with the "Link options" button (a gear icon). From this window, un-check the "Open link in a new tab" option, then select Update to save your changes.

## Things to Correct If You See Them

* Text used for link is not descriptive -- it is unclear what the link does or what it links to.

* Link opens in a new tab or window (unless absolutely necessary, as on a form or other page where a user would lose content by navigating away).

* Website URL is used as link text.

* Links going to the same destination are used more than once on a web page.

* Link does not look like other links on the site; or, non-link-text is styled to resemble a link (underlined and/or in the link color).

* Links do not have enough contrast with the background and their surrounding text, and are not visually highlighted in some way on hover and focus. (This is a theme-related issue and should be referred to site administrators.)
