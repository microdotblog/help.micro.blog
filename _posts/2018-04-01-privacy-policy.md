---
title: "Privacy policy"
date: 2018-04-01
description: What information we collect.
order: 3
categories: policies
---
Ad-supported businesses often track a lot of information about you to better serve advertisers. Micro.blog isn't like that. We have no ads and the business model is a simple subscription where you pay for extra features you use, such as blog hosting. We only collect enough information to run Micro.blog.

This help page outlines what kind of data is used by each major component of Micro.blog. It will be routinely updated and the version history [for the entire help site](https://github.com/microdotblog/help.micro.blog) is available on GitHub.

## Micro.blog platform

You register with a name, email address, username, and web site URL. We store this information in a database on the Micro.blog servers. We send email to your address such as subscription receipts or other occasional notifications. If you do not upload a profile photo, we use a hash of your email address to look up a profile photo on Gravatar.

Micro.blog does not have traditional passwords. When signing in, we generate a random number to establish your web browser session. There are also tokens on your account that can be used with third-party apps. We use cookies to keep track of when you are signed in to Micro.blog.

Your time zone and IP address are sent from a web browser when visiting Micro.blog. We store the time zone with your account and use it to adjust all the post times to your local time. We use the IP address to rate-limit a client when there are too many requests in a short time period.

The timeline in Micro.blog is built in part from RSS or JSON feeds. When you add a feed to Micro.blog, it is considered public and may be included in subscription exports. Do not add private feeds or feed URLs that contain passwords.

If you enable site mirroring to GitHub, we store an authentication token on Micro.blog that lets Micro.blog read and write to your GitHub repositories. If you enable cross-posting to Twitter or Facebook, we store authentication information that lets Micro.blog post to your accounts.

## Micro.blog for iOS and macOS, Sunlit for iOS

The native apps for Micro.blog store a token for your account in the system keychain. The apps also store basic user and microblog information in preferences.

When authenticating with WordPress and compatible blogs, Micro.blog stores your WordPress password in the system keychain. The XML-RPC API sends the password with each request, so we recommend using SSL if you're using an external blog.

Micro.blog for iOS use the Fabric framework to track crashes and usage. This data is sent to Fabric servers run by Google. No Micro.blog account information is sent to Fabric.

## Credit cards

Micro.blog uses Stripe for credit card processing. Credit card information is sent directly from your web browser to Stripe. Micro.blog does not see or store your credit card number.

Stripe manages your billing information, including name, zip code, credit card number, and expiration date. Your Micro.blog email address and username are stored on Stripe for sending receipt emails, and so that we can look up your account to confirm or update something about your subscription, usually from a support request.

We use Baremetrics to show reports on subscriptions. Baremetrics connects to Stripe and automatically imports subscription information including customer name.

## Supporting services

Micro.blog relies on a few other services as supporting infrastructure, including:

* Linode: Hosting the app and database servers.
* LogDNA: Complements our app logging. Logs don't contain your name or email address.
* Amazon Web Services: Additional backups are stored on S3.
* Slack: There is a public Slack that any Micro.blog user can join. You use your name and email address to register, but they do not need to match your Micro.blog account information. We also use Slack for some private notifications about new registrations or cancellations.
* Zendesk: When you email help@micro.blog, your email goes to Zendesk.
* Mailchimp: We occasionally send newsletter-style email to all users. There is a link to unsubscribe in those emails. Mailchimp's companion service Mandrill is also used to send automated emails such as sign-up confirmations or blog expiration warnings.
