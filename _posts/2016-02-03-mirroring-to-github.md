---
title: "Archiving to GitHub"
date: 2016-02-03
updated: 2020-08-18
description: Also copy your posts to GitHub Pages.
order: 4
categories: hosted
---

Micro.blog can automatically copy your posts to a GitHub repository. It uses a similar structure to the Blog Archive Format: an HTML file and JSON Feed of all your blog posts, and an "uploads" folder with all of your photos. Micro.blog will update the archive on GitHub approximately once a week. (If you need an immediate backup, use the Posts → Export feature.)

To enable GitHub archiving, click on Posts → Design and enter a GitHub repository name. Only include the repository name, not a full URL. When you save your blog settings, Micro.blog will prompt you to sign in to your GitHub account.

The repository must be public and must be on the same GitHub account you are signed in as, not a separate GitHub organization. Micro.blog will not have access to any private repositories. Make sure the GitHub repository is not empty. (If it's a new repository, you can initialize the repository with a README from GitHub.)

To disable archiving and sign out of GitHub, clear the repository name and save your blog settings again from the Posts → Design tab.

Micro.blog does not attempt to remove files from your GitHub repository. If you delete an upload from your blog, you'll need to also delete it manually from GitHub.

If you want [GitHub Pages](https://pages.github.com/) to serve your archive over the web, use a repository name in the format `your-username.github.io`.
