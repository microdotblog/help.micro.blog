---
title: "Micro.blog icons"
date: 2018-05-08
description: Linking to Micro.blog from your blog.
order: 11
categories: developers
---
If you want to link to Micro.blog from your own blog, you can use our SVG file version of the Micro.blog icon. Feel free to copy the icon to your own site, or reference it from the Micro.blog help site.

The SVG file is [available here](/assets/images/icons/web/icon.svg).

Here's an example of using the SVG in an `img` tag:

```html
<a href="https://micro.blog/your-username">
  <img src="/assets/images/icons/web/icon.svg" alt="Follow me on Micro.blog" width="24" height="24">
</a>
```

If you'd like to color the icon, use an `svg` tag with a `fill` property. The entire SVG contents are included. The following example will display an orange Micro.blog icon:

```html
<a href="https://micro.blog/your-username">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#F80" width="24" height="24" viewBox="0 0 480 480">
    <title>Micro.blog</title>
    <path d="M427 354a93 93 0 0 0-4 118 5 5 0 0 1-5 8c-34-8-65-27-85-54-2-2-6-3-9-2-27 9-56 14-84 14C108 438 0 340 0 219S108 0 240 0c131 0 240 98 240 219 0 51-22 98-53 135zm-75-160c3-2 4-5 3-8-1-2-4-4-7-4l-77-2-25-71c-1-3-4-5-7-5s-6 2-7 5l-25 71-77 2c-3 0-6 2-7 4-1 3 0 6 3 8l61 46-22 72c-1 3 0 6 3 8h8l63-43 63 43h8c3-2 4-5 3-8l-22-72 61-46z"/>
  </svg>
</a>
```
