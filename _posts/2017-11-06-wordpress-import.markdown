---
title:  "WordPress import"
date:   2017-11-06 11:00:00
description: Migrating from a WordPress weblog.
---

Now that Micro.blog can serve as your primary web site — with personal domain name, short and long posts, themes, and pages — some users may want to consolidate their older WordPress blogs to Micro.blog. We've added a WordPress import feature that can take all the posts from a WordPress site and move them to Micro.blog.

Micro.blog has always had great support for WordPress. If you host on WordPress and want to bring your posts into the Micro.blog timeline, all you have to do is add the WordPress RSS feed. This new importer is for people who want to _migrate their whole site_ to be hosted by Micro.blog, not just mirror posts to the timeline with RSS and continue to use WordPress for hosting.

To access the importer on the web, click on Posts → Import. It will prompt for a WXR file, which you can export from your WordPress site under WP Admin → Tools → Export. WXR stands for "WordPress eXtended RSS", which is an RSS file with some extra WordPress metadata

It's important to note that the WXR contains post text and metadata, but not file uploads. To solve this, Micro.blog parses the HTML for all your posts, looking for `img` tags. It then downloads those referenced photos and adds them to your Micro.blog-hosted site. For this reason, it's important that you keep your old WordPress site online until the import has finished. (Note that the importer does not currently support WordPress photo galleries.)