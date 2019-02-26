---
title: "IndieAuth"
date: 2019-02-26
description: Signing in from the web.
order: 5
categories: developers
---

If you are building a web app and want to call the Micro.blog API, the best experience will be to use [IndieAuth](https://indieauth.net/). This API is based on OAuth and will let any Micro.blog user sign in with their blog and give your app access to their account.

Start by showing a web form with a single field: the URL for the web site owned by the user signing in. This could be a custom domain name or username.micro.blog.

After the user types in their URL, your app should request the HTML for their home page and look for the following tags:

```
<link rel="authorization_endpoint" href="https://micro.blog/indieauth/auth" />
<link rel="token_endpoint" href="https://micro.blog/indieauth/token" />
```

These URLs are the same for all Micro.blog users, but by checking their home page your app can be more compatible with other platforms. For example, if your app only needs to create new blog posts, it can work with both Micro.blog and other Micropub servers.

Redirect the user to that first URL, appending 6 parameters:

* me: the URL of the user's blog
* redirect_uri: the callback URL for your app
* client_id: the URL for your app's home page, to identify your app to the user
* state: a random number you generate, which you can use to verify the request when Micro.blog redirects back to your app
* scope: the value "create", because you might want to create new posts
* response_type: the value "code", because you want a new auth code

The full URL you redirect to might look like this:

```
https://micro.blog/indieauth/auth?me=https://myusername.micro.blog&redirect_uri=https://myapp.com/callback&client_id=https://myapp.com&state=12345&scope=create&response_type=code
```

(Make sure to URL-encode each parameter. In the example above the URLs are not encoded to make them easier to read.)

The user will then confirm on Micro.blog whether it's okay to allow your application to access the user's account on Micro.blog. If they approve it, you will get a request back to your application's redirect URL with a temporary auth code in the `code` parameter.

Finally, make a `POST` request to Micro.blog to verify the temporary auth code and get a permanent access token to be used in requests to the Micro.blog API. Use the 2nd URL retrieved in the `link` tags on the user's home page above, with 2 parameters:

* client_id: the URL for your app's home page, to identify your app
* code: the temporary auth code passed to your app's redirect URL

The full POST request might look like this:

```
POST /indieauth/token
Host: micro.blog

client_id=https://myapp.com&code=ABCDEF
```

Check the JSON response for the `access_token` field. You can use this access token in the "Authorization" header as documented in [the JSON API](/2017/api-json/).
