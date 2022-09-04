
$(function() {
    $('.rollbar-totop').on('click', function(e) {
        $("html,body").animate({ scrollTop: 0 }, "fast");
    });

});

//滚动条位置控制导航栏
$(window).scroll(function() { //滚动事件获取//判断滚动条高度
    var $scroll = $(document).scrollTop();

    if ($scroll > 1) { //判断滚动条高度
        //  $(".header").css("position","fixed");
        $(".rollbar-totop").css("display", "list-item");
    } else {
        // $(".header").css("position","relative");
        $(".rollbar-totop").css("display", "none");
    }

}); 
