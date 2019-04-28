---
title: "Parameters in themes"
date: 2019-04-29
description: Custom params in Hugo.
order: 7
categories: hosted
---

Custom themes sometimes need to set extra parameters to be used in templates. You can set custom parameters as well as override some of Hugo's default configuration by creating a `config.json` file in your theme.

Here's an example of what a config file might look like:

```json
{
  "rssLimit": 20,
  "params": {
    "color": "green"
  }
}
```

These values are applied over Micro.blog's [default config file](https://github.com/microdotblog/theme-blank/blob/master/config.json). To use a parameter in a template, reference it like `{{ .Site.Params.color }}`.

The following configuration fields can be set:

* `params`
* `pygmentsCodeFences`
* `pygmentsStyle`
* `blackfriday`
* `defaultContentLanguage`
* `disableKinds`
* `enableEmoji`
* `googleAnalytics`
* `hasCJKLanguage`
* `languageCode`
* `languageName`
* `paginate`
* `paginatePath`
* `related`
* `rssLimit`
* `summaryLength`
