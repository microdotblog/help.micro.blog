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

After you've updated your DNS records, click on "Account" on Micro.blog, then scroll down to "Paid microblogs" and click "Edit Domains & Design". Next to the hostname you want to map a custom domain to, click the "Design" button. Then fill in the hostname (e.g. microblog.yourdomain.com) that you'd like to use for your site.

HTTPS can also be enabled for any custom domain. Please email <help@micro.blog> with your custom domain and we will enable HTTPS for you.
