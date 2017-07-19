const fs = require("fs");
const https = require("https");
const options = {
    method: "GET",
    path: "/wiki/Steve_Jobs",
    hostname: "en.wikipedia.org",
    port: 443
};

const req = https.request(options, res => {
    res.on("data", data => {
        console.log("chunk", data.length);
    });
});

req.on("error", console.log);

// Never forget to invoke end
req.write(JSON.stringify({a: 1}));
req.end();
