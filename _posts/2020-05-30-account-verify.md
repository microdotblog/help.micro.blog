---
title: "Verifying tokens"
date: 2020-05-30
description:
order: 7
categories: developers
---

Most API calls require an auth token to identity the signed-in user. There are [a few forms of authentication](/2018/api-authentication/) to get a token. For the email sign-in authentication, primarily used for native mobile apps, you will be passed a temporary sign-in token that must be verified before it can be used in other API calls.

Send the temporary sign-in token in a form-encoded POST:

```
POST /account/verify

token=ABCDEFG
```

The response will include a new token that you should store in your app:

```json
{
      "token": "HIJKLMNOP",
      "name": "Manton Reece",
      "username": "manton",
      "avatar": "https://micro.blog/manton/avatar.jpg",
      "default_site": "manton.micro.blog"
}
```

If there was an error:

```json
{
	"error": "App token was not valid."
}
```

The `/account/verify` API call can also be used to verify an existing, permanent token you have in your app.
