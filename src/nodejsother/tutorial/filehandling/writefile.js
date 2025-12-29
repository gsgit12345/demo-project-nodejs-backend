var file=require("fs")

function writeFile(data)
{
file.writeFile("hello.txt",data,(err)=>{
    if(err)
        throw err;

    console.log("file written successfull")

});


}

writeFile("hello i am going to the market");


function readData()
{

file.readFile("hello.txt","utf8",(err,data)=>{

    if(err) throw err;

    console.log(data)

})
}

readData();