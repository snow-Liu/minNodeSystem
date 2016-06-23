//这里是文件操作模块
var fs = require('fs');
var util = require('util'); //工具
var events = require('events');
var event = new events.EventEmitter();


module.exports = function () {
    //同步方法列出文件夹中的内容
    this.ls = function (dir) {
        if(fs.existsSync(dir+"/")){
            var aFiles = fs.readdirSync(dir + "/");
            return aFiles;
        }
        
    }
    //创建文件夹
    this.mkdir = function(dir){
        //如果文件夹已经存在，那么直接返回
        if(fs.existsSync(dir+"/")) return ;
        return fs.mkdirSync(dir+ "/");
    }
    //删除文件夹
    this.rmdir = function(dir){
        if(fs.existsSync(dir)){
            fs.rmdir(dir);
        }
    }
    //创建文件
    this.cfile = function(filepath){
        if(!fs.existsSync(filepath)){
            fs.openSync(filepath,'a+');
        }
    }
    //删除文件
    this.unlink = function(filepath){
        if(fs.existsSync(filepath)){
            fs.unlinkSync(filepath);
        }
    }
    //读取文件内容
    this.read = function(filepath){
        if(fs.existsSync(filepath)){
           return fs.readFileSync(filepath, 'utf8')
        }
    }
    //写入文件内容
    this.write = function(filepath,contents){
        if(fs.existsSync(filepath)){
           return fs.writeFileSync(filepath,contents);
        }
    }
}