// https://restserver-curso-node-john32.herokuapp.com/
const Server = require('./models/server');

require('dotenv').config();

const server = new Server();

server.listen();
 
