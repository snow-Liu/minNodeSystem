//todo在css中设置文件管理器的隐藏
$('.explorer-wrap').hide();

//文件浏览系统
function opFile(optype,path,contens){
    path = path?path:"/";
    contens = contens?contens:"";
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
            success: function (date) {
                console.log(date);
            }
        });
}

loadPage('/');

function loadPage(path){
    path = path?path:"/";
    $.ajax({
            type: "get",
            async: true,
            url: "http://localhost:8889/",
            data:{
                opkind : "opfile",
                optype : 'ls',
                path : path,
                contents:''
            },
            dataType: "jsonp",
            jsonp: "callback",
            success: function (data) {
                $('#files').html("");
                for(var i=1;i<data.data.length;i++){
                   $('#files').append("<li>"+data.data[i]+"</li>");
                }
            }
        });
}

var currPath = $("#hidepath").text();
var nextPath = null;
//为所有的文件添加进入文件夹事件
$('#files').on('click','li',function(){
    currPath = $("#hidepath").text();
    nextPath = $(this).text();
    loadPage(currPath + "/" + nextPath);
    uploadTit();
})
//返回上一层文件夹事件
$('#goBack').on('click',function(){
    currPath = String($("#hidepath").text());
    var aPath = currPath.split('/');
    aPath.pop();
    nextPath = aPath.join("/");
    loadPage(nextPath);
    $("#hidepath").text("");
    $("#hidepath").text(nextPath);
    $('#currFolder').text('');
    $('#currFolder').text(String(aPath.pop()));
})

//更新导航标题内容
function uploadTit(){
    $("#hidepath").text("");
    $("#hidepath").text(currPath + "/" + nextPath);
    $('#currFolder').text('');
    $('#currFolder').text(nextPath);
}

//当点击关闭按钮的时候
$("#closeExp").on("click",function(){
    $('.explorer-wrap').hide();
})
//当点击我的电脑的时候
$('#expIco').on('click',function(){
    $('.explorer-wrap').show();
})
