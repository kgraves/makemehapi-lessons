var Hapi = require('hapi');
var Inert = require('inert');
var path = require('path');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Inert, function(err) {
  if (err) throw err;
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: path.join(__dirname, 'handling_index.html')
  }
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
