const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
    console.log(`Request: ${req.method} for ${req.url}`);

    next();
});

app.use(express.static("."));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    console.log("Body", req.body);

    res.send("Hello from POST");
});

app.get("/api", (req, res) => {
    res.json({message: "Hello World"});
});

app.listen(3000);
