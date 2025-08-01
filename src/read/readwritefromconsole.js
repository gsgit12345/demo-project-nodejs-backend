
console.log("reading and writing from console");

process.stdout.write("enter the content for reading console:");

process.stdin.on("data",(data)=>{

    dtata=data.toString().trim();
    console.log(dtata);
    process.exit();
})