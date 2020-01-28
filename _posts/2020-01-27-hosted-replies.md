---
title: "Hosted replies"
date: 2020-01-27
description: Including replies on your Micro.blog-hosted blog.
order: 13
categories: hosted
---

By default, Micro.blog stores the replies you post separately from your regular blog posts. If you'd like to include your replies on your own blog, start with [this introduction on Manton's blog](https://www.manton.org/2020/01/27/replies-hosted-at.html).

We will be updating more of the built-in designs to support replies. If you'd like to make changes to your blog with a custom theme, there are 2 templates that control replies:

* `layouts/section/replies.html`: This is used for the list of replies. It shows the most recent replies, or if pagination is enabled it will show all your replies. (If you have many thousands of replies, you may want to disable pagination.)
* `layouts/reply/single.html`: This is for the reply detail page. It's a good place to include extra information, such as who the reply is to or what their post URL is.

You can see these templates in the Marfa theme here: [replies.html](https://github.com/microdotblog/theme-marfa/blob/master/layouts/section/replies.html) and [single.html](https://github.com/microdotblog/theme-marfa/blob/master/layouts/reply/single.html).

For a preview of what they look like on the web, see [the recent replies](https://www.manton.org/replies/) on Manton's blog or a [single reply](https://www.manton.org/replies/2020/01/23/7935570.html).
