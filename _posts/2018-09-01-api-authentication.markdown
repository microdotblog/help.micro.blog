---
title:  "Authentication"
date:   2018-09-01 17:30:00
description: Signing in for third-party apps.
---

Are you building an app that works with Micro.blog? Great! This overview describes the 3 ways you can authenticate your app with Micro.blog.

**App tokens**

Micro.blog doesn't have normal account passwords, but it does have app tokens, which are like app-specific passwords. You can generate a new token under Account → Edit Apps to use in an app, and that app will have full access to your Micro.blog account.

Using app tokens is a good way to get started while developing an app. Pass the app token with each request in the `Authorization` header, as documented in [Micropub](/2017/api-posting/) or the [JSON API](/2017/api-json/). If you let the user copy-and-paste their own app token into your app, make sure you save it securely.

**IndieAuth**

This is the best way for most apps to authenticate. Using IndieAuth, a user can sign in with their own domain name, or `username.micro.blog`.

When the user enters their domain name in your app, your app should request their home page (served from Micro.blog) to look for the `<link>` tags that include the authorization and token URLs. Here are the general steps for your app:

* Request the user's home page to discover the IndieAuth URLs.
* Send the user to the authorization URL in their web browser, where they will confirm that the app can use their Micro.blog account.
* Micro.blog will redirect back to your app with a new token, which you should verify with the token URL.

[IndieAuth.net](https://indieauth.net/) has more details and links to the latest specification.

**Email sign-in**

It's common on mobile devices for the user to not already be signed in to their Micro.blog account in a web browser. For these apps, Micro.blog can send a special email to the Micro.blog user with a link to automatically sign them into the app. Because this isn't needed for most apps, you will need to request access to use this authentication method by sending an email to help@micro.blog.

To register your app for email sign-in, we'll need the app name and a redirect URL. The redirect URL is often a special URL that will open your app directly, for example `your-app://signin/`. Micro.blog will append a temporary sign-in token to the end of this URL. The temporary sign-in token should be sent to `/account/verify` to generate an auth token that you can store with your app. See [the JSON API](/2017/api-json/) for more information.