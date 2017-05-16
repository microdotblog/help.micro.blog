---
title:  "Web site verification"
date:   2017-02-11 09:00:00
description: How to verify your domain name.
---

Verifying your web site tells Micro.blog that your user is the owner of the web site URL in your account profile. This helps users who are viewing your profile page, and also enables IndieAuth authentication so that you can sign in with your own domain name when posting to Micro.blog from other applications.

To verify your web site, add either a `<link>` tag in the `<head>` section of your HTML, or add an HTML `<a href="">` that points to your Micro.blog account. Both of these should have the `rel="me"` attribute.

For example:

```
<head>
  <link href="https://micro.blog/your-username" rel="me" />
  ...
</head>
```

Or like this somewhere on your home page:

```
<a href="https://micro.blog/your-username" rel="me" />Micro.blog</a>
```

Once you've added one of these to your web site, reload [the Micro.blog account screen](https://micro.blog/account). Micro.blog will check your web site and then mark your username as verified.