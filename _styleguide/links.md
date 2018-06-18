---
category: Accessibility
order: 4
title: "Links"
---

### Making Links Accessible

Having clear, concise, and meaningful links can improve both the accessibility and usability of your website.

Both sighted users and people who use screen readers often scan pages for links and headers to help them quickly find information on a web page. If web page links are not clearly identified or do not make sense, the user may overlook them and/or not know the destination of the links before they are selected.

Descriptive, Concise, Meaningful Links
When writing link text, use text to describe the link destination. Link text should supply enough information so that the user can determine its purpose and decide whether to select it.
Washington State University Admissions

Do not put the URL of a website as the link text.
https://admission.wsu.edu/

Be clear and concise in the language used for the link text.
Long links may break across lines on a web page and may provide too much information about the link destination.
Not Recommended: You can also link a short key phrase in a sentence: This first cougar mascot was named Butch in honor of Herbert "Butch" Meeker of Spokane, who was WSU's football star at the time.
Recommended: About Butch Cougar

Make link text meaningful: Avoid using vague text like, “Read More,” “Click Here,” “More Information,” “More,” “Go,” to describe links.
Using link text like this is not descriptive and does not indicate where the link will take a user.
For example, the “Read More" link text does not clearly explain what information your user will find when the link is selected.
Instead use: "Read more about Butch Cougar"
“Click Here” is related to the action of a mouse, and this action is not the only way to activate a link on a website.
For example, users use a variety of ways to access content on websites – They could be using a keyboard, tablet, touchscreen, mouse, screen reader, speech output, braille device, etc.

Duplicating Links
Avoid duplicating links with the same link text that go to different destinations.
This is another reason why “Read More” and “More Information” do not work as link text.
On a webpage, use a link to a specific site once; avoid duplicating links that go to the same destination.

Link Styling
Be aware that link style changes are usually made within the site’s styling (CSS) and are not made within the web page or text editor. When styling links:

Ensure links are recognizable from the rest of the web page text content.
Ensure link colors contrast sufficiently with the background color and meet the WCAG 2.0, Level AA, color contrast ratio.
WCAG 2.0 recommends underlining text links, but allows for links to not be underlined if…
the luminance contrast between the link and the surrounding text is at least 3:1, and additional visual cues (e.g. it becomes underlined, changes color, becomes bold, etc.) are provided when the link is hovered over or receives focus.

When styling text in general, underlining should only be used for links, and should not be used to convey emphasis. Instead, bold and italics should be used. Also, avoid using all caps (e.g. HELLO) for emphasis or for headings because some screen readers read all cap words letter-by-letter, and all cap words can be difficult to read for sighted users.

Image links
When linking an image, like a logo, be aware the alternative text ('alt text') attribute acts as the link text.

This is tricky because the 'alt text' attribute for the linked image must both describe the image and let the user know where they are going when the image is selected.
If the linked image is next to a text link that has the same destination, then the image should have an empty 'alt text' attribute (alt="").
Opening Links in Browsers
Links opening a new web browser window/tab is not recommended. It is best not to use this feature although it will not show an accessibility error when audited.

Accessibility Issue:
Assistive devices do not necessarily tell users a new web tab/window has opened when a user follows a link.
Usability Issue:
Opening in a new web tab/window breaks the web browser’s “back” button functionality. The default behavior of a web browser is to remain in the same tab so the “back” button works.
Security Issue:
Unscrupulous people can inject a snippet of code on a link that opens in a new web tab/window and cause havoc for users.
Exception:
There is one instance where opening in a new tab/window is helpful: when users need to gather information or transfer information from one web page to another. Being able to go back and forth between the two tabs/windows is convenient.
Letting users know they are opening a new tab/window is best practice if you must open the link in a new tab/window. Having this indication is especially useful to people using a screen reader.
Common Accessibility Errors
Website URLs are used for link text
Links are not descriptive
Links going to the same destination are used more than once on a web page
Keyboard users do not know where they are on a web page, because links do not have link focus indicators
Links do not have enough color contrast between the background color and/or the surrounding text
Additional visual cues (e.g. color change) are not provided when a link is hovered over or receives focus
