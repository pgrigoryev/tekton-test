var express = require('express');
var http = require('http')
var os = require('os')
var app = express();
const port = process.env.PORT || "3000";
const head='<html><body bgcolor="#222530" text="#22CC22"><style>body { font-family: Arial, Helvetica, sans-serif; font-size: x-large;}</style><h1>ХУЙ!拿</h1> '
const butt="</body></html>"
system_info= 'hostname: '+os.hostname()+" / os: "+os.type()

server = http.createServer(app).listen(3000);
var host = server.address().address;
// var port = server.address().port;


app.get('/', function (req, res) {
  currentDate = new Date();
  ua = req.get('user-agent')
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  content = `${currentDate} <br> ${ip} - ${ua}<br> `
  res.send(`${head} ${content} <h2>${system_info}</h2> ${butt}`);
  console.log(`${currentDate} - ${ip} - ${ua}`)
});
console.log(system_info);
console.log('Example app listening at http://%s:%s', host, port);