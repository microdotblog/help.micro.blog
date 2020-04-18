---
title: "Overview of XML-RPC API"
date: 2020-04-18
description: Micro.blog's support of XML-RPC.
order: 13
categories: developers
---

**The XML-RPC support** (MetaWeblog API and Micro.blog XML-RPC API) allows you to post to a Micro.blog-hosted microblog and from the iOS app to WordPress, Movable Type, and other compatible blogging platforms:

* For posting from a third-party client like MarsEdit on your Mac to Micro.blog-hosted microblogs, generate an app token under Account → "App tokens". When prompted for a username in your third-party client, enter your Micro.blog username and the app token for the password.
* For posting from the Micro.blog iOS app to WordPress and compatible weblogs, Micro.blog will look for your XML-RPC endpoint and prompt for your blog's username and password.

On the server, Micro.blog responds to the following XML-RPC methods:

* `metaWeblog.newPost`
* `metaWeblog.editPost`
* `metaWeblog.deletePost`
* `metaWeblog.getPost`
* `metaWeblog.getRecentPosts`
* `metaWeblog.newMediaObject`

And Micro.blog-specific updates to the MetaWeblog API, which are documented in full [on this page](/2020/xmlrpc-microblog/):

* `microblog.newPost`
* `microblog.editPost`
* `microblog.getPost`
* `microblog.deletePost`
* `microblog.getCategories`
* `microblog.newMediaObject`
* `microblog.getPosts`
* `microblog.getPages`
* `microblog.newPage`
* `microblog.editPage`
* `microblog.deletePage`

From the iOS client, Micro.blog calls the following XML-RPC methods:

* `blogger.getUserInfo`
* `blogger.newPost`
* `wp.newPost`
* `wp.getTerms`
* `metaWeblog.newMediaObject`
