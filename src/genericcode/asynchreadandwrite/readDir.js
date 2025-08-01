const fs = require("fs/promises");

const path = require("path");

file = __dirname;

async function readDirFile(filepath) {
    await fs.readdir(filepath).then(data => {
        const ff=""+data
        console.log(ff)
    }).catch((err) => {
        console.error("eeror occured:" + err);
    })
}

readDirFile(file);