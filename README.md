# auto-set-node-version
automatically set node version (based on ```package.json```), when ```npm start``` command is run.


## How to use / consume this npm-package
1. ```$ npm install auto-set-node-version@1.0.1 --save-dev```
2. Update your project's ```package.json``` file:
``` json
"scripts": {
    "prestart": "npm run set-node",
    "start": "node -e \"console.log('%s: Define your task (npm start).', Date())\" && exit 1",
    "set-node": "node ./node_modules/auto-set-node-version/index.js"
}
"devDependencies": {
    "auto-set-node-version": "^1.0.1"
},
"engines": {
    "node": ">=12.14.1"
},
```
3. Done!


## Compatibility:
1. ```Windows```: tested & works well.
2. ```*nix```: NOT supported. Reason: executing nvm as a command in child process doesn't work as it's not a terminal-command but nvm run as shell-function.
