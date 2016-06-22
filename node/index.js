var server = require('./server');
var opfile = require('./opfile');

server.start(opfile.opFile);