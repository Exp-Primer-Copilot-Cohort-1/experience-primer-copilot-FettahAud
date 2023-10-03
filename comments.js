// create web server
// 1. load all the required modules
const http = require('http');
const fs = require('fs');

// 2. create a server object
const server = http.createServer(function(req, res) {
    // 4. read the file contents
    fs.readFile('comments.json', 'utf-8', function(err, data) { 
        
        // 5. parse the contents to JSON
        const comments = JSON.parse(data);
        // 6. set the response header
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        // 7. send the response
        res.end(JSON.stringify(comments));
    });
});

// 3. listen for any incoming requests
server.listen(8080, '