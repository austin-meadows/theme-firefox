# Description

Modification of a modifcation of a modiftcation to Firefox's default browser chrome.

Based on the excellent [waterfall](https://github.com/crambaud/waterfall) Firefox theme.

# Modifications

- Allows theme colors to change on system light / dark mode changes.

- Makes the dropdown auto suggestions more apparent

- Gives 5px border radius to some UI elements

- `userChrome.css` is minified with [csso](https://github.com/css/csso)

# Scripts

```sh
# Builds `src/theme.css` to `dist/userChrome.css`
# Copies `dist/userChrome.css` to `[FF_PROFILE_PATH]/chrome/userChrome.css`
npm run build
```
