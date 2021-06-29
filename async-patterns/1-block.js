
const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Home Page')
  }
  if(req.url === '/about') {
    // BLOCKING CODE !!!
    for (let j = 0; j < 100; j++) {
    for (let i = 0; i < 100; i++) {
        console.log(`${i} ${j}`);
      }  
    }
    res.end('About Page')
  }
  res.end('404 Error Page')
})

server.listen(5008, () => {
  console.log('Server Listening on port 5008...');
})