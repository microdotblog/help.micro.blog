---
title: "Replies with Conversation.js"
date: 2020-02-25
description: JavaScript include to show replies to your blog post.
order: 14
categories: hosted
---

Conversation.js is a JavaScript include that lets you take a conversation on Micro.blog and drop it into your blog.

Like a lot of Micro.blog features, it works either as a simple feature you can enable with a click, or as a more advanced API that can be customized however you'd like. If all you want to do is enable the feature, just click on Posts → Design and look for this checkbox:

<img src="/assets/images/web/conversation-checkbox.png" alt="Conversation checkbox" border="0" width="500" height="119" style="max-width: 500px;" />

Behind the scenes, this checkbox is adding a new Hugo parameter `.Params.include_conversation` that can be used in a custom theme. All the built-in Micro.blog designs have been updated to check for this parameter and then add the following line of JavaScript:

```html
<script type="text/javascript" src="https://micro.blog/conversation.js?url={{ .Permalink }}></script>
```

This JavaScript include gathers the replies to the current blog post and adds them to your web page. The HTML elements all have class names so you can style the replies to match your site.

Click Posts → Design → Edit CSS to add some basic styling. A good default might look something like this:

```css
.microblog_conversation {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid lightgray;
}

.microblog_post {
  padding-top: 20px;
  padding-bottom: 20px;
}

.microblog_avatar {
  border-radius: 10px;
  vertical-align: top;
}

.microblog_time {
  font-size: 13px;
  padding-top: 10px;
  color: gray;
}

.microblog_time a {
  color: gray;
  text-decoration: none;
}
```

[See this page on my blog](https://www.manton.org/2020/02/24/mimi-uploader-for.html) for how the replies look on one of my blog posts.

If you need even more control, you can request the conversation as JSON from apps or scripts by adding `format=jsonfeed` to the URL. Or you can add `format=jf2` to produce output that matches Webmention.io, so it's easier to repurpose tools that already work with Webmention.io.

Speaking of Webmention, this is not just about taking Micro.blog-only replies and putting them on your blog. Because all Micro.blog-hosted blogs support Webmention, and Micro.blog can accept mentions even from blogs that have not yet registered on Micro.blog, with Conversation.js it now becomes much more useful for other blogs to send you replies. Those replies can appear on your blog, with Micro.blog mostly acting as glue so that both blogs can talk to each other.
