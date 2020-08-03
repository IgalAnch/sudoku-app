const http = require("http");
const routes = require("./routes");
const { promises } = require("fs");

const server = http.createServer(routes.handler);

server.listen(3000);
