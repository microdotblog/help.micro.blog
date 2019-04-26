---
title: "Truncated posts on your microblog"
date: 2019-04-26
description: Customizing a theme.
order: 6
categories: hosted
---

If you write a lot of longer posts, you may want to only include the first part of those posts on your microblog's home page. By default, Micro.blog will include the full text of each post on your home page. You can use custom themes to customize this.

To get started, create a new custom theme or edit an existing one. In Micro.blog on the web, click Posts → Design → "Edit Custom Themes". After you've created the new theme, go back to the Design screen for your blog to select the new theme, then click "Update Microblog Settings".

<img src="/assets/web/truncated-themes.png" width="611" height="114" alt="Custom theme buttons" />

Click "Edit Custom Themes" again to edit your custom theme. It will automatically show any templates used in your microblog's current design. Click any of the templates to create an edited copy of the template that will override the default.

<img src="/assets/web/truncated-templates.png" width="694" height="155" alt="Templates list" />

To change the home page, edit the template `list.html`. Find the HTML in the template that looks like this:

```html
  <div class="e-content">{% raw %}
    {{ .Content }}
  {% endraw %}</div>
```

We'll want to change the `{{ .Content }}` tag to `{{ .Summary }}`, as well as add a link to the full post. Change it to this and save the template:

```html
  <div class="e-content">{% raw %}
    {{ .Summary }}
    {{ if .Truncated }}
      <p><a href="{{ .RelPermalink }}">Read More</a></p>
    {{ end }}
  {% endraw %}</div>
```

This will include the first 70 words of the post, then a link to the full post. If you'd like to control where the post is truncated, you can add a special comment in between multiple paragraphs of your blog post. Micro.blog's theme will use this to effectively cut the post in half:

```html
  First paragraph of your blog post here.

  <!--more-->

  The rest of the blog post continues from here.
```
