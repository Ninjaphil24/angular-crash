let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/angular-crash'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/angular-crash/index.html');
});

app.listen(process.env.PORT || 8080);

const data = require("./db.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port);