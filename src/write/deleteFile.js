const file = require("fs");

const path = require("path");

filePath = path.join(__dirname, "output.txt");
function deleteExistingFile(filepath) {
    file.unlink(filepath, error => {

        if (error) throw error;
    });
}

deleteExistingFile(filePath);