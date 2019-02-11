---
title: "Custom themes"
date: 2019-01-30
description: Creating or copying custom themes.
order: 5
categories: hosted
---

Custom themes contain HTML and CSS templates using the [Hugo](https://gohugo.io/) blogging engine. Creating a new template in a custom theme will override a template with the same name in the built-in design you've chosen for your blog.

You can also pick the Blank design and clone an existing GitHub repository when creating your new custom theme. Micro.blog will download that repository and make its files available for editing in your custom theme.

Some special templates used by Micro.blog are stored in the Blank design and used by all themes. When picking a template to use, Micro.blog first looks in your custom theme, then one of the built-in designs, and then the Blank design. If you need to customize one of these special templates, you can copy it from [our repository on GitHub](https://github.com/microdotblog/theme-blank).

There's a 6-minute screencast video showing more about how custom themes work [on YouTube](https://www.youtube.com/watch?v=MLUWnrMKVdg).

## Sharing themes

If you've created a theme and want to share it with other Micro.blog users, save it in its own repository on GitHub. Users can clone your repository when starting their own custom theme. If your custom theme depends on an existing built-in design, make sure to tell potential users of the theme to select that design too.

## File types

Micro.blog supports editing many common file types such as HTML files, Markdown, JSON, and CSS. When cloning a repository into a new custom theme, Micro.blog will skip any files that can't be edited. For example, it will not copy image files. If you need to use an image file in your theme, upload it to your blog under Posts → Uploads.
