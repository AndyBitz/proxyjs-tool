// native
const http = require('http');
#!/usr/bin/env node

// packages
const args = require('args')
const httpProxy = require('http-proxy')


// config
args
  .option('port', 'The port on which the server will be running', 4000)
  .option('target', 'The end location', 'http://localhost:3000')

const flags = args.parse(process.argv)

const options = {
  ws: true,
  secure: false,
  target: flags.target
}


// create server
const proxy = httpProxy.createProxyServer(options)

proxy.listen({ port: flags.port }, () => {
  console.log(`local server runs on ${flags.port}`)
  console.log(`and proxies the traffic to ${flags.target}`)  
})