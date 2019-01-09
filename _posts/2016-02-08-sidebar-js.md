---
title: "JavaScript include with Sidebar.js"
date: 2016-02-08
description: Add your microblog posts to your main site.
categories: self-hosted
---
You can include your Micro.blog-hosted microblog posts in the sidebar of your main web site with our JavaScript include called Sidebar.js. In your main site's HTML template, add this JavaScript wherever you want to include the microblog posts:

```html
<script type="text/javascript" src="http://micro.blog/sidebar.js?username=your_username"></script>
```

If you use WordPress, add this JavaScript in a "Text" widget available from the WordPress admin dashboard. Remember to replace your_username with your Micro.blog username.

The HTML for your microblog posts can be styled with CSS. The CSS class names include: `microblog_timeline` (for wrapping all the posts), `microblog_post` (around a single post), `microblog_text` (for the post HTML), and `microblog_time` (for when the post was created).

Sidebar.js defaults to including the most recent 10 posts. To show more, you can add `&count=25` at the end of the URL.
