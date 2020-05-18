---
title: "Markdown import"
date: 2020-05-18
description: Importing a folder of Markdown files.
order: 3
categories: hosted
---

In addition to importing from WordPress, Medium, and other blogging platforms, you can upload a ZIP file containing multiple Markdown files to your Micro.blog-hosted blog. Click Posts → Import.

Micro.blog supports several frontmatter fields:

* `title`
* `date`
* `categories`
* `tags`
* `draft` (true or false)

While Micro.blog mostly ignores the file structure in the ZIP file, it will notice if some of your Markdown files are in a folder called "drafts" and make those drafts in Micro.blog.

## Photos

Do not include any photos in the ZIP file. Micro.blog will look for `img` tags (or Markdown image references) and attempt to download those images to store with your Micro.blog-hosted blog. Make sure to add your domain name when importing if the image references do not use absolute URLs.
