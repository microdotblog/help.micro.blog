---
title:  "Connecting with Instagram"
date:   2017-07-05 22:00:00
description: Automatically posting Instagram photos.
---

[The iOS app for Micro.blog](https://itunes.apple.com/us/app/micro-blog/id1253201335?ls=1&mt=8) is a great way to post photos to a hosted microblog. It includes photo cropping and filters, and you can publish short text posts as well as photos within the same app. We think the best experience for most blogs will be to post your photos directly with the Micro.blog app.

If you enable Twitter cross-posting, your photos from a microblog will also be sent to Twitter as native tweets with an embedded photo. Because of limits in Instagram's API, however, you can't cross-post from a blog to your Instagram account.

The service [OwnYourGram](https://ownyourgram.com/) can take your Instagram photos and automatically post them to a Micro.blog-hosted blog. OwnYourGram uses the Micropub API to upload photos to your microblog. Here are the steps to enable it:

1. In Micro.blog on the web, go to Account → Edit Apps. Scroll down to "Instagram" and enter your Instagram username, then click Update.

2. In Instagram itself, make sure to include the URL for your Micro.blog-hosted blog, such as `http://your-username.micro.blog/`. OwnYourGram will use this to verify that your microblog and Instagram account are owned by the same person.

3. You'll also need to repeat these steps for Twitter or GitHub, which OwnYourGram will use to authorize your account. Enter your Twitter or GitHub username under Account → Edit Apps. Make sure that whichever service you use, your profile also links back to your Micro.blog-hosted blog URL.

4. Your account in Micro.blog should be verified. You can do this by entering `http://your-username.micro.blog/` for your site URL under Account if it's not already there.

5. In [OwnYourGram](https://ownyourgram.com/), enter your microblog URL when signing up. OwnYourGram will walk you through setting up your account and publishing your first photo from Instagram.

While using OwnYourGram, you can still post photos and microblog posts separately to Micro.blog whenever you'd like to using the Micro.blog app. To disable OwnYourGram's automatic posting, click the "Disconnect Instagram" button in the OwnYourGram dashboard.