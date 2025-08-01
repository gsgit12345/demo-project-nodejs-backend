const { writeFile } = require("fs");
const file=require("fs/promises");

const path=require("path")

filepath=path.join(__dirname,"newfile.txt");

async  function deleteFileInAsynch(filepath)
{
    try{
    await file.unlink(filepath);
    }catch(err)
    {
        console.log(err)
    }
}

deleteFileInAsynch(filepath)

/*
1-writeFile()
2-file.appendFile()
3-file.unlink()
4-file.readFile()
5-file.unlink()
*/