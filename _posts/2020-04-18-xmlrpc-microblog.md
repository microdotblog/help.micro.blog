---
title: "Micro.blog XML-RPC API"
date: 2020-04-18
description: Parameters for using Micro.blog's XML-RPC API.
order: 14
categories: developers
---

This page outlines the parameters and responses for Micro.blog's XML-RPC API. It is very similar to the MetaWeblog API, but updated for Micro.blog to support features such as pages and downloading all posts.

## Discovery

The XML-RPC endpoint for Micro.blog is:

`https://micro.blog/xmlrpc`

To discover the XML-RPC settings, you can prompt the user to enter their blog URL: `my-username.micro.blog` or a custom domain name. Look in the HTML response for a `<link>` tag with "EditURI":

`<link rel="EditURI" type="application/rsd+xml" href="https://my-username.micro.blog/rsd.xml" />`

Download this RSD file, which contains not just the endpoint URL but also a `blogID` attribute that you can pass with some XML-RPC requests. This tells Micro.blog which blog to post to when the user has multiple blogs.

```xml
<rsd xmlns="http://archipelago.phrasewise.com/rsd" version="1.0">
  <service>
    <engineName>Micro.blog</engineName>
    <engineLink>https://micro.blog/</engineLink>
    <homePageLink>https://micro.blog/</homePageLink>
    <apis>
      <api name="Micro.blog" blogID="10" preferred="true" apiLink="https://micro.blog/xmlrpc"/>
      <api name="MetaWeblog" blogID="10" preferred="false" apiLink="https://micro.blog/xmlrpc"/>
    </apis>
  </service>
</rsd>
```

## Example XML

Micro.blog's XML-RPC API uses method names such as `microblog.newPost` and `micoblog.getPost`. Here's an example of what a request might look like to download the 20 most recent posts on a blog. The blog ID should be from the RSD step. The last parameter is an offset to start at, so that you can page through the posts with multiple requests.

```xml
<?xml version="1.0"?>
<methodCall>
  <methodName>microblog.getPosts</methodName>
  <params>
    <param>
      <value><int>blog ID</int></value>
    </param>
    <param>
      <value><string>manton</string></value>
    </param>
    <param>
      <value><string>mypassword</string></value>
    </param>
    <param>
      <value><int>20</int></value>
    </param>
    <param>
      <value><int>0</int></value>
    </param>
  </params>
</methodCall>
```

## `microblog.newPost`

* params:
	* 0: blog ID
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
	* 0: blog ID
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
	* 0: blog ID
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
	* 0: blog ID
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
	* 0: blog ID
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
