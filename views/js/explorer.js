//文件浏览系统
function opFile(optype,path='/',contens=""){
    $.ajax({
            type: "get",
            async: true,
            url: "http://localhost:8889/",
            data:{
                opkind : "opfile",
                optype : optype,
                path : path,
                contents:contens
            },
            dataType: "jsonp",
            jsonp: "callback",
            success: function (data) {
                console.log(data);
            }
        });
}

opFile('ls');