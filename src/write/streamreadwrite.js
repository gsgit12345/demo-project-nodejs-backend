const file = require("fs");
const path=require("path");
var filepath=path.join(__dirname+"/input.txt");
console.log(filepath);
var reader=file.createReadStream(filepath,"utf-8");

var writer=file.createWriteStream("output.txt","utf-8");

reader.pipe(writer) //copy the all data into output.txt from given path