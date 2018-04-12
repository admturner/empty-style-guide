---
title: "Embedded Content"
---

Most media we use on WordPress is embedded automatically using WordPress's [built in oEmebed method](https://codex.wordpress.org/Embeds). Simply enter the URL of an item from a supported service (such as YouTube, Twitter, Flickr, or Facebook) on a line by itself and WordPress will handle the rest. Like this:

~~~ html
Some text before my embedded content.

https://twitter.com/CareersWSU/status/977726513322909696

Some other text.
~~~

For now, if you want an embedded YouTube video to resize to match the page content (instead of being cut off at smaller screen sizes) you need to manually enclose the URL in a `<div>`, like this:

~~~ html
<div class="embed-youtube">

https://youtu.be/url-to-video

</div>
~~~
