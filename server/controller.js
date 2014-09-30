var users=[
  {
    id:1,
    username:'Bill',
    message: 'hello'

  }
];
module.exports.get=function(req, res){
  var message = {
     "username": "greg",
    "text": "trololo",
     "roomname": "4chan"
   };
  res.end(JSON.stringify(users));
}
//////////////////////////////////

/* You should implement your request handler function in this file.
 * And hey! This is already getting passed to http.createServer()
 * in basic-server.js. But it won't work as is.
 * You'll have to figure out a way to export this function from
 * this file and include it in basic-server.js so that it actually works.
 * *Hint* Check out the node module documentation at http://nodejs.org/api/modules.html. */
// var exports = module.exports = {};
var url=require('url');
var controller= require('./controller.js');
var router= {
  users: {
    GET: controller.get
    //POST:controller.post
  }
  //,
  //   rooms: {
  //   GET: controller.get
  //   POST:controller.post
  // }
}
exports.handler = function(request, response) {
  /* the 'request' argument comes from nodes http module. It includes info about the
  request - such as what URL the browser is requesting. */

  /* Documentation for both request and response can be found at
   * http://nodemanual.org/0.8.14/nodejs_ref_guide/http.html */

  console.log("Serving request type " + request.method + " for url " + request.url);


  var statusCode = 200;
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "application/json";

  response.writeHead(statusCode, headers);
  if (request.method === "OPTIONS") {
    response.writeHead(statusCode, headers);
    return response.end('');
  }
  if (request.method === "POST") {
    response.writeHead(statusCode, headers);
   return response.end('');
  }

  if (request.method === "GET") {
    response.writeHead(statusCode, headers);
   return response.end('');
  }
  // var path=url.parse(request.url).path.split('/')[1]
  // return router[path][request.method](request,response)
  /* Without this line, this server wouldn't work. See the note
   * below about CORS. */

  /* .writeHead() tells our server what HTTP status code to send back */



  console.log(headers)
  /* Make sure to always call response.end() - Node will not send
   * anything back to the client until you do. The string you pass to
   * response.end() will be the body of the response - i.e. what shows
   * up in the browser.*/

};

/* These headers will allow Cross-Origin Resource Sharing (CORS).
 * This CRUCIAL code allows this server to talk to websites that
 * are on different domains. (Your chat client is running from a url
 * like file://your/chat/client/index.html, which is considered a
 * different domain.) */
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

///////////////

var users=[
  {
    id:1,
    username:'Bill',
    message: 'hello'

  }
];
module.exports.get=function(req, res){
  var message = {
     "username": "greg",
    "text": "trololo",
     "roomname": "4chan"
   };
  res.end(JSON.stringify(users));
}
