//这里是文件操作模块
var fs = require('fs');
var util = require('util');  //工具
var events = require('events');
var event = new events.EventEmitter();

function opFile(eventname){
    event.emit(eventname);
    
    
    event.on('ls',function(){
        //列出文件夹中的内容
        fs.readdir(__dirname + "/",function(err,files){
            if(err){
                return console.log(err);
            }
            files.forEach(function(file){
                console.log(file);
            })
        })
    })
};

exports.opFile = opFile;