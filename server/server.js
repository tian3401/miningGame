
//Setting up the game api 

//creating an http server 
const http = require('http'); 
const url = require('url');

const server = http.createServer((req,res) => {

  //Obtain the URL and parse it 
  let parsedUrl = url.parse(req.url, true); 

  //Obtain the path
  let path = parsedUrl.pathname,
  concatPath = path.replace(/^\/+|\/+$/g,'');

  //Obtain the method 
  let method = req.method.toUpperCase(); 

  //Send response 
  res.end('The http server says hi\n');

  //Print out the path 
  console.log(`The client sent a request to: ${concatPath} using a ${method} method`);

});

server.listen(3000, (req,res) => {
  console.log('The server is listening on port 3000')
});


