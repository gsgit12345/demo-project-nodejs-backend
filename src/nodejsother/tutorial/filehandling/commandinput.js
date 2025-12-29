const http = require("http");
const arg = process.argv;
const port = arg[2] || 3000;

const server = http.createServer((req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: `Server running on port ${port}` }));
    } catch (err) {
        console.error("Error:", err.stack);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Something went wrong in server" }));
    }
});

server.listen(port, () => {
    console.log(`✅ Server started on port ${port}`);
});

server.on("error", (err) => {
    console.error("❌ Server Error:", err.message);
});