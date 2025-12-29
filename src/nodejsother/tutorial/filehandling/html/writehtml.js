const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const { queryObjects } = require("v8");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("simple.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading the file");
        console.error("File read error:", err);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } 
  else if (url === "/submit" && req.method === "POST") {
    let dataBody = [];
    req.on("data", (chunk) => {
      dataBody.push(chunk);
    });
    req.on("end", () => {
      const rawData = Buffer.concat(dataBody).toString();
      console.log("Form Data:", rawData);
      const parsedData = querystring.parse(rawData);
      console.log("Parsed Form Data:", parsedData);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data received successfully");
    });
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(6100, () => {
  console.log("✅ Server is running on http://localhost:6100");
});
