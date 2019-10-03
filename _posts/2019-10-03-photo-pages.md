---
title: "Photo pages"
date: 2019-10-03
description: Hosted blog /photos page and feeds.
order: 6
categories: photoblogging
---

If you've uploaded any photos to your blog, Micro.blog will create a page at `/photos` on your hosted blog automatically. You can rename or delete this page under Posts → Pages on the web.

Micro.blog only includes JPEGs for the photos page to help filter out screenshots which are usually PNGs. If you want to change this behavior, you can customize the photos template `list.photoshtml.html` using a new theme.

Micro.blog sets 2 special parameters in Hugo that are accessible from a custom theme:

* .Params.images — includes JPEGs or PNGs
* .Params.photos — only includes JPEGs

The default templates shared between all themes are also [available on GitHub here](https://github.com/microdotblog/theme-blank/tree/master/layouts).
