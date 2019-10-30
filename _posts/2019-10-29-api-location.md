---
title: "Location API data"
date: 2019-10-29
description: Sending coordinates via Micropub.
order: 12
categories: developers
---

When using the JSON version of the Micropub API, Micro.blog can store location data with a blog post, including venue name, URL, latitude, and longitude.

```
POST /micropub
Authorization: Bearer 123456789
Content-Type: application/json

{
    "type": [
        "h-entry"
    ],
    "properties": {
        "published": [
            "2019-10-27T14:51:32-05:00"
        ],
        "content": [
            "Texas Book Festival."
        ],
        "checkin": [
            {
                "type": [
                    "h-card"
                ],
                "properties": {
                    "name": [
                        "Texas Capitol Grounds"
                    ],
                    "url": [
                        "https://foursquare.com/v/4d8a30f199c2a1cd53508bd7"
                    ]
                }
            }
        ],
        "location": [
            {
                "type": [
                    "h-adr"
                ],
                "properties": {
                    "latitude": [
                        30.273892650534542
                    ],
                    "longitude": [
                        -97.74060666521329
                    ]
                }
            }
        ]
    }
}
```

This is a subset of the full Micropub requests that apps like [OwnYourSwarm](https://ownyourswarm.p3k.io/) send.

The default Micro.blog themes do not currently do anything with this information. You can create a custom theme to access the coordinates as custom parameters, like this:

```
{% raw %}{{ if .Params.location_latitude }}
  <img src="https://example-mapping-service.com/?center={{ .Params.location_latitude }},{{ .Params.location_longitude}}" />
{{ end }}{% endraw %}
```

The 4 available parameters are `location_name`, `location_url`, `location_latitude`, and `location_longitude`. The venue name is automatically prepended to post content so that no theme changes are necessary.
