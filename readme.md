# proxyjs-tool

proxyjs is a simple cli tool that proxies traffic from `localhost:port` to `targetdomain:port`.

## usage

```npm i -g proxyjs-tool ```

```proxyjs -p <port> -t <target> ```

## use case

The tool works great when running servers on bash for windows which need to be accessible on the rest of the network. E.g. run a webserver on bash with port 3000, then run `proxyjs`, this will create a server on windows that runs on port 4000, now every request to your pc on port 4000 is proxied to your server running on bash.

## options

* -h, --help            Output usage information
* -p, --port <n>        The port on which the server will be running (defaults to 4000)
* -t, --target [value]  The end location (defaults to "http://localhost:3000")
* -v, --version         Output the version number

## dependencies

* [http-proxy](https://github.com/nodejitsu/node-http-proxy)
* [args](https://github.com/leo/args)