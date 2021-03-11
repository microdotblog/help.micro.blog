---
title: "Custom domains"
date: 2015-12-08
description: Point your custom domain to Micro.blog.
order: 1
categories: hosted
---
If you host your microblog with a paid Micro.blog plan, consider pointing a custom domain to it. This could be something like `microblog.yourdomain.com` or even just `yourdomain.com`. Mapping a custom domain to Micro.blog is included free, as long as you already have your domain registered.

To get started, update your DNS record to point to Micro.blog. Instructions for this will vary depending on your registrar, but all registrars will support 2 standard record types: "A" and "CNAME".

**A** record → "104.200.22.214"

**CNAME** record ("www" or "micro") → "username.micro.blog"

More details:

* If you want to use a subdomain such as `microblog.yourdomain.com` or `www.yourdomain.com`, create a "CNAME" record wherever your domain is registered and use the value "username.micro.blog" (replacing "username" with your own username).
* If you want to use a root domain such as `yourdomain.com`, create an "A" record wherever your domain is registered and use the IP address value: "104.200.22.214".
* If you want both the root domain _and_ www.yourdomain.com to work, you'll need both an "A" record for the root domain and a "CNAME" record for the "www" version. Also, enter "www.yourdomain.com" in the settings in Micro.blog. (By including "www", Micro.blog will know to also enable the root domain version.)

After you've updated your DNS records, click on Posts → Design in Micro.blog on the web, then scroll down to the custom domain name field. Fill in the hostname (e.g. microblog.yourdomain.com) that you'd like to use for your site.

HTTPS can also be enabled for any custom domain. We set this up for you, but it may take up to a day for it to be ready. Please email <help@micro.blog> with your custom domain if HTTPS still hasn't been enabled.

## Changing your Domain

As well as adding a custom domain from `username.micro.blog` to `yourdomain.com`, you can change to `yourotherdomain.com` in the future. When adding a custom domain for the first time, or changing to a new one, various things may appear broken for a while:

- None of your images will load
- HTTPS won't initially be enabled, so visiting your site may show an "insecure message"

Both of these are normal. Behind the scenes, we're automatically setting everything up. Things should clear up in about 48 hours.
