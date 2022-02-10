var http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('Welcome to our About page')
  }
  res.end(`Oops! Sorry we dont have the page you are accessing..!! Byeeeee`)
})
server.listen(5001)
