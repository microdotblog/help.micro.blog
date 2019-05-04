---
title: "WordPress import"
date: 2017-11-06
description: Migrating from a WordPress weblog.
order: 3
categories: hosted
---
Now that Micro.blog can serve as your primary web site — with personal domain name, short and long posts, themes, and pages — some users may want to consolidate their older WordPress blogs to Micro.blog. We've added a WordPress import feature that can take all the posts from a WordPress site and move them to Micro.blog.

Micro.blog has always had great support for WordPress. If you host on WordPress and want to bring your posts into the Micro.blog timeline, all you have to do is add the WordPress RSS feed. This new importer is for people who want to _migrate their whole site_ to be hosted by Micro.blog, not just mirror posts to the timeline with RSS and continue to use WordPress for hosting.

To access the importer on the web, click on Posts → Import. It will prompt for a WXR file, which you can export from your WordPress site under WP Admin → Tools → Export. WXR stands for "WordPress eXtended RSS", which is an RSS file with some extra WordPress metadata

It's important to note that the WXR contains post text and metadata, but not file uploads. To solve this, Micro.blog parses the HTML for all your posts, looking for `img` tags. It then downloads those referenced photos and adds them to your Micro.blog-hosted site. For this reason, it's important that you keep your old WordPress site online until the import has finished. Only update your DNS settings to point to Micro.blog after confirming that all the images have been copied into Micro.blog. (Note that the importer does not currently support WordPress photo galleries.)

Micro.blog does not need everything that is usually in a WXR file from WordPress. If you are creating your own WXR file, Micro.blog only looks for the following elements on each item:

* `link`
* `title`
* `pubDate`
* `content:encoded`
* `wp:post_type` (should always be "post")
* `wp:post_date` (used if `pubDate` does not include a valid date)
* `wp:status` (should always be "publish")

It is safe to run an import multiple times if there are any issues. Micro.blog will update existing posts and not create duplicates.

As Micro.blog imports your WordPress site, it records the original URL for your posts. Because Micro.blog's URLs are not usually in the same format as WordPress, Micro.blog will use this original URL to automatically set up redirects so that no links will break. The redirects will be active as soon as you switch the DNS over to use Micro.blog.
