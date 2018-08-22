---
category: Accessibility
order: 4
authors:
  - name: Adam Turner
  - name: WSU Web Communication
  - name: 18F
title: "Links"
updated: 2018-06-19
---

Having clear, concise, and meaningful links can improve the accessibility, usability, and reach of your website.

Both sighted users and people who use screen readers often scan pages for links and headers to help them quickly find information on a web page. If links are not clearly identified or do not make sense, the user may overlook them or not know the destination of the links before they are selected.

## Descriptive, Concise, Meaningful Links

When writing link text, use specific text to describe the link destination or purpose. Avoid unclear links to "click here," and avoid using just the URL. Link text should supply enough information so that the user can determine its purpose and decide whether to select it. Also avoid overly long links, which may break across lines on a web page and may provide too much information.

<section class="comparison">
	<div class="comparison-option">
		<h3>Use links like:</h3>
		<ul>
			<li><a href="#">Contact us</a></li>
			<li>Review the full <a href="#">annual leave policy</a>.</li>
			<li>Learn more about <a href="#">web accessibility at WSU</a>.</li>
			<li><a href="#">Visit the registration page</a> for more information.</li>
			<li><a href="#">HRS Benefits</a></li>
		</ul>
	</div>
	<div class="comparison-option">
		<h3>Not links like:</h3>
		<ul>
			<li><a href="#">Click here</a></li>
			<li><a href="#">More</a></li>
			<li><a href="#">Read more</a></li>
			<li><a href="#">Info</a></li>
			<li><a href="#">hrs.wsu.edu/benefits</a></li>
		</ul>
	</div>
</section>

## Repetitive Links

Avoid duplicating links with the same link text that go to different destinations. This is another reason why “Read More” and “More Information” do not work well as link text. These are not only vague, but also confusing to screen reader users who will not be able to distinguish one "read more" link from anther out of each link's visual context.

## Opening Links in Browsers (New Tabs)

Links opening a new web browser window or tab is not recommended.

Although it won't show an accessibility issue in most audits, it's still best not to use this feature unless it is absolutely required to prevent losing user-entered content (like on a web form). It presents a variety of issues:

* **Accessibility Issue:** Assistive devices do not necessarily tell users a new web tab or window has opened when a user follows such a link.
* **Usability Issue:** Opening in a new web tab or window breaks the web browser’s “back” button functionality. The default behavior of a web browser is to remain in the same tab so the “back” button works.
* **Security Issue:** Unscrupulous people can inject a snippet of code on a link that opens in a new web tab/window and cause havoc for users.

*Exception:* There is one instance where opening in a new tab/window is helpful: when users need to gather information or transfer information from one web page to another. Being able to go back and forth between the two tabs/windows is convenient. Letting users know they are opening a new tab/window is best practice if you must open the link in a new tab/window. Having this indication is especially useful to people using a screen reader.

## Link Styling

Link style changes are usually made within the site’s styling (CSS) and are not made within the web page or text editor. Generally you should not override the site's global styles, in order to maintain a cohesive and predictable experience for users.

When styling links:

* Ensure links are recognizable from the rest of the web page text content.
* Ensure link colors contrast sufficiently with the background color and meet the WCAG 2.0, Level AA, color contrast ratio.
* WCAG 2.0 recommends underlining text links, but allows for links to not be underlined if:
	- the luminance contrast between the link and the surrounding text is at least 3:1, and
	- additional visual cues (e.g. it becomes underlined, changes color, becomes bold, etc.) are provided when the link is hovered over or receives focus.

When styling text in general, underlining should only be used for links, and should not be used to convey emphasis. (Instead, bold and italics should be used for emphasis.)

Also, avoid using all caps (e.g. HELLO) for emphasis or for headings because some screen readers read all caps words letter-by-letter, and all caps words can be difficult to read for sighted users.

## Image links

When linking an image, like a logo, be aware the alternative text ("alt text") attribute acts as the link text.

This means the alt text needs to both:

1. Describe the image.
2. Let the user know where they are going when the image is selected.

It must serve as both [effective alt text]({{"/styleguide/accessibility/images#how-to-write-effective-alt-text" | relative_url}}) and effective link text.

If the linked image is next to a text link that has the same destination, then the image should have an empty "alt text" attribute (`alt=""`).

## Common Accessibility Errors

* Website URLs are used for link text.
* Links are not descriptive.
* Links going to the same destination are used more than once on a web page.
* Keyboard users do not know where they are on a web page, because links do not have link focus indicators.
* Links do not have enough color contrast between the background color and/or the surrounding text.
* Additional visual cues (e.g. color change) are not provided when a link is hovered over or receives focus.
