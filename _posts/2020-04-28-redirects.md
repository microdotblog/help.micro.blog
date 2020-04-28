---
title: "Redirects"
date: 2020-04-28
description: Redirecting URLs with pages.
order: 17
categories: hosted
---

Micro.blog can redirect some common URLs for you, and has the option to create additional redirects using pages. Micro.blog will automatically handle the following redirects:

* To help migrate from another blog, Micro.blog will redirect any missing file ending in `.xml` to your default feed. It will also redirect WordPress-style feed URLs such as `/feed`.
* When importing from WordPress, Tumblr, or Ghost, Micro.blog will keep track of the original URLs used. Micro.blog will automatically redirect these URLs to the new URLs on Micro.blog. (Your custom domain name must be the same for this to work.)

If you need to add more redirects, you can create a new page on your site: Posts → Pages → New Page. In the text contents, enter the full URL to redirect to:

<img src="/assets/images/web/redirects-content.png" width="600" height="130" alt="Screenshot of editing URL">

After creating the page, you can edit it to change the path for the URL from the default. Click on the page and look for the "Edit" button in the corner:

<img src="/assets/images/web/redirects-edit.png" width="245" height="125" alt="Screenshot of Edit button">
