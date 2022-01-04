# Description

Modification of a modifcation of a modiftcation to Firefox's default browser chrome.

Based on the excellent [waterfall](https://github.com/crambaud/waterfall) Firefox theme.

The goal is for a simple one line Firefox theme with light modification to the browser css. I would like for it to work cross platform with one file, however, I have only tested Windows so far.

# Modifications

In comparison to [waterfall](https://github.com/crambaud/waterfall):

- `userChrome.css` is minified with [csso](https://github.com/css/csso)

- Removes several minor customizations for a more "vanilla" Firefox / slimmer CSS file (which should hopefully help with compatibility with future updates / builtin themes)

- Removes color customizations in favor of using the user's chosen Firefox theme. This does make possible light / dark mode changes _(TBD: Some work to at least clean up the presentation of the URL bar while preserving colors)_

  - Note: this project did have light / dark mode changing with custom colors in a previous commit, if so desired

# Scripts

```sh
# Builds `src/theme.css` to `dist/userChrome.css`
# Copies `dist/userChrome.css` to `[FF_PROFILE_PATH]/chrome/userChrome.css`
npm run build
```
