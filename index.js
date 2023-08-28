var express = require('express');
const http = require('http');
const PORT = 3000;
const fs = require('fs');
var mysql = require('mysql');

// var connection = mysql.createPool({
//     host: 'localhost',
//     database: 'venkat',
//     user: 'root',
//     password: 'root@123',
// });

// var app = express();

// app.listen(3000, function () {
//     console.log('listening on port 3000');
//     connection.getConnection (function (err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Connection established');
//     }})
// });



const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('index.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write("Page not found");
        }
        else{
            res.write(data);
        }
    })
    // res.write("Welcome to the channel");

    res.end();

    // res.writeHead("Welcome to the channel");
})

server.listen (PORT, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Port: ' + PORT);
    }
});