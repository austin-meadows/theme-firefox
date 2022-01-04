# Description

Modification of a modifcation of a modiftcation to Firefox's default browser chrome.

Based on the excellent [waterfall](https://github.com/crambaud/waterfall) Firefox theme.

The goal is for a simple one line Firefox theme with light modification to the browser css.

# Modifications

- Removes several minor customizations for a more "vanilla" Firefox / slimmer CSS file (which should hopefully help with compatibility with future updates)

- Removes color customizations in favor of using Firefox's default colors. This does make choosing themes possible, as well as allowing system light / dark mode changes

- `userChrome.css` is minified with [csso](https://github.com/css/csso)

# Scripts

```sh
# Builds `src/theme.css` to `dist/userChrome.css`
# Copies `dist/userChrome.css` to `[FF_PROFILE_PATH]/chrome/userChrome.css`
npm run build
```
