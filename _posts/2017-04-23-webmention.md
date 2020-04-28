---
title: "Webmention"
date: 2017-04-23
updated: 2020-02-26
description: Cross-site replies.
order: 7
categories: developers
---
When replying to a post, Micro.blog will attempt to send a [Webmention](https://indieweb.org/Webmention) to that post. This allows the other site to include the reply alongside the original post.

Hosted blogs on Micro.blog can also receive Webmentions from other sites outside of Micro.blog. If the site URL has been verified in a Micro.blog user's profile, Micro.blog can also match the incoming Webmention with a Micro.blog user and use their username. If not, Micro.blog will create a special "domain name" user for the incoming Webmention.

Micro.blog assumes 1 user = 1 blog. Multi-user services like Brid.gy which forward tweets via Webmention do not work with Micro.blog because Twitter users all share a single `twitter.com` domain name.

To show Micro.blog replies (including Webmentions) on your Micro.blog-hosted blog, you can enable [Conversation.js](/2020/conversation-js/).

[See this help page](/2018/replies-and-mentions/) for more about how replies are processed on Micro.blog.
