const EventEmitter = require("events")
const fs = require("fs");
const path = require("path");

const event = new EventEmitter();



event.addListener("greet", (greet1) => {
    console.log("event added:" + greet1)
});


event.emit("greet", "hello")


////////////file uploader using the events

filepath = __dirname + "//upload.pdf";

class fileupload extends EventEmitter {
    upload(filpath) {
        fs.writeFile(filepath, "hello", "utf-8", (err) => {
            console.log("succesds ")
        });

        setTimeout(() => {
            this.emit("done", filpath);
        }, 100);
    }
}

const upload = new fileupload();

upload.on("done", (file) => {
    console.log(file)
})


upload.upload(filepath);

