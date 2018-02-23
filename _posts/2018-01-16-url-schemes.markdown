---
title:  "iOS and Mac URL schemes"
date:   2018-01-15 10:00:00
description: Send post text to the native apps.
---

### Micro.blog for iOS and macOS

The iOS and Mac apps for Micro.blog support a special URL scheme to send text that you want to post. Opening these URLs will fill in the post text in Micro.blog, where you can edit or post it.

```
microblog://post?text=Hello%20world
```

For posting directly to Micro.blog-hosted blogs without using the apps, [see the posting API](http://help.micro.blog/2017/api-posting/).

### Sunlit for iOS (in beta)

The companion app to Micro.blog for photos, Sunlit for iOS, supports additional URL schemes for managing stories.

```
sunlit://publish?story=My%20Trip
```

> Publish one of your existing stories, given a story name. If the story has a space in its name, it should be URL encoded.

```
sunlit://open?story=My%20Trip
```

> Open one of your existing stories by name.

```
sunlit://create?story=Vacation
```

> Create a new blank story and give it a name.

```
sunlit://add-photo?story=Vacation
```

> Add a photo from the clipboard to an existing story. The clipboard can contain one or more images. (Can be used with Launch Center Pro or Workflow to add photos from other apps.)

```
sunlit://get-stories
```

> Return a list of stories using x-callback-url. Comma-separated story titles will be added in the query parameter `stories`.

```
sunlit://get-url?story=Vacation
```

> Return the URL for a published story using x-callback-url. The published URL will be added in the query parameter `url`.

### x-callback-url

To return to another app after Sunlit processes the request, include an [x-callback-url](http://x-callback-url.com/) action when calling Sunlit, with an `x-success` value of the other app's URL scheme.