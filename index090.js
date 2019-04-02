const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

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
   if (req.method === 'POST') {
         if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
            let body = '';
            req.on('data', function (chunk) {
               body += chunk;
            });
            req.on('end', function () {
               body = parse(body);
               console.log(body);
            })
         }
      }
}).listen(8080);

// Now if you look at your cli, you will receive form data when user
// clicked the submit button.
// Congratulations, you just made you own web server!