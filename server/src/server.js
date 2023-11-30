const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const {EventEmitter} = require('events');
EventEmitter.defaultMaxListeners = 20;

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
