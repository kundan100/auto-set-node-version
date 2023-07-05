var sysUtil = require('util');
var exec = require('child_process').exec;
const { spawn } = require('child_process');
var os = require('os');
var child;

/*
* set the node version as mentioned in package.json
*/
function setNodeVersion() {
    //console.log("kk-2_1... process=", process);

    /*
     * print the OS details
    */
    getOsType();
    
    /**
     * print current version of nodejs.
    */
    console.log("Node version (current):", process.env.npm_config_user_agent);
    const nodeVerCurrent = getNumberOnly(process.version);
    //console.log("nodeVerCurrent=", nodeVerCurrent);

    /**
     * print required version of nodejs.
    */
    console.log("Node version (required):", process.env.npm_package_engines_node);
    const nodeVerRequired = getNumberOnly(process.env.npm_package_engines_node);
    //console.log("nodeVerRequired=", nodeVerRequired);

    /**
     * change the nodejs version if current!=required.
    */
    if (nodeVerCurrent === nodeVerRequired) {
        console.log("You already have the right node verion!");
    } else {
        child = spawn('nvm', ['use', nodeVerRequired]);
        //
        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        child.on('error', (error) => {
            console.error(`error: ${error.message}`);
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
}

/*
 * TBD
*/
function puts(error, stdout, stderr) {
    sysUtil.puts(stdout)
}

/*
 * Run command depending on the OS
 * TBD
*/
function getOsType() {
    if (os.type() === 'Linux') {
        console.log("Hi, Linux.");
        //exec("node build-linux.js", puts);
    } else if (os.type() === 'Darwin') {
        console.log("Hi, Darwin");
        //exec("node build-mac.js", puts);
    } else if (os.type() === 'Windows_NT') {
        console.log("Hi, Windows_NT.");
        //exec("node -v");
    } else {
        throw new Error("Unsupported OS found: " + os.type());
    }
}

/*
 * extract the number-only part (removing the additional characters).
*/
function getNumberOnly(nodeVerPm) {
    const nodeVer = nodeVerPm.replace(/[^\d.-]/g, '');
    return nodeVer;
}

module.exports = setNodeVersion