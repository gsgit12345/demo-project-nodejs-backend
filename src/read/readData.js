const fs = require("fs")
const filepath = require("../write/writeFile.js")
const path = require("path");

console.log(__dirname);

console.log(filepath)


function readFile(filepath1) {
    let val = fs.readFileSync(filepath1, "utf-8");
    console.log(val)
}


//reading file asynchronous way 

function readFileAs(filepath) {
    fs.readFile(filepath, "utf-8", (err, data) => {

        if (err) throw err;
        console.log("data is ::"+data);
    })
}


readFile(filepath.path)

readFileAs(filepath.path)

