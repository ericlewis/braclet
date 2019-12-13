# braclet
Repo for react-bangle apps

## How to add an app:
1. build an app using react-bangle, see bitcoin / launcher for examples.
2. run `npm run build`, this will output a bunch of files. 2 we care about. vendor & main.js. vendor is the weird hash one. main is main.
3. fork this repo and create a new folder with the app name
4. paste the 2 files from earlier, renamed main & vendor.js
5. add your app name to apps.json
6. submit PR
