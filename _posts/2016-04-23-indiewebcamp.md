---
title: "About IndieWeb"
date: 2017-04-23
description: Overview of support for IndieWeb formats.
order: 6
categories: developers
---
Micro.blog supports several formats and protocols pioneered by the <a href="https://indieweb.org/">IndieWebCamp</a>. We also believe in many of the same principles — that owning your content matters, and that you should post to your own site first before cross-posting or replying on other social networks.

**Micropub:** Micro.blog for iOS can post to Micropub-compatible sites. The Micro.blog server also supports the Micropub API for posting from [other clients](/2017/micropub-clients/) like [Quill](https://quill.p3k.io/). See [posting APIs](/2017/api-posting/) for details.

**Webmention:** Replies in Micro.blog are sent as Webmentions to the target site if it supports Webmention. There is also limited support for receiving mentions from external blogs when they link to Micro.blog-hosted blogs.

**Microformats:** All hosted microblogs are marked up with Microformats. See the [feeds page](/2017/api-feeds/) for details.

**WebSub:** Micro.blog can subscribe to blogs using WebSub to receive real-time notifications for when a blog post is published.

**IndieAuth:** Signing in with your own domain name. Micro.blog is an IndieAuth provider. To learn more about IndieAuth, visit [IndieAuth.net](https://indieauth.net/) or the Micro.blog [help page on authentication](/2018/api-authentication/).
