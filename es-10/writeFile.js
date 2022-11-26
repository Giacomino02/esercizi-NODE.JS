const { writeFile } = require('node:fs');

writeFile("./es-10/file.txt", "Hello there! I'm a new file!",(err) => {
    if(err) {
        throw err;
    };
    console.log("File has been successfully saved!");
});