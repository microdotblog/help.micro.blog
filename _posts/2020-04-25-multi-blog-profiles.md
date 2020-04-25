---
title: "Profile photos with multiple blogs"
date: 2020-04-25
description: Using different headers when you have more than 1 blog or podcast.
order: 16
categories: hosted
---

It's possible on Micro.blog to have multiple blogs or podcasts for a single Micro.blog account. When managing multiple blogs, you may want to override the image so that it's different than your profile photo.

## Changing the header

To change the home page to use a new image instead of your profile photo, you'll need to create a custom theme to override the header on your site:

1. Upload a new photo under Posts → Uploads. Copy the URL for the uploaded file.
2. Click on Posts → Design and then Edit Custom Themes.
3. Create a new theme. You can name it whatever you want.
4. Click on the theme to edit it and look for the template `layouts/partials/profile.html`.
5. In that template, replace "{{ .Site.Author.avatar }}" with the URL for the image you uploaded in the Uploads tab.
6. After saving it, make sure to go back to Posts → Design and select the custom theme to use for your site.

## Podcast cover art

To customize the podcast cover art, upload a new PNG in Micro.blog on the web under Posts → Uploads. The dimensions should be 1400x1400 because that's what Apple's podcast directory prefers. Then click on Posts → Design and click the small preview of your current profile photo to pick the cover art for your podcast.

## iOS home screen icon

Micro.blog-hosted blogs have a basic "favicon" based on your profile photo. This should appear in web browsers and feed readers. When adding a blog as an icon on the iOS home screen, though, a custom image needs to be provided to iOS.

1. Upload a PNG of the right dimensions under Posts → Uploads. Copy the URL for the uploaded file.
2. Create a new custom theme on Micro.blog (or use your current custom theme if you already have one). Custom themes are managed under Posts → Design → Edit Custom Themes.
3. Search for the template `layouts/partials/head.html` and click on it to edit it.
4. Add the HTML to reference your uploaded PNG file. It should be something like:

```
<link rel="apple-touch-icon" href="url-here" />
```

After saving the template, make sure the custom theme is set for your blog.
