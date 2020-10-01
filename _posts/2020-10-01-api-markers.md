---
title: "JSON API: Markers"
date: 2020-10-01
description: Syncing the last-read position.
order: 15
categories: developers
---

**Set marker position**

Save the last-read position to Micro.blog so that when resuming reading the timeline on another device, that device can automatically scroll to the last post that was read.

```
POST /posts/markers
Authorization: Bearer 123456789
````

With parameters:

* `channel`: "timeline", "mentions", "discover", etc.
* `id`: the post ID
* `date_marked`: date/time for when the client saved this data

**Get marker position**

The `/posts/check` API call can be queried occasionally to check whether there are new posts. It also includes the marker positions for each channel.

```
GET /posts/check
Authorization: Bearer 123456789
````

```
{
 "count": 1,
 "check_seconds": 120,
 "markers": {
   "timeline": {
     "id": "12345",
     “date_marked":"2020-09-29T05:00:00.000+00:00"
   }
 }
}
```
