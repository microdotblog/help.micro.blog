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

If you'd like to color the icon, use an `svg` tag with a `fill` CSS property. The entire SVG contents are included. The following example will display an orange Micro.blog icon:

```
<a href="https://micro.blog/your-username">
  <svg style="width: 24px; height: 24px; fill: #FD9927;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.79 486.16">
    <path class="cls-1" d="M495.79,372.06c32-37.64,51.11-85,51.11-136.5C546.9,113,438.82,13.72,305.5,13.72S64.1,113,64.1,235.56,172.18,457.4,305.5,457.4a259.65,259.65,0,0,0,86.2-14.58,7.78,7.78,0,0,1,8.81,2.77c20.17,27.23,51.67,46.38,86.7,54.17a4.79,4.79,0,0,0,4.74-7.65,94.37,94.37,0,0,1,4-120.11ZM420,209.48l-62.17,47.19,22.56,74.72a7.06,7.06,0,0,1-10.79,7.84L305.5,294.68l-64.09,44.55a7.06,7.06,0,0,1-10.79-7.84l22.56-74.72L191,209.48a7.06,7.06,0,0,1,4.12-12.68l78-1.63,25.67-73.71a7.06,7.06,0,0,1,13.33,0l25.67,73.71,78,1.63A7.06,7.06,0,0,1,420,209.48Z" transform="translate(-64.1 -13.72)" />
  </svg>
</a>
```
