const fs = require("fs");
const contents = fs.readFileSync("./child.js"); 

fs.readFile("./child.js", "UTF-8", (err, contents) => {
    
    if (err) {
        throw err
    }

    console.log(contents);

    fs.writeFile("./child2.js", contents, err => {
        console.log("File created");
    });
});
