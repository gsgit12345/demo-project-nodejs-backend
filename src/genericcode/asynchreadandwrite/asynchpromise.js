const file = require("fs/promises")

const path = require("path");


async function fileReadData(filepath) {
    try {
        const data = await file.readFile(filepath, "utf-8")

        return data;


    } catch (err) {
        throw err;
    }
}

filepath = path.join(__dirname, "asynchwrite.txt");

fileReadData(filepath).then(data=>{

    console.log(data)
})

