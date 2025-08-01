const httpserver = require("http")

const path = require("path")
const file = require("fs");

filepath = path.join(__dirname, "server.txt");

function readDataAndDisplay() {
    try {
        const data = file.readFileSync(filepath, "utf-8");
        return data
    } catch (err) {
        throw new Error("something wemnt wrong" + err.message);
    }
}

const PORT = 3001;
const server = httpserver.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain"); // Better to include
    const data = readDataAndDisplay();

    if (req.url == "/") {
        res.write(data);
        res.end();
    }
    //res

});

server.listen(PORT, (data) => { console.log("listeningv") })