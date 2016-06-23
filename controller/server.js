var http = require('http');
var url = require('url');
var opFile = require('./opfile');
var opfile = new opFile();
var events = require('events');
var event = new events.EventEmitter();

function start(route) {
    function onRequest(request, response) {

        //获取请求参数,在parse中加入true可以让请求参数变为object对象类型
        var args = url.parse(request.url, true).query;

        //调用路由，返回数据
        var jsonResult =  route(args);

        //响应内容
        response.writeHead(200, {
            "Content-Type": "application/json;charset=UTF-8"
        });
//        根据callback的内容生产对应的jsonp数据
        response.end(jsonResult.callback +"("+JSON.stringify(jsonResult) + ")");
    }

    http.createServer(onRequest).listen(8889);
    console.log('服务启动成功！');
}
exports.start = start;