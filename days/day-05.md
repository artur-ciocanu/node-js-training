# Node Package Manager
- What is NPM
- Why we need NPM
- Quick tour of npmjs.com
- Local NPM and remote NPM
- npm install, npm ls, npm remove, etc
- package.json example
- NPM vs Yarn
- NPM 5 vs older NPM releases
- NPM modules installed globally, serving static files using `http-server`
- Running a process with auto restart, e.g. using forever module. `forever -w`, `nodemon`

# ExpressJS
- ExpressJS
- Why using a framework
- GET, POST and all their friends
- Example a very simple ExpressJS application using `app.get()` and `res.send()`
- Example serving static files `app.use(express.static(__dirname + "/public"))`
- Example adding custom middleware via `app.use((req, res, next) => {....})`
- NB: never forget to invoke `next()` otherwise the app won't work
- Routing, query string, path params, everything is on `req.params`
- Example of routing using `res.json()` useful for building JSON APIs
- CORS headers and friends
- Example `app.use(cors())`
- Reading POST data via `app.use(bodyParser())`, everything is found on `req.body`