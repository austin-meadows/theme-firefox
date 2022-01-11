# Description

A userChrome.css theme for Firefox that makes the browser controls use one horizontal line.

The goal is for a light one line Firefox theme with little modification to the browser css. I would like for it to work cross platform, however, I have only tested Windows so far.

Some code and inspiration from:

- lr-tech, Oneline Proton: https://github.com/lr-tech/OnelineProton
- crambaud, waterfall: https://github.com/crambaud/waterfall

# Installation

1. In `about:config`, set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.

2. Copy either `build/userChrome.css` or `src/theme.css` to the `chrome` folder in your Firefox Profile location. You can create this folder if it does not exist.

Optionally, you may also modify `browser.tabs.tabMinWidth` to adjust unfocused tab widths in `about:config`.

Alternatively, you may also clone this repo and use the `npm` script to copy the files for you.

# Scripts

```sh
# Builds `src/theme.css` to `build/userChrome.css`
# Copies `src/user.js` to `[FF_PROFILE_PATH]/user.js`
# Copies `build/userChrome.css` to `[FF_PROFILE_PATH]/chrome/userChrome.css`
npm run build
```
