---
title:  "Timeline display rules"
date:   2018-01-11 18:00:00
description: How Micro.blog processes feeds.
---

Micro.blog follows a few rules when processing your RSS or JSON Feed into microblog posts to show in the timeline:

* If the post has no title and is 280 characters or less, the text is shown directly in the Micro.blog timeline.
* If the post has no title and is _over_ 280 characters, the text is truncated with a link back to the full post on your site.
* If there's a title and it looks like a date or number, Micro.blog ignores it, as if there were no title. It then tries to show the text in the timeline.
* If there's a title but the entire post text is actually just a photo, it uses the title but also shows the photo inline. If there is a title, text, and photo, only the title is shown and linked back to your site.

For any other kind of post with a title, the title is shown in the timeline with a link back to the full post on your web site. Micro.blog displays your domain name when it needs to append a link to your post.

Micro.blog counts characters for the text version of your post, excluding the extra characters used in any HTML tags.

## Allowed HTML tags

Micro.blog removes some HTML from blog posts before displaying them in the timeline. The following HTML elements are currently supported:

* `a`, `span`, `b`, `i`, `img`, `strong`, `em`, `div`, `p`, `br`, `blockquote`, `ul`, `ol`, `li`, `code`, `pre`, `audio`

And these attributes are allowed on certain elements:

* **`a`**: `href`, `title`, `class`
* **`span`**: `style`, `class`
* **`img`**: `src`, `style`, `class`, `width`, `height`, `alt`
* **`audio`**: `src`, `controls`

For `style`, only these CSS property names are allowed:

* `width`, `height`, `max-width`, `max-height`, `min-width`, `min-height`, `border`
