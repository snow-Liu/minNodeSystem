var logoOff = $('#chromelogo').offset();
$('.breathe-btn').css({"left":logoOff.left,"top":logoOff.top});
$('#showLogo').css({"left":logoOff.left,"top":logoOff.top});
$('#showLogo').hide();


//当点击呼吸灯之后
$(".breathe-btn").on('click',function(){
    $('#showLogo').fadeIn(2000);
    $('#showLogo').addClass('logo-rotate');
    setTimeout(function(){
        $('.beforeShow').fadeOut();
    },4000);
})