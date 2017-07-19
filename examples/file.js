const fs = require("fs");
const zlib = require("zlib");
const crypto = require("crypto");
const gzip = zlib.createGzip();
const read = fs.createReadStream("./dir.js", "UTF-8");
const write = fs.createWriteStream("./dir.js.gzip");

read
.pipe(gzip)
.pipe(write);
