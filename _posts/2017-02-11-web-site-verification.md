---
title: "Web site verification"
date: 2017-02-11
description: How to verify your domain name.
categories: self-hosted
---
Verifying your web site tells Micro.blog that your user is the owner of the web site URL in your account profile. This helps users who are viewing your profile page, and also enables IndieAuth authentication so that you can sign in with your own domain name when posting to Micro.blog from other applications.

To verify your web site, add either a `<link>` tag in the `<head>` section of your HTML, or add an HTML `<a href="">` that points to your Micro.blog account. Both of these should have the `rel="me"` attribute.

For example:

```html
<head>
  <link href="https://micro.blog/your-username" rel="me" />
  ...
</head>
```

Another great option is to link to your Micro.blog profile somewhere on your web site, such as in a sidebar or menu. This makes it easier for people to follow you on Micro.blog.

```html
<a href="https://micro.blog/your-username" rel="me">Micro.blog</a>
```

Once you've added one of these to your web site, reload [the Micro.blog account screen](https://micro.blog/account). Micro.blog will check your web site and then mark your username as verified.

Using self-hosted WordPress? You can use the plugin [Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/) to add the `<link>` tag to your header. Click on WP Admin → Plugins → Add New, and search for "Insert Headers and Footers" by WPBeginner.

Since WordPress.com doesn't support plugins, you can add a link to the header or sidebar under WP Admin → Appearance → Widgets. Add a "Custom HTML" widget with an `<a href>` link as shown above. Don't forget `rel="me"`!

Micro.blog can also serve as an IndieAuth provider for your blog. If you're using the built-in Micro.blog hosting, this will be configured automatically for you. If you host your blog on an external site outside of Micro.blog, you can use Micro.blog by adding these link headers to your site:

```html
<head>
  <link rel="authorization_endpoint" href="https://micro.blog/indieauth/auth" />
  <link rel="token_endpoint" href="https://micro.blog/indieauth/token" />
  ...
</head>
```
