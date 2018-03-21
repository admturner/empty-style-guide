---
category: 1. Global
order: 1
title: Colors
description: The site colors.
---

<style type="text/css">
    .pattern-box {
        border-radius: 3px;
        display: block;
        height:150px;
        width: 100%;
        min-width: 150px;
    }
</style>

{%- for group in site.data.colors -%}
<h2>{{ group.title | capitalize }}</h2>
<div class="gallery">
    {%- for color in group.colors -%}
        <figure class="gallery-item">
            <div class="gallery-icon">
                <span class="pattern-box" style="background: #{{ color.hex }};"></span>
            </div>
            <figcaption class="wp-caption-text gallery-caption">
                @{{ color.name | slugify }}<br>
                hex: {{ color.hex }}<br>
                rgb: {{ color.rgb }}
            </figcaption>
        </figure>
    {%- endfor -%}
</div>
{%- endfor -%}