---
category: "WordPress Guides"
order: 2
title: "WP Images"
authors:
  - name: Adam Turner
updated: 2018-06-19
---

<div class="clarification">

<h2>Quick-Guide</h2>

<p><strong>When adding a new image:</strong> Enter the description (with a period at the end) in the alt text field of the add media window. It will apply the alt text when you add the image to the page.</p>

<p><strong>When updating an existing image:</strong></p>

<ul>
	<li>From the add/edit post screen: select the image you want to edit, then select the edit icon to open the image details window. Enter the alt text then select the Update button.</li>
	<li>From the Media Library: select and image the enter the alt text in the Alt Text field. It will save automatically, but it <em>will not update images already added to pages</em>, those will need to be manually updated.</li>
</ul>

</div>

To ensure website accessibility, *all* images, graphs, and diagrams must have alt text. However, purely decorative images should provide an empty alt text attribute (`alt=""`).

For more information about alt text (what it does and how to write it effectively) visit the [Images Accessibility page]({{"/styleguide/accessibility/images/" | relative_url}}).

## Setting Alt Text in WordPress

There are a few ways to add alt text in WordPress:

1. [During the add image process](#when-adding-an-image).
2. [From the Add/Edit post screen](#update-and-existing-image-from-the-add-edit-post-screen).
3. [In the Media Library](#in-the-media-library).

### When Adding an Image

It is easiest to add alt text when initially uploading or adding an image to a page.

<figure class="">
	<img src="../../../assets/images/guides/editor-add-media.jpg" alt="Detail of the add media window showing the attachment details form.">
</figure>

1. Select the "Add Media" button on the add/edit post screen.
2. Either select an existing image from the Media Library or use the Upload Files tab to upload a new image(s).
3. After selecting/uploading an image, the image details will appear in the media library window under the "Attachment Details" heading.
4. Locate the "Alt Text" field and enter your alt text for the image, with a period at the end. The Media Library will automatically save the alt text.
5. Now you can select the "Insert into page" button and WordPress will add the image to the page with the properly formatted alt text.

### Update an Existing Image from the Add/Edit Post Screen

If you need to update an image that has already been added to a page, access that pages Edit screen and locate the image in the content. (This guide assumes you are using the default Visual tab on the editor.)

<figure class="aside clarification">
	<img alt="Detail of the edit post editor with an image selected and the toolbar visible." src="../../../assets/images/guides/editor-edit-media-toolbar.jpg">
	<figcaption>Select the image to bring up the image editor toolbar, then select the edit icon.</figcaption>
</figure>

1. Select the image to bring up the image editor toolbar, then select the edit icon (designed to look like a pencil) to open the Image Details window.
2. Locate the "Alternative Text" field and enter your alt text for the image, with a period at the end. Make sure to save your changes with the Update button.
3. Remember to preview & update the page when you are finished making changes.

### In the Media Library

You can add alt text to images directly from the Media Library (accessed via the primary navigation menu in the WP admin area).

1. Select any image to open its attachment details window.
2. Locate the Alt Text field, and enter the alt text for the image. It will save automatically.

**Important**: Adding alt text from the Media Library will only apply the new alt text to images inserted into pages from that point on. Any images added to a page *before* the alt text was created *will not include the new alt text*. You will have to manually remove and then re-add the image to update it with the new alt text.

Also note that uploaded PDFs will display a thumbnail image in the Media Library but do not have an alt text attribute.

## Effective Alt Text

* A clear, succinct description of the image (keep the explanation brief), not more than a short sentence or two.
* No need to provide every tiny detail in the image.
* Don’t start alt text with “Image of,” “Photo of,” or something similar.
* Include a period at the end of the alt text.
* Decorative images include an empty alt attribute (alt="").
* Complex images like graphs, charts, diagrams, maps, and illustrations,  frequently require longer descriptions, see the [Images Accessibility page]({{"/styleguide/accessibility/images/" | relative_url}}) for suggestions.

## Things to Correct If You See Them

* Missing alt text for any non-decorative image or graphic.

* The file name (e.i. "12345_img12.jpg”) of the image is used for the alt text.

* “Image of” or “Photo of”, etc. is used as part of the image description.

* Insufficient alt text (such as “Photo”) is the only alt text used to describe an image; alt text is not descriptive.

* The image caption and the image alt text are the same.

* The image photographer or copyright information is the description for the alt text instead of the caption.
