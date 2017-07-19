const http = require("http");

function handler(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(`
            <html>
                <head>
                    <title>Example HTML</title>
                </head>
                <body>
                    <p>${req.url}</p>
                    <p>${req.method}</p>

                    <form action="/" method="post">
                        <input name="name"></input>
                        <input name="email"></input>
                        <button></button>
                    </form>
                </body>
            </html>
        `);
    } else if (req.url === '/v1/api') {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "Hello world"}));
    } else if (req.method === 'POST') {
        req.on("data", data => {
            console.log(data.toString());
        });
    }
}

const server = http.createServer(handler);

server.listen(3000);