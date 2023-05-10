'use strict';
var http=require('http');
// 创建http server，并传入回调函数:
var server=http.createServer(function(request,reponse){
    // 获得HTTP请求的method和url:
    console.log(`method:${request.method}  url:${request.url}`);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    reponse.writeHead(200,{'content-Type':'text/html'});
    // 将HTTP响应的HTML内容写入response:
    reponse.end('<h1>hello Node JS</h1>');
});

// 让服务器监听8080端口:

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');


//解析URL需要用到Node.js提供的url模块

var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));


//处理本地文件目录需要使用Node.js提供的path模块

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.');

console.log('workDir:'+workDir);

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
console.log('filePath:'+filePath);