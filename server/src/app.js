import http from 'http';

const PORT= process.env.PORT || 3000;

var server = http.createServer((request, response) => {
    response.end("Hello World: " + request.url);
});

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});