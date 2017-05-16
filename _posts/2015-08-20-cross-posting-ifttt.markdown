---
title:  "More options for cross-posting"
date:   2015-08-20 07:00:00
description: Write on your microblog and send via IFTTT.
---

Now that you have a blog that contains all your microblog posts, you can wire it up to Twitter to automatically cross-post them as tweets. You’re _writing on your own site first_, but the posts still go out to your Twitter followers.

Micro.blog comes with built-in cross-posting to Twitter. You can access it under the “Edit Feeds & Cross-posting” button on your account. [Learn more here][1].

Another option for cross-posting is a service like IFTTT. This is a good choice if you need to post to Facebook and other services besides just Twitter.

[IFTTT][2] — short for "if this, then that" — is a great solution for connecting different web services together. With just a few clicks, you can configure IFTTT to take the microblog posts in your RSS feed and automatically send the post content to Twitter.

Start with the [feed channel][3]. Add a "New feed item" trigger, which will run the IFTTT recipe whenever the RSS feed includes a new post.

The second half of the recipe uses the [Twitter channel][4]. Configure the "Post a tweet" action to take the RSS item content and send it to Twitter as the tweet text.

In the tweet action, you want to replace the text with the special &#123;&#123;EntryContent&#125;&#125; value. This will take the full text from the RSS feed and include it in the tweet.

You can continue to reply and favorite directly on Twitter, and also on Micro.blog. Replies posted directly on Micro.blog aren't included in your microblog RSS feed, so they won't be sent to Twitter.

[1]:	http://help.micro.blog/2016/cross-posting-twitter/
[2]:	http://ifttt.com/
[3]:	https://ifttt.com/feed
[4]:	https://ifttt.com/twitter