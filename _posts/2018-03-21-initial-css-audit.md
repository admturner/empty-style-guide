---
layout: post
title:  "CSS Audits"
author: Adam Turner
date:   2018-03-21 11:10:52 -0800
categories: audits
---

## Goals

* **Reduce file sizes.** Refactor and clean up code to reduce the size of files users have to download when visiting the site.
* **Ensure consistency with guidelines.** First, create these guidelines in the form of a style guide and pattern library. Align them with the WSU style guide and the WCAG 2.0(1) guidelines. Make sure that elements and code are consistent with these guidelines to create a standard architecture.
* **Standardize design.** Similar to CSS architecture, reduce the number of different visual styles present on the site. In the OOCSS vein, create reusable elements that can be slotted into layouts to create a unified feel across the HRS site.
* **Standardize code.** Organize CSS code to assist with maintainability. We'll be using Sass to help with organization and following an element-based semi-OOCSS structure. Within rules, properties with be alphabetized to assist with catching duplications. Beyond that, (S)CSS will follow the WordPress CSS style guide, enforced using a custom NPM stylelint check during the build process to catch malformed code.
* **Improve performance.** All of the above steps will help to allow us to combine and compress stylesheets to reduce the number and size of resources users need to download when they visit our site.

### Things to Check

* CSS coding standards using Stylelint:
    - Do styles pass automated coding standards checks?
    - Is code consistent?
    - Is the code logically organized?
* How often are common properties (such as `float` and `margin`) repeated?
    - Are there properties that may be cut or bundled into other modules, especially in terms of inheritance?
* Complexity of selectors:
    - Are selectors reliant on specific class or element pairings to work?
    - Do combinations like `h2 + p` create variant output? (Is it too micromanaged?)
* Depth of applicability:
    - Does the CSS rely on a lot of specificity?
* Are colors used consistently and in keeping with the style guide?
* Are there unused selectors?
* Are common elements and modules (buttons, call-out boxes, etc.) styled similarly?
    - Global elements should not be overly specific, to allow them to respond to local contexts.
    - There shouldn't be too many different variations of the same element.
    - There shouldn't be very many exceptions to the standard design and layout.
* Media queries:
    - Use smallest screen for base styles and use responsive layouts and media queries to gradually scale up.
    - Use a few significant breakpoints, and supplement with a few smaller ones as needed (do not over-specify media queries).
