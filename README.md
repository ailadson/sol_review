# Solstice Tech Review

1. Run `npm install`
2. Run `./node_modules/.bin/webpack`
3. Open `index.html` in the browser
  * When running the page locally, some browsers (Chrome, for instance) [block XMLHttpRequest to a different domain than your page](https://stackoverflow.com/questions/20035101/no-access-control-allow-origin-header-is-present-on-the-requested-resource). To fix this, you must enable CORS (cross-origin request) in that browser. Chrome has [an extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US) that fixes this. Note, this is only an issue when accessing the webpage locally, not if it were uploaded to a server.

* I used React to build the UI. All the frontend code lives in the `scripts/` folder.
* I use babel to transpile my ES6 syntax and JSX code
* One thing that I want to point out is that I'm also bundling scss with the ES6/JSX bundle.js file. Said differently, I'll be able to import scss directly into javascript files. This makes the CSS a lot more maintainable, in my opinion. I house all of my scss in the `style/` folder.
