---
layout: page
title: Pattern Library
---

{%- for pattern in site.patterns -%}
    <h3><a class="post-link" href="{{ pattern.url | relative_url }}">{{ pattern.title | escape }}</a></h3>
{%- endfor -%}
