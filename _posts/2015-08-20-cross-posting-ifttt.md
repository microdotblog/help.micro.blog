---
title: "Cross-posting with the IFTTT service"
date: 2015-08-20
updated: 2020-09-29
description: Write on your microblog and send via IFTTT.
order: 3
categories: cross-posting
---
Now that you have a blog that contains all your microblog posts, you can wire it up to Twitter to automatically cross-post them as tweets. You're _writing on your own site first_, but the posts still go out to your Twitter followers.

Micro.blog comes with built-in cross-posting to Twitter, Tumblr, Mastodon, Medium, and LinkedIn. You can access it under the "Edit Feeds & Cross-posting" button on your account. [Learn more here][1].

Another option for cross-posting is a service like IFTTT. This is a good choice if you need to post to other services that Micro.blog doesn't support.

[IFTTT][2] — short for "if this, then that" — is a great solution for connecting different web services together. With just a few clicks, you can configure IFTTT to take the microblog posts in your RSS feed and automatically send the post content to Twitter.

Start with the [feed channel][3]. Add a "New feed item" trigger, which will run the IFTTT recipe whenever the RSS feed includes a new post.

The second half of the recipe uses the [Twitter channel][4]. Configure the "Post a tweet" action to take the RSS item content and send it to Twitter as the tweet text.

In the tweet action, you want to replace the text with the special {% raw %}``{{EntryContent}}``{% endraw %} value. This will take the full text from the RSS feed and include it in the tweet.

You can continue to reply and bookmark directly on Twitter, and also on Micro.blog. Replies posted directly on Micro.blog aren't included in your microblog RSS feed, so they won't be sent to Twitter.

[1]: /2016/cross-posting-twitter/
[2]: https://ifttt.com/
[3]: https://ifttt.com/feed
[4]: https://ifttt.com/twitter
