const file = require("fs/promises");

const path = require("path");


async function writeFileInAsynchMode(filepath, data) {
    await file.writeFile(filepath + "/asynchwrite.txt", data, "utf-8", (err) => {
        if (err) throw err;
        console.log("no error ");
    })
}

var filepath = path.join(__dirname);


writeFileInAsynchMode(filepath, "i am going to the market");

//writing in append mode 


async function writeInAppendMode(filepath, data) {

    try {
        await file.writeFile(filepath, data, { encoding: "utf-8", flag: 'a' } )
    } catch (err) {

        console.log("file not appended");
    }

}

var filepath = path.join(__dirname ,"asynchwrite.txt");


writeInAppendMode(filepath, "\ni am appending the file");