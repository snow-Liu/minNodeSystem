//var iBox = document.getElementById("icosbar");
//var aIcos = iBox.getElementsByTagName("img");
//document.onmousemove = function (event) {
//    for (var i = 0; i < aIcos.length; i++) {
//        //获取鼠标的坐标
//        var mouseX = event.clientX;
//        var mouseY = event.clientY;
//
//        var disX = aIcos[i].offsetLeft + aIcos[i].offsetWidth / 2 - mouseX;
//        var disY = aIcos[i].offsetTop + iBox.offsetTop + aIcos[i].offsetHeight / 2 - mouseY;
//        var disToMouse = Math.sqrt(disX * disX + disY * disY);
//        disToMouse = disToMouse > 100 ? 100 : disToMouse;
//        var factor = 2 - disToMouse / 100;
//        aIcos[i].style.width = 45 * factor + "px";
//        aIcos[i].style.height = 45 * factor + "px";
//    }
//}
