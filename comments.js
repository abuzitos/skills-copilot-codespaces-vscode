// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./comments.html');
    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});