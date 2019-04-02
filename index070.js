const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
   console.log(req.url, req.method);
   if (req.url === '/'){
      fs.readFile(__dirname + '/public/index.html', function (err, data) {
         if (err) throw err;
         res.write(data);
         res.end();
      });
   } else if (req.url === '/products') {
      fs.readFile(__dirname + '/public/products.html', function (err, data) {
         if (err) throw err;
         res.write(data);
         res.end();
      });
   } else if (req.url === '/about') {
      fs.readFile(__dirname + '/public/about.html', function (err, data) {
         if (err) throw err;
         res.write(data);
         res.end();
      });
   } else {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(res.statusMessage);
      res.end();
   }
}).listen(8080);

// Now if you change the url like .../abcde, you will find a Not Found message.
// And in Network tab in developer console will have 404 status.
// Another popular request method is POST method.
// If we go to about page, we could see there is a form
// which user can submit. If we click the submit button, we could see
// the req.method is POST. Before we can 'read' the form data from user
// we need to parse it using parse method from querystring module.
// const { parse } = require('querystring');
// include it on top of your code (you could write it after fs module).