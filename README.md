# [PaperPrison RJATool](https://codesandbox.io/p/sandbox/github/blessdyb/paperprison-rjatool/tree/main)

## How to run it in your local

`npm i && npm run dev`

## How to host the site

`npm run build`

It will generate everything under ./docs folder. Please follow https://docs.github.com/en/pages

## Exporting site to paperprisons.org

1. Uncomment `basePath` & `assetPrefix` in `next.config.js`
2. Build and export the site
   `next build && next export`
3. Copy the contents of the `out` folder to the `paperprisons.org` repo's `/RJA` folder
4. Copy the images from `public/images` to the `paperprisons.org` repo's `/images` folder (not the `/RJA/images` folder)
