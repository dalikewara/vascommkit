# Global Dependencies
- npm install -g uglify-js
- npm install -g uglify-es
- npm install -g browserify

# Browserify
- browserify app.js --s vascommkit > dist/vascommkit.js
- browserify app.js --s vascommkit | uglifyjs -cm > dist/vascommkit.min.js

# Upgrade on NPM
- npm version '1.1.7'
- npm publish

# Push to GitHub (Automatically upgrade on: Bower)
- git commit -am "1.1.7"
- git tag -a v1.1.7 -m "Release version 1.1.7"
- git push origin master --tags