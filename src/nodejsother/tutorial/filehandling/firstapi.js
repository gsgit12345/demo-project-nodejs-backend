const http = require("http");

var data = [
    {
        name: "harsih",
        email: "demo.email"
    },
    {
        name: "mahesh",
        email: "demo.email"
    },
    {
        name: "ramesh",
        email: "demo.email"
    }


]
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    // Only respond for GET requests
    if (req.method === "GET") {
        res.statusCode = 200; // OK
        console.log(req.method);
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 405; // Method Not Allowed
        res.end(JSON.stringify({ error: "Method not allowed" }));
    }
});

// Listen on port 4000
server.listen(4000, () => {
    console.log("Server running on http://localhost:4000/");
});
