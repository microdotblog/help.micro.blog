---
title:  "Posting API"
date:   2017-02-14 15:00:00
description: Micropub and XML-RPC APIs.
---

**Micropub** is a [W3C recommendation](https://www.w3.org/TR/micropub/) for posting to your web site. It started life in the IndieWeb community and is now supported in several platforms.

Sending a new post to Micro.blog often looks as simple as this (where `123456789` is an app token):

```
POST /micropub
Authorization: Bearer 123456789

h=entry&content=Hello%20world.
```

To upload a photo to a Micro.blog-hosted blog, first query Micropub to get the media endpoint:

```
GET /micropub?q=config
Authorization: Bearer 123456789
```

This will return a response like:

```
{
  "media-endpoint": "https://micro.blog/micropub/media"
}
```

The media endpoint accepts a `multipart/form-data` upload with a `file` part containing the JPEG image data. Micro.blog will send back an HTTP 202 response while the image is being copied to the published site. It may take a few seconds for it to be available at the URL in the response:

```
HTTP/1.1 202 Accepted
Location: https://username.micro.blog/uploads/123.jpg
```

When creating a new post, the Micropub API also accepts a "name" parameter to give the post a title:

```
POST /micropub
Authorization: Bearer 123456789

h=entry&name=Hello&content=This%20post%20is%20longer.
```

Micro.blog supports Micropub on both the server and from the Micro.blog iOS app:

* For posting from a third-party client to a Micro.blog-hosted microblogs, you can use IndieAuth or generate an app token under Account → "App tokens". If you use a token, set it the `Authorization: Bearer` header.
* For posting from the Micro.blog iOS app to any Micropub server, under Settings → "When writing a new post" choose "WordPress or compatible weblog". Enter your web site domain name and Micro.blog will look for an authorization endpoint to complete the setup.

Note: Micro.blog for iOS will always default to WordPress posting if your web site supports it, so that it can set a default category and post format.

On the server, Micro.blog support requires a few things to be configured for IndieAuth to work:

* Set your Twitter or GitHub username under Account → "App tokens".
* Set your web site under Account to `your-username.micro.blog`. Make sure it is verified.
* Link to `your-username.micro.blog` on your Twitter or GitHub profiles.

For users who have multiple microblogs configured, `/micropub?q=config` will return of the list of sites. You can post to a specific microblog by passing an `mp-destination` parameter of the URL (`uid` from the configured list).

**The XML-RPC support** (MetaWeblog API) allows you to post to a Micro.blog-hosted microblog and from the iOS app to WordPress, MovableType, and other compatible blogging platforms:

* For posting from a third-party client like MarsEdit on your Mac to Micro.blog-hosted microblogs, generate an app token under Account → "App tokens". When prompted for a username in your third-party client, enter your Micro.blog username and the app token for the password.
* For posting from the Micro.blog iOS app to WordPress and compatible weblogs, Micro.blog will look for your XML-RPC endpoint and prompt for your blog's username and password.

On the server, Micro.blog responds to the following XML-RPC methods:

* `metaWeblog.newPost`
* `metaWeblog.editPost`
* `metaWeblog.deletePost`
* `metaWeblog.getPost`
* `metaWeblog.getRecentPosts`
* `metaWeblog.newMediaObject`

From the iOS client, Micro.blog calls the following XML-RPC methods:

* `blogger.getUserInfo`
* `blogger.newPost`
* `wp.newPost`
* `wp.getTerms`
* `metaWeblog.newMediaObject`
