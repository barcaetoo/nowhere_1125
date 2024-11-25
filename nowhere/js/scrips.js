$(function () {

    // 임시

    $(".oppacity_box").hide();

    $(".nav_show1").hide();
    $(".nav_show2").hide();
    $(".nav_show3").hide();
    $(".nav_show4").hide();

    $(".navi_button li p").hide();

    $(".navi_button li:nth-child(1)").mouseenter(function(){
        $(".navi_button li:nth-child(1) p").stop().show();
        $(".nav_hide1").stop().hide();
        $(".nav_show1").stop().show(400);
    });

    $(".navi_button li:nth-child(1)").mouseleave(function(){
        $(".navi_button li:nth-child(1) p").stop().hide();
        $(".nav_show1").stop().hide();
        $(".nav_hide1").stop().show();
    });

    $(".navi_button li:nth-child(2)").mouseenter(function(){
        $(".navi_button li:nth-child(2) p").stop().show();
        $(".nav_hide2").stop().hide();
        $(".nav_show2").stop().show();
    });

    $(".navi_button li:nth-child(2)").mouseleave(function(){
        $(".navi_button li:nth-child(2) p").stop().hide();
        $(".nav_show2").stop().hide();
        $(".nav_hide2").stop().show();
    });

    $(".navi_button li:nth-child(3)").mouseenter(function(){
        $(".navi_button li:nth-child(3) p").stop().show();
        $(".nav_hide3").stop().hide();
        $(".nav_show3").stop().show();
    });

    $(".navi_button li:nth-child(3)").mouseleave(function(){
        $(".navi_button li:nth-child(3) p").stop().hide();
        $(".nav_show3").stop().hide();
        $(".nav_hide3").stop().show();
    });

    $(".navi_button li:nth-child(4)").mouseenter(function(){
        $(".navi_button li:nth-child(4) p").stop().show();
        $(".nav_hide4").stop().hide();
        $(".nav_show4").stop().show();
    });

    $(".navi_button li:nth-child(4)").mouseleave(function(){
        $(".navi_button li:nth-child(4) p").stop().hide();
        $(".nav_show4").stop().hide();
        $(".nav_hide4").stop().show();
    });

    $(".navi_button li:nth-child(1)").mouseleave(function(){
        $(".navi_button li:nth-child(1) p").stop().hide();
    });

    $(".navi_button li:nth-child(2)").mouseenter(function(){
        $(".navi_button li:nth-child(2) p").stop().show();
    });

    $(".navi_button li:nth-child(2)").mouseleave(function(){
        $(".navi_button li:nth-child(2) p").stop().hide();
    });

    $(".navi_button li:nth-child(3)").mouseenter(function(){
        $(".navi_button li:nth-child(3) p").stop().show();
    });

    $(".navi_button li:nth-child(3)").mouseleave(function(){
        $(".navi_button li:nth-child(3) p").stop().hide();
    });

    $(".navi_button li:nth-child(4)").mouseenter(function(){
        $(".navi_button li:nth-child(4) p").stop().show();
    });

    $(".navi_button li:nth-child(4)").mouseleave(function(){
        $(".navi_button li:nth-child(4) p").stop().hide();
    });

    $(".search_bar").hide();

    $(".search_close").hide();

    $(".hamberger_box",).hide();
    // $(".hamberger_close").hide();
    $(".hamberger_close").hide();

    $(".products_hover1").hide();
    $(".products_hover2").hide();
    $(".products_hover3").hide();
    $(".products_hover4").hide();
    $(".products_hover5").hide();
    $(".products_hover6").hide();

    $(".products_hover1-1").mouseenter(function(){
        $(".products_hover1-1").hide();
        $(".products_hover1").stop().show();
    });

    $(".products_hover1").mouseleave(function(){
        $(".products_hover1").hide();
        $(".products_hover1-1").stop().show();
    });

    $(".products_hover2-1").mouseenter(function(){
        $(".products_hover2-1").hide();
        $(".products_hover2").stop().show();
    });

    $(".products_hover2").mouseleave(function(){
        $(".products_hover2").hide();
        $(".products_hover2-1").stop().show();
    });

    $(".products_hover3-1").mouseenter(function(){
        $(".products_hover3-1").hide();
        $(".products_hover3").stop().show();
    });

    $(".products_hover3").mouseleave(function(){
        $(".products_hover3").hide();
        $(".products_hover3-1").stop().show();
    });

    $(".products_hover4-1").mouseenter(function(){
        $(".products_hover4-1").hide();
        $(".products_hover4").stop().show();
    });

    $(".products_hover4").mouseleave(function(){
        $(".products_hover4").hide();
        $(".products_hover4-1").stop().show();
    });

    $(".products_hover5-1").mouseenter(function(){
        $(".products_hover5-1").hide();
        $(".products_hover5").stop().show();
    });

    $(".products_hover5").mouseleave(function(){
        $(".products_hover5").hide();
        $(".products_hover5-1").stop().show();
    });

    $(".products_hover6-1").mouseenter(function(){
        $(".products_hover6-1").hide();
        $(".products_hover6").stop().show();
    });

    $(".products_hover6").mouseleave(function(){
        $(".products_hover6").hide();
        $(".products_hover6-1").stop().show();
    });



    $(".hamberger_icon").click(function () {
        $(".hamberger_box").stop().fadeIn();
        $("body").addClass("scroll_none");
    });

    $(".hamberger_icon").click(function () {
        $(".hamberger_close").stop().fadeIn();
        $(".oppacity_box").stop().fadeIn();
        $(".search_bar").stop().fadeOut();
        $(".search_close").stop().fadeOut();
        $(".logo").stop().fadeIn();
    });

    $(".hamberger_link li").click(function(){
        $("body").removeClass("scroll_none");
        $(".oppacity_box").stop().fadeOut();
        $(".hamberger_box").stop().fadeOut();
        $(".hamberger_close").stop().fadeOut();
    });

    $(".hamberger_close").click(function () {
        $(".hamberger_close").stop().fadeOut();
        $(".hamberger_box").stop().fadeOut();
    });

    $(".hamberger_close").click(function () {
        $(".hamberger_close").stop().fadeOut();
        $("body").removeClass("scroll_none");
        $(".oppacity_box").stop().fadeOut();
    });

    $(".top2_gnb li").click(function(){
        $(".oppacity_box").stop().fadeOut();
        $("body").removeClass("scroll_none");
        $(".hamberger_close").stop().fadeOut();
        $(".hamberger_close").stop().fadeOut();
        $(".hamberger_box").stop().fadeOut();
    });
// 
    $("#brand_inpo").mouseenter(function(){
        $(".search_bar").stop().hide();
    });

    $("#brand_inpo").mouseenter(function(){
        $(".search_close").stop().hide();
    });

    $("#brand_inpo").mouseenter(function(){
        $(".logo").stop().fadeIn();
    });
// 
    $(".search_icon").click(function(){
        $(".logo").hide();
    });

    $(".search_icon").click(function(){
        $(".search_bar").stop().fadeIn();
        $("body").addClass("scroll_none");
        $(".oppacity_box").stop().fadeIn();
    
    });

    $(".search_icon").click(function(){
        $(".search_close").stop().fadeIn();
    });

    $(".search_close").click(function(){
        $(".search_bar").stop().fadeOut();
        $("body").removeClass("scroll_none");
        $(".oppacity_box").stop().fadeOut();
    });

    $(".search_close").click(function(){
        $(".search_close").stop().fadeOut();
    });

    $(".search_close").click(function(){
        $(".logo").stop().fadeIn();
    });

});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1200) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.top_button').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.top_button').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 450) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.navi_button').fadeIn();//나타날 아이콘 클래스 수정!
    } 
    else {
        $('.navi_button').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

// 