---
category: Accessibility
order: 3
title: "Images"
authors:
  - name: WSU Web Communication
  - name: 18F
  - name: Adam Turner
updated: 2018-06-19
---

Alt (alternative) text is an informative description of an image, graph, diagram, or other visual resource as it relates to content on a web page. Alt text also provides an alternative way for users to access the meaning conveyed by images and graphics.

## What Alt Text Does

When alt text is added to images and graphics, it provides descriptive information about an image when it is not available to the user. An image’s alt text is not typically visible on a web page, but alt text will replace images when images are turned off on websites, when images do not load, and when a screen reader is used to read out website content.

Alt text also has a positive impact on search engine ranking. Adding clear alt text descriptions to images allows search engine crawlers to more appropriately index images. Google and Bing count alt text as part of the on-page text because it is exactly that for visually impaired users. Therefore, setting good alt text on images also benefits a user’s experience because it can make web page content more discoverable.

## How to Write Effective Alt Text

To ensure website accessibility, *all* images, graphs, and diagrams must have alt text. However, purely decorative images should provide an empty alt text attribute (`alt=""`).

When writing a text alternative for an image or graphic, think about the role the image plays on the page. Your description should sufficiently describe what is being presented in as few words as possible. Alt text needs to convey the same information as the image in the given context.

The following guidelines outline the properties of effective alt text:

* **A clear, succinct description of the image (keep the explanation brief).** The description shouldn't exceed a short sentence or two. Ideally, the description should be less than 100 characters because some screen readers will not read after 125 characters.
* **No need to provide every tiny detail in the image.** In most cases this is not necessary, and can become verbose.
* **Don’t start alt text with “Image of,” “Photo of,” or something similar.** Screen readers will identify images by default, so it would be repetitive.
* **Include a period at the end of the alt text.** The period allows the screen reader to pause after the last word in the alt text.
* **Decorative images include an empty alt attribute (alt="").** When the only purpose of an image is to add visual decoration to a web page, use empty alt text to help screen readers skip the image.
* **Complex images like graphs, charts, diagrams, maps, and illustrations,  frequently require longer descriptions.** Following are some ways to add a longer text description for complex images:
    - Add description as a caption for the image.
	- In addition to the brief alt text description, add the detailed description in the surrounding web page text.
	- Link to a separate web page to provide the longer description.

## Common Alt text Errors

* The file name (e.i. "12345_img12.jpg”) of the image is used for the alt text.
* “Image of” or “Photo of”, etc. is used as part of the image description.
* “Photo” is the only alt text used to describe an image; alt text is not descriptive.
* The image caption and the image alt text are the same.
* The image photographer or copyright information is the description for the alt text instead of the caption.
