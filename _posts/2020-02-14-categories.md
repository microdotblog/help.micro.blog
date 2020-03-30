---
title: "Using categories"
date: 2020-02-14
description: Assigning categories to your blog posts.
order: 14
categories: hosted
---

Micro.blog hosted blogs can tag their posts with categories. Categories can help you organize your content. And since categories get their own RSS feed, readers can even subscribe to specific content streams.

**Creating Categories**

You can create a new category for your blog under Posts → Categories, and those categories will appear when editing a post or when creating a longer post with a title. We hide the category options be default when you are composing a short post, but in the new macOS app you can show the categories by choosing View → Categories. A list of your categories will appear at the top of Archive on your blog for readers to browse.

<img src="/assets/images/web/categories-checkboxes.jpg" width="500" height="132" alt="Category checkboxes" />

**Adding categories to your navigation**

If you want to link to a category in your main navigation, create a new page under Posts → Pages. Title your new page and then put the URL to the category in your contents, e.g. https://yourdomain.com/categories/something/. Keep “Include this page in your blog navigation” checked and click Add Page.

<img src="/assets/images/web/categories-navigation.jpg" width="700" height="610" alt="Categories in navigation" />

Click and drag the three gray lines to reorder the pages in your navigation menu.

**Auto-filter posts by length, text, or even emoji**

There’s a powerful filter mechanism inside Micro.blog for automatically assigning categories based on criteria in the post. For example, you can assign a post to a Photos category if the post includes an `img` tag. Or if the post includes the 📚 emoji, it can be assigned to a Books category. You can even assign categories based on post length.

To create new filters, go to Posts → Categories → Edit Filters.

By default, filters are applied to new posts only. To also apply the filter to all posts, there’s a new “Run Filter” button. For blogs with thousands of posts, make sure to give Micro.blog a little time to update all your posts and publish them to your blog.

<img src="/assets/images/web/categories-filters.jpg" width="500" height="179" alt="Categories and filters" />

**API for categories**

Categories support is in both the MetaWeblog XML-RPC API and the Micropub API. This means that categories work great with MarsEdit. Categories are also included in your default JSON Feed in the “tags” field.

<img src="/assets/images/web/categories-marsedit.jpg" width="400" height="271" alt="Categories in MarsEdit" />

Each category has its own RSS feed with the format:

`https://yourdomain.com/categories/something/feed.xml`
