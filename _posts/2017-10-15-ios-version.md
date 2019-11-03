---
title: "Micro.blog for iOS"
date: 2017-10-15
description: The official iOS version of Micro.blog.
order: 1
categories: apps
---
iOS users can use the native Micro.blog for iOS app, available as a free download from the App Store.

[![Download on the App Store](/assets/images/app-store.svg)](https://itunes.apple.com/us/app/micro-blog/id1253201335?ls=1&mt=8)
<small>Requires iOS 10.0 or later. Compatible with iPhone, iPad, and iPod touch.</small>

## Version history

### 1.7.2 --- Nov 2, 2019

* Updated sharing text from other apps to not use a blockquote if there is already markup in the shared text.
* Fixed more iOS 13 text colors for Dark Mode.
* Fixed adding "playsinline" attribute for video posted to WordPress blogs.

### 1.7.1 --- Oct 8, 2019

* Updated a few more screens for Dark Mode on iOS 13.
* Fixed updating timeline when favoriting posts in Discover.
* Fixed alignment of popover when selecting a post.
* Fixed disabling cross-posting from post options screen.
* Fixed uploading videos to WordPress.

### 1.7 --- Sep 19, 2019

* Added support for Dark Mode in iOS 13.
* Added button for using Sign in with Apple.
* Added new emoji topics selection in Discover.
* Fixed layout issues with sharing extension and minor updates to other screens.

### 1.6.2

* Fixed uploading some video formats.

### 1.6.1

* Improved video playback (including future inline playback support).
* Fixed loading categories and cross-posting screen.

### 1.6

* Added video upload for Micro.blog-hosted blogs. Video support is designed for short videos, about 2 minutes or less, and uses the same hosting plan as podcasting.
* Updated the new post and reply buttons.
* Fixed bug with external sites that don't support categories.
* Fixed updating hosted blog information when account changes.

### 1.5

* Added categories for new posts on Micro.blog-hosted blogs. Create categories in Micro.blog on the web and then tap the gear icon on iOS when composing a new post.
* Fixed a couple potential crashes and other minor fixes.

### 1.4.1

* Improved sharing from Safari to include both the URL and selected text. Use the share button in the bottom toolbar.
* Improved text size to more closely match system defaults. The text in the timeline is slightly bigger now.
* Fixed accessibility when writing a new post so that VoiceOver can be used.
* Fixed sharing images from some apps.
* Fixed prompting for multiple blogs when posting to an external site.
* Fixed default siez when scaling photos.
* Disabled username auto-complete on iOS 10 to work around crashes. This feature now requires iOS 11 or later.

### 1.4 --- Dec 4, 2018

* Added full-screen viewer for photos in the timeline.
* Added auto-complete of usernames when composing a new post.
* Added tapping on your blog hostname in the post screen to switch to a different blog if you have multiple Micro.blog-hosted blogs.
* Added option to set description on uploaded photos for better accessibility. Tap an attached photo thumbnail before posting to edit the text.
* Updated the following count in user profiles to show people you are not yet following to help you discover new people to follow.
* Fixed maximum size when scaling uploaded photos.
* Fixed potential crash when sharing photos from other iOS apps.
* Fixed layout issues on new bigger iPhones.
* Fixed sharing some web page titles.
* Improved accessibility of menus and buttons in the app.
* Improved showing push notifications in the app.

### 1.3.5 --- Apr 21, 2018

* Fixed crash when posting a photo without any text.
* Plus all the photo-related improvements from version 1.3.4, including non-square photos.

### 1.3.4 --- Apr 20, 2018

* Added icon to toggle square photos vs. original aspect ratio.
* Fixed crash when sharing from the Photos app.
* Fixed width/height tags for non-square photos when publishing to WordPress.
* Updated default photo size to 1800x1800.
* Updated delete message and added warning when replying with a photo.

### 1.3.3 --- Feb 7, 2018

* Added swipe left on a post to view the conversation.
* Added feed settings button when writing a new post for quickly toggling off cross-posting.
* Added confirmation alert when removing a post.
* Updated character counter to not include Markdown.
* Updated sharing from other apps to not use the current draft or save it.
* Fixed compatibility with some XML-RPC servers.
* Fixed opening conversations from links in the timeline.

### 1.3.2 --- Jan 9, 2018

* Fixed incorrectly scaling up small shared images.
* Fixed opening some types of Micro.blog URLs in the app.

### 1.3.1 --- Dec 30, 2017

* Fixed sharing photos from other apps.
* Fixed error after posting photo to Movable Type sites.
* Updated fonts and layout in several screens to be more consistent.

### 1.3 ---- Dec 19, 2017

* Added new app icon!
* Added "Show More" button to load more posts in the timeline.
* Added URL scheme microblog://post?text=Hello to automate creating new blog posts from apps like Drafts and Workflow.
* Fixed scaling photos shared from other apps and an issue with calling some posting APIs.

### 1.2.3 --- Nov 16, 2017

* Fixed posting to Micropub servers.
* Fixed layout for iPhone X on more screens.

### 1.2.2 --- Nov 4, 2017

* Fixed pull-to-refresh timeline on iPhone X.
* Fixed photo cropping preview on iPhone X and better filters layout on all devices.

### 1.2.1 --- Nov 1, 2017

* Fixed sharing extension keyboard, iOS 10 support, and other issues.
* Fixed dynamic text sizes.
* Fixed more layout issues on iPhone X.
* Updated to disable landscape mode on the iPhone.

### 1.2 --- Oct 30, 2017

* Added sharing extension for posting photos and links from other apps.
* Added following users list to user profile screens.
* Added automatic saving of post draft text.
* Updated Discover pane with posts and users together instead of photos tab.
* Updated layout for iPhone X.

### 1.1.3 --- Oct 4, 2017

* Fixed potential crashes while editing.
* Fixed layouts on some phones and minor improvements to Markdown highlighting.
* Fixed external Micropub posting compatibility with Silo.pub and to show more errors.

### 1.1.2 --- Sep 25, 2017

* Added drag and drop for attaching photos to a blog post.
* Added reply button when viewing a conversation.
* Fixed potential crash when typing a post.
* Fixed sending raw HTML for photos to Micropub servers.

### 1.1.1 --- Sep 20, 2017

* Updated WordPress posting to always use "Standard" post format for long posts with titles.
* Added swipe left/right on new post text view to move the cursor.
* Fixed font size and spacing of post title field.
* Fixed post text covering up character counter.
* Fixed truncated posts when using "&amp;" character.
* Fixed version number in Settings.

### 1.1 --- Sep 15, 2017

* Added support for longer posts with titles. Type more than 280 characters to reveal an optional title field.
* Added Markdown syntax highlighting while typing.
* Added formatting bar for common styles. Select a phrase and tap the link button for easier markup.
* Added support for uploading multiple photos.
* Added a Browser sharing item to open the current post on the web.
* Fixed a potential crash in profile links and glitch when holding down to select text.

### 1.0.4 --- Aug 11, 2017

* Fixed crash with the new "Share..." menu item on the iPad.

### 1.0.3 --- Aug 9, 2017

* Added name, URL, and bio to user profile screen.
* Added "Share..." menu item for copying or sharing a link to the selected post.
* Added version number to settings screen and confirmation when signing out.
* Improved photo uploads, pull-to-refresh, and handling posting errors.

### 1.0.2 --- Jul 17, 2017

* Added keyboard shortcuts when connected to an iPad keyboard.
* Fixed discovery of some external servers.
* Fixed alignment in post options menu.

### 1.0.1 --- Jul 6, 2017

* Added support for Dynamic Type in the timeline and new post screen.
* Fixed IndieAuth error setting up Micropub posting.

### 1.0 --- Jul 3, 2017

* First release.
