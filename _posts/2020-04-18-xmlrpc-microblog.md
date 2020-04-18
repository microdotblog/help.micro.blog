---
title: "Micro.blog XML-RPC API"
date: 2020-04-18
description: Parameters for using Micro.blog's XML-RPC API.
order: 14
categories: developers
---

This page outlines the parameters and responses for Micro.blog's XML-RPC API. It is very similar to the MetaWeblog API, but updated for Micro.blog to support features such as pages and downloading all posts.

## `microblog.newPost`

* params:
	* 0: site ID
	* 1: username
	* 2: password
	* 3: content struct
		* `title`
		* `description`
		* `date_created`
		* `categories`
		* `post_status` ("draft" or "published")

## `microblog.editPost`

* params:
	* 0: post ID
	* 1: username
	* 2: password
	* 3: content struct
		* `title`
		* `description`
		* `date_created`
		* `categories`
		* `post_status` ("draft" or "published")

## `microblog.getPost`

* params:
	* 0: post ID
	* 1: username
	* 2: password
* response fields in struct:
	* `id`
	* `user_id`
	* `date_created`
	* `date_modified`
	* `permalink`
	* `title`
	* `description`
	* `categories`
	* `post_status`

## `microblog.deletePost`

* params:
	* 0: post ID
	* 1: username
	* 2: password

## `microblog.getCategories`

* params:
	* 0: site ID
	* 1: username
	* 2: password
* response fields in struct:
	* `id`
	* `name`

## `microblog.newMediaObject`

* identical to `metaWeblog.newMediaObject`

## `microblog.getPosts`

* similar to `metaWeblog.recentPosts` but with offset parameter for paging, more consistent field names
* params:
	* 0: site ID
	* 1: username
	* 2: password
	* 3: number of posts
	* 4: offset
* response fields in struct:
	* `id`
	* `user_id`
	* `date_created`
	* `date_modified`
	* `permalink`
	* `title`
	* `description`
	* `categories`
	* `post_status`

## `microblog.getPages`

* similar to `getPosts` but for pages
* response struct also includes extra booleans:
	* is a page included in the site's navigation bar?
	* is a page a "template" where the description is generated dynamically? (e.g. About, Archive, Photos, and Replies)
	* is a page actually redirecting to another URL? (description will be just that URL)
* params:
	* 0: site ID
	* 1: username
	* 2: password
	* 3: number of pages
	* 4: offset
* response fields in struct:
	* `id`
	* `user_id`
	* `date_created`
	* `date_modified`
	* `permalink`
	* `title`
	* `description`
	* `is_navigation`
	* `is_template`
	* `is_redirect`

## `microblog.newPage`

* params:
	* 0: site ID
	* 1: username
	* 2: password
	* 3: content struct
		* `title`
		* `description`
		* `date_created`
		* `is_navigation`

## `microblog.getPage`

* params:
	* 0: page ID
	* 1: username
	* 2: password
* response fields in struct:
	* `id`
	* `user_id`
	* `date_created`
	* `date_modified`
	* `permalink`
	* `title`
	* `description`
	* `is_navigation`
	* `is_template`
	* `is_redirect`

## `microblog.editPage`

* params:
	* 0: page ID
	* 1: username
	* 2: password
	* 3: content struct
		* `title`
		* `description`
		* `date_created`
		* `is_navigation`

## `microblog.deletePage`

* params:
	* 0: page ID
	* 1: username
	* 2: password
