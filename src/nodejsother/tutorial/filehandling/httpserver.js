var httpserver=require("http");

const server = httpserver.createServer((req, res) => {
    // Send response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello, World!\n');
    const url=req.url;

    if(url=="/")
    {
        res.write("default page");
        res.end();
    }else if(req=="/About")
    {
        res.write("about page call");
                res.end();

    }else if(url=="/home")
    {
        res.write("home page called");
                res.end();

    }else{
        res.end("404  no end pont found");
        
    }
});

server.listen(3000,()=>{

    console.log("server is listening ");
})