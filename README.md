# auto-set-node-version
automatically set node version (based on package.json), when 'npm start' command is run


## How to use / consume this npm-package
1. $ npm install @auto-set-node-version --save-dev.
2. Update your project's package.json file:
``` json
"scripts": {
    "prestart": "npm run set-me",
    "start": "node -e \"console.log('%s: Define your task (npm start).', Date())\" && exit 1",
    "set-me": "node ./node_modules/auto-set-node-version/index.js"
}
```
3. Done!