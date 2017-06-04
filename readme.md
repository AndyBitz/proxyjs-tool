# proxyjs-tool

proxyjs is a simple cli tool that proxies traffic from ```localhost:port ``` to ```targetdomain:port```

## usage

```npm i -g proxyjs-tool ```

```proxyjs -p <port> -t <target> ```

## options

* -h, --help            Output usage information
* -p, --port <n>        The port on which the server will be running (defaults to 4000)
* -t, --target [value]  The end location (defaults to "http://localhost:3000")
* -v, --version         Output the version number

## dependencies

* [http-proxy](https://github.com/nodejitsu/node-http-proxy)
* [args](https://github.com/leo/args)