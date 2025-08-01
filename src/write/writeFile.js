const file = require("fs");
const filepath = require("path")
path = filepath.join(__dirname, "input.txt")

function readDataFromFile(filepath) {
    file.writeFileSync(filepath, "hello i am the file to which we have to read", "utf8")
}

console.log(path);
readDataFromFile(path);


//asynvchronous writing 

function asynWriting(filepath) {
    file.writeFile(filepath, "this is the asynch writing", (err) => {

        console.log(err)
        if (err) throw err
        console.log("file is written");
    });
}
asynWriting(path);
module.exports.path = path;