---
title: "Custom CSS"
date: 2017-08-19 09:30:00
updated: 2020-08-04
description: Customizing your hosted microblog with CSS.
order: 2
categories: hosted
---
You can pick from several default themes for your Micro.blog-hosted site. You can also add CSS to further customize the design of your site.

To edit your site's CSS, go to Account → "Edit Domains & Design" → Edit (next to your hostname) → "Edit CSS". When you type or paste in a snippet of new CSS and click "Update CSS", your microblog will be republished with the custom CSS.

If you wanted to customize all the photos on your microblog to include a border, you might add CSS like this:

```css
img {
  border: 1px solid gray;
}
```

It's even possible to replace some text using CSS. For example, in the Primrose theme the copyright footer can be overridden with CSS like this:

```css
.footer {
  padding-top: 10px;
}

.footer:after {
  content: "Creative Commons License";
}

.copyright {
  display: none;
}
```

One of our newest themes is called Marfa. If you use this theme and would like to change the default colors, Micro.blog user @roelwillems has [written a guide on his microblog](http://roelwillems.com/2018/04/15/i-switched-my.html) for what CSS to use.
