---
title: "iOS and Mac URL schemes"
date: 2018-01-15
description: Send post text to the native apps.
order: 5
categories: developers
---
## Micro.blog for iOS and macOS

The iOS and Mac apps for Micro.blog support a special URL scheme to send text that you want to post. Opening these URLs will fill in the post text in Micro.blog, where you can edit or post it.

```
microblog://post?text=Hello%20world
```

For posting directly to Micro.blog-hosted blogs without using the apps, [see the posting API](/2017/api-posting/).
