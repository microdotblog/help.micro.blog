---
title:  "Using MarsEdit"
date:   2015-08-22 09:00:00
description: Understanding the support for XML-RPC.
---

If you have a paid microblog on Micro.blog, you can use apps like [MarsEdit](http://www.red-sweater.com/marsedit/) that support the Blogger API or MetaWeblog API. This is a protocol from the early days of blogging that uses XML-RPC to communicate with a server.

Remember that there are no passwords on Micro.blog. To sign in with an app like MarsEdit, use your Micro.blog username and an "app token" for the password. Your account comes with a default token for MarsEdit, but you can generate a new one whenever you want. Click on [Account](http://micro.blog/account) to view or manage your app tokens.

Start in MarsEdit by creating a new weblog. When prompted for the URL, enter your-username.micro.blog. This is where your published microblog lives, so MarsEdit will need to look there to automatically discover the XML-RPC endpoint.

If you need to manually configure a blogging client, choose the Blogger API and point it to `micro.blog/xmlrpc`. This usually won't be necessary if the client has already discovered the proper settings.