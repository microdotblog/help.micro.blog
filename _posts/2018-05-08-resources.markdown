---
title:  "Micro.blog icons"
date:   2018-05-08 18:00:00
description: Linking to Micro.blog from your blog.
---

If you want to link to Micro.blog from your own blog, you can use our SVG file version of the Micro.blog icon. Feel free to copy the icon to your own site, or reference it from the Micro.blog help site.

The SVG file is [available here](https://help.micro.blog/assets/images/icons/web/icon.svg).

Here's an example of using the SVG in an `img` tag:

```
<a href="https://micro.blog/your-username">
  <img src="https://help.micro.blog/assets/images/icons/web/icon.svg" alt="Follow me on Micro.blog" width="24" height="24" />
</a>
```

If you'd like to color the icon, use an `svg` tag with a `fill` CSS property. The following example will display an orange Micro.blog icon:

```
<a href="https://micro.blog/your-username">
  <svg style="width: 24px; height: 24px; fill: #FD9927;">
    <use xlink:href="https://help.micro.blog/assets/images/icons/web/icon.svg#Layer_1" />
  </svg>
</a>
```
