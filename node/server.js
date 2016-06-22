var http = require('http');
var url = require('url');
var querystring = require('querystring');
var events = require('events');
var event = new events.EventEmitter();

function start(opFile){
    function onRequest(request, response) {
    
    //获取请求参数,在parse中加入true可以让请求参数变为object对象类型
    var args = url.parse(request.url,true).query;
    
    //调用操作文件的方法，进行对文件的操作
    opFile("ls");
		
    //响应内容的头部，200是成功，text/plain是纯文本,text/html是网页内容
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>This is what I want to show you!</h1>");
    response.end("<h3>end of file </h3>");
  }

    http.createServer(onRequest).listen(8888);
    console.log('服务启动成功！');
}
exports.start = start;