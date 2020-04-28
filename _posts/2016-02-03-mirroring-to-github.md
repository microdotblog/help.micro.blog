---
title: "Mirroring to GitHub"
date: 2016-02-03
updated: 2020-04-28
description: Also publish your site to GitHub Pages.
order: 4
categories: hosted
---

_**This feature is currently disabled** while we consider how best to rework it so that it's faster and more flexible. There's also an archive export under Posts → Export that will create a full export of your blog, including photos and other uploads._

If you want to export or mirror your hosted microblog site, you can have it automatically publish to a GitHub repository every time you make a change. Both the generated HTML and the source Markdown and Jekyll files will be exported. This is useful as a way to migrate your content out of Micro.blog, or to use GitHub Pages as the primary host for your content.

To configure, you'll need to create a new repository on GitHub. For compatibility with GitHub Pages, it should be in the format `username/username.github.io` (or `organization/organization.github.io`). You'll also need to create an access token on GitHub (under "Settings" → "Developer settings" → "Personal access tokens") to grant access to Micro.blog. Make sure the "repo" scope is checked when creating the access token on GitHub.

You can set the GitHub repository and access token in Micro.blog under Account → "Edit Domains & Design". Remember the repository must include your username or organization name as well as the repository name.
