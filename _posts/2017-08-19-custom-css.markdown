---
title:  "Custom CSS"
date:   2017-08-19 09:30:00
description: Customizing your hosted microblog with CSS.
---

You can pick from several default themes for your Micro.blog-hosted site. You can also add CSS to further customize the design of your site.

To edit your site's CSS, go to Account → "Edit Domains & Design" → Edit (next to your hostname) → "Edit CSS". When you type or paste in a snippet of new CSS and click "Update CSS", your microblog will be republished with the custom CSS.

It's even possible to replace some text using CSS. For example, in the Primrose theme the copyright footer can be overridden with CSS like this:

```
.footer {
	padding-top: 10px;
}

.footer:after {
	content: "Creative Commons License"
}

.copyright {
	display: none;
}
```

If you have any questions about themes or CSS, you can also check in the #design channel in the [Indie Microblogging Slack](https://microblogging.slack.com/).