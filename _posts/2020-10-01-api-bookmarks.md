---
title: "JSON API: Bookmarks"
date: 2020-10-01
description: Bookmarks and highlights via the API.
order: 15
categories: developers
---

**Get bookmarks**

Returns JSON Feed that also includes an extra `links` array in `_microblog` for each item. These link IDs can be used with "/hybrid/bookmarks/123" to show the reader/highlighting web interface.

```
GET /posts/bookmarks
Authorization: Bearer 123456789
```

```
{
  "version": "https://jsonfeed.org/version/1",
  "title": "Micro.blog - Bookmarks",
  "home_page_url": "https://micro.blog/",
  "feed_url": "https://micro.blog/posts/bookmarks",
  "_microblog": {
    "about": "https://micro.blog/about/api"
  },
  "items": [
    {
      "id": "1545",
      "content_html": "Daring Fireball: On TikTok as a Security Threat <a href=\"https://daringfireball.net/2020/08/on_tiktok_as_a_security_threat\">daringfireball.net</a><p class=\"post_archived_links\">Read: <a href=\"/bookmarks/123\">daringfireball.net</a> ",
      "url": "https://daringfireball.net/2020/08/on_tiktok_as_a_security_threat",
      "date_published": "2020-09-03T15:15:02+00:00",
      "author": {
        "name": "daringfireball.net",
        "url": "https://daringfireball.net/",
        "avatar": "https://daringfireball.net/graphics/favicon.ico?v=005",
        "_microblog": {
          "username": "daringfireball.net"
        }
      },
      "_microblog": {
        "date_relative": "2020-09-03 10:15 am",
        "date_favorited": "2020-09-03T15:15:03+00:00",
        "links": [
          {
            "id": 123,
            "url": "https://daringfireball.net/...",
            "archived_url": "https://s3.amazonaws.com/micro.blog/..."
          }
        ],
        "is_bookmark": true,
        "is_favorite": true,
        "is_deletable": false,
        "is_conversation": false
      }
    }
  ]
}
```

**Get highlights**

Get recent user highlights in bookmarked web pages. Returns JSON Feed that also includes total highlight count in root-level `_microblog`.

```
GET /posts/bookmarks/highlights
Authorization: Bearer 123456789
```

```
{
  "version": "https://jsonfeed.org/version/1",
  "title": "Micro.blog - Highlights",
  "home_page_url": "https://micro.blog/",
  "feed_url": "https://micro.blog/posts/bookmarks/highlights",
  "_microblog": {
    "about": "https://micro.blog/about/api",
    "count": 13
  },
  "items": [
    {
      "id": 26,
      "title": "Daring Fireball: On TikTok as a Security Threat",
      "content_text": "The fact that TikTok is owned and controlled by a Chinese company is reason enough to be suspicious",
      "date_published": "2020-09-10T18:02:56+00:00"
    }
  ]
}
```

**Load web reader**

Returns HTML/JS for the web reader that also allows highlighting. This can be loaded in an in-app web view. Uses link ID from `/posts/bookmarks`.

```
GET /hybrid/bookmarks/123
Authorization: Bearer 123456789
```

**Delete a highlight**

Highlight ID as returned from `/posts/bookmarks/highlights`.

```
DELETE /posts/bookmarks/highlights/:id
Authorization: Bearer 123456789
```
