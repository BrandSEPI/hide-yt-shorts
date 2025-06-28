# Hide YouTube Shorts

A simple Firefox extension to hide YouTube Shorts from the homepage, recommendations, and search results.

## Features

- Hides YouTube Shorts sections on the homepage
- Removes Shorts from video recommendations and sidebars
- Hides Shorts from search results

## Installation (Temporary, for Development)

1. Download or clone this repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click on **"Load Temporary Add-on..."**
4. Select the `manifest.json` file from the project folder.

The extension will now be active for your current session.  
To disable it, simply remove it from `about:debugging`.

## How it works

This extension injects a content script into YouTube pages.  
It automatically hides all Shorts elements using DOM manipulation, so you can browse YouTube without seeing Shorts content.

## Limitations

- The extension only works on desktop versions of YouTube.
- If YouTube changes its layout or class names, the extension may need to be updated.

## License

MIT

---

**Enjoy YouTube without Shorts!**
