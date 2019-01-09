---
title: "ActivityPub"
date: 2018-11-07
description: Mastodon-compatible usernames in Micro.blog.
order: 3
categories: developers
---
If you have your own domain name hosted on Micro.blog, you can enable the ActivityPub API. This lets a Mastodon user follow your blog directly by using `@you@yourdomain.com`. It also lets you follow Mastodon users and reply to their posts.

To enable ActivityPub support, click Account from Micro.blog on the web and scroll down to the ActivityPub section. You'll also need a custom domain name pointed to Micro.blog with SSL enabled.

Your Mastodon-compatible username on Micro.blog is independent of any actual Mastodon instance. You can't use it to sign in to Mastodon or use Mastodon apps. Instead, you can search for Mastodon users inside Micro.blog and reply to posts, and Mastodon users can follow your Micro.blog account and reply to posts as well. Your posts on Micro.blog can show up in Mastodon's federated timeline.

To follow a Mastodon user on Micro.blog, click Discover on the web and look for the search button:

<img src="/assets/images/web/discover-search.png" width="500" height="50" alt="Screenshot of search box">

Then enter a full Mastodon username in the search box:

<img src="/assets/images/web/discover-mastodon.png" width="500" height="74" alt="Screenshot showing search for a Mastodon username">

Some answers to common questions about ActivityPub support in Micro.blog:

**How is Mastodon support enabled on my account?** In Micro.blog on the web, click Account → ActivityPub. You will be prompted to select a username. A paid hosted microblog is required so that Micro.blog can use your custom domain name.

**How can I find Mastodon users to follow on Micro.blog?** As more Micro.blog users interact with Mastodon users, some of those users will naturally show up in conversations or even be featured in our Discover timeline. You can also add a specific Mastodon user by searching for their full username.

**Will Micro.blog now start showing follower counts?** No, it's important to me that we don't change the Micro.blog user experience to resemble every other social network. When you follow a Micro.blog user from Mastodon, an individual Mastodon instance will have its own follower count just for that instance. Any follower count shown in Mastodon for a Micro.blog user will be wrong. This isn't ideal, but it's the best we can currently do with how Mastodon works.

**What about Content Warnings?** Micro.blog does not support them. I've heard from Mastodon fans who like Content Warnings, but I'm concerned about introducing extra friction in both the posting and reading experience. We'll reevaluate this feature later.

**What happens to direct messages sent from Mastodon to Micro.blog?** Micro.blog does not have any private posts by design. Direct messages sent from Mastodon are converted into a private email.

**Is this going to make Micro.blog just like Mastodon?** No, this is not a clone of Mastodon merged into Micro.blog or running alongside it. It's a from-scratch implementation of a few common APIs that Mastodon uses so that both systems can talk to each other.

**Will third-party Mastodon clients work with Micro.blog?** Not currently. We might consider this later, but because of the UI differences, I think it's a better fit to have third-party apps designed for either Micro.blog or IndieWeb standards.

**What will happen to the Micro.blog community?** I hope that this will help grow the community, without taking away from what has worked well on Micro.blog. While you might see some Mastodon posts, and those Mastodon users can interact with Micro.blog users, users from other Mastodon instances won't know about our community guidelines or expectations for Micro.blog. The community will remain predominantly Micro.blog users who share our goals for the platform.

**How does Micro.blog's mute feature work with Mastodon?** Muting in Micro.blog has been expanded to support muting individual Mastodon users, or entire Mastodon instances based on their domain name. We have also preloaded a common [list of Mastodon instances that are muted automatically](https://github.com/tootcafe/blocked-instances) because of code of conduct violations.
