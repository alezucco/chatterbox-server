var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept, X-Parse-Application-Id, X-Parse-REST-API-Key",
  "access-control-max-age": 10 // Seconds.
};
/* You should implement your request handler function in this file.
 * And hey! This is already getting passed to http.createServer()
 * in basic-server.js. But it won't work as is.
 * You'll have to figure out a way to export this function from
 * this file and include it in basic-server.js so that it actually works.
 * *Hint* Check out the node module documentation at http://nodejs.org/api/modules.html. */
// var exports = module.exports = {};
  var headers = defaultCorsHeaders;
var data={results:[]}
exports.handler = function(request, response) {
  var message = {
     "username": "greg",
    "text": "trololo",
     "roomname": "4chan",
     'results':[]
   };
  /* the 'request' argument comes from nodes http module. It includes info about the
  request - such as what URL the browser is requesting. */

  /* Documentation for both request and response can be found at
   * http://nodemanual.org/0.8.14/nodejs_ref_guide/http.html */

  console.log("Serving request type " + request.method + " for url " + request.url);


  var statusCode = 200;

   if (request.method === "OPTIONS") {
    response.writeHead(statusCode, headers);
     return response.end('');
   }
 if (request.method === "GET") {
    response.writeHead(statusCode, headers);
  return response.end(JSON.stringify(message));

   }
if (request.url === "classes/messages"){
   if (request.method === "POST") {
     var body = '';
        request.on('data', function (data) {
            body += data;
            response.writeHead(201, headers);
        });
        request.on('end', function () {
            // var post = qs.parse(body);

            data.results.push(body);
        });
        return response.end(JSON.parse(data));
  }
}


  /* Without this line, this server wouldn't work. See the note
   * below about CORS. */

  headers['Content-Type'] = "application/json";

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
