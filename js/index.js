$(function () {
    //banner轮播
    $(".index-native-li:eq(0)").addClass("index-native-li-active");
    var index_slide_num = 0;

    var  client_width = $(window).width();
    $(".index-slide-li").width(client_width);
    var slide_li_clone = $(".index-slide-li:first-child").clone();
    $(".index-slide-ul").append(slide_li_clone).width($(".index-slide-li").length*$(".index-slide-li").width());

    $(window).resize(function(){
        $(".index-slide-li").width($(window).width());
        client_width = $(".index-slide-li").width();
        $(".index-slide-ul").width($(".index-slide-li").length*$(".index-slide-li").width());
    });



    $(".index-btn-next").on("click",function () {
        $(".index-native-li-active").removeClass("index-native-li-active");
        index_slide_num++;
        if(index_slide_num == $(".index-slide-li").length){
            index_slide_num = 1;
            $(".index-slide-ul").css("left",0);
        }
        $(".index-slide-ul").stop().animate({
            "left":-index_slide_num*client_width
        },500);
        if(index_slide_num == $(".index-slide-li").length-1){
            $(".index-native-li:eq(0)").addClass("index-native-li-active");
        }else{
            $(".index-native-li:eq("+index_slide_num+")").addClass("index-native-li-active");
        }
    });
    $(".index-btn-prev").on("click",function () {
        $(".index-native-li-active").removeClass("index-native-li-active");
        index_slide_num--;
        if(index_slide_num == -1){
            index_slide_num = $(".index-slide-li").length-2;
            $(".index-slide-ul").css("left",-($(".index-slide-li").length-1)*client_width);
        }
        $(".index-slide-ul").stop().animate({
            "left":-index_slide_num*client_width
        },500);
        if(index_slide_num == $(".index-slide-li").length-1){
            $(".index-native-li:eq(0)").addClass("index-native-li-active");
        }else{
            $(".index-native-li:eq("+index_slide_num+")").addClass("index-native-li-active");
        }
    });
    $(".index-native-li").on("click",function () {
        $(".index-native-li-active").removeClass("index-native-li-active");
        index_slide_num = $(this).index();
        $(".index-slide-ul").stop().animate({
            "left":-index_slide_num*client_width
        },500);
        $(this).addClass("index-native-li-active");
    });
    function index_slide_interval() {
        $(".index-native-li-active").removeClass("index-native-li-active");
        index_slide_num++;
        if(index_slide_num == $(".index-slide-li").length){
            index_slide_num = 1;
            $(".index-slide-ul").css("left",0);
        }
        $(".index-slide-ul").stop().animate({
            "left":-index_slide_num*client_width
        },500);
        if(index_slide_num == $(".index-slide-li").length-1){
            $(".index-native-li:eq(0)").addClass("index-native-li-active");
        }else{
            $(".index-native-li:eq("+index_slide_num+")").addClass("index-native-li-active");
        }

    }
    var index_slide_timer = setInterval(index_slide_interval,5000);

    $(".index-slide-box").hover(function () {
        clearInterval(index_slide_timer);
        index_slide_timer = null;

    },function () {
        if(index_slide_timer == null){
            index_slide_timer = setInterval(index_slide_interval,5000);
        }
    });
    $('#video-btn').click(function () {
        $('.video').show();
        document.getElementById('video').play();
    });

    $("#case-btn-group .btn-box").each(function () {
        $(this).click(function () {
            $('.btn-box-hover').removeClass('btn-box-hover');
            $('.case-show').removeClass('case-show');
            $(this).addClass('btn-box-hover');
            $('.'+$(this).attr('data-case')).addClass('case-show');
        });
    });

//首页轮播
    var news_num = 0;
    var news_li_clone = $(".news-li:eq(0)").clone();
    $(".news-ul").append(news_li_clone).width($(".news-li").length*1200);
    $(".next-btn").on("click",function () {
        $(".lb-point-li-hover").removeClass("lb-point-li-hover");
        news_num++;
        if(news_num == $(".news-li").length){
            news_num = 1;
            $(".news-ul").css("left",0);
        }
        $(".news-ul").stop().animate({
            "left":-news_num*1200
        },500);
        if(news_num == $(".news-li").length-1){
            $(".lb-point-li:eq(0)").addClass("lb-point-li-hover");
        }else{
            $(".lb-point-li:eq("+news_num+")").addClass("lb-point-li-hover");
        }
    });
    $(".pre-btn").on("click",function () {
        $(".lb-point-li-hover").removeClass("lb-point-li-hover");
        news_num--;
        if(news_num == -1){
            news_num = $(".news-li").length-2;
            $(".news-ul").css("left",-($(".news-li").length-1)*1200);
        }
        $(".news-ul").stop().animate({
            "left":-news_num*1200
        },500);
        if(news_num == $(".news-li").length-1){
            $(".lb-point-li:eq(0)").addClass("lb-point-li-hover");
        }else{
            $(".lb-point-li:eq("+news_num+")").addClass("lb-point-li-hover");
        }
    });
    $(".lb-point-li").on("click",function () {
        $(".lb-point-li-hover").removeClass("lb-point-li-hover");
        news_num = $(this).index();
        $(".news-ul").stop().animate({
            "left":-news_num*1200
        },500);
        $(this).addClass("lb-point-li-hover");
    });

    $('.imgBg').each(function () {
        $(this).css({
            'background-position-y':($(this).offset().top-$(window).scrollTop())/10
        });
    });

    function animateFunc(num) {
        var time = '.8s';
        document.getElementsByClassName('animate')[num].style.cssText="visibility:visible; " +
            "animation:animatedTop "+time+" cubic-bezier(.09,.82,.6,.99);"+
            "-moz-animation:animatedTop "+time+" cubic-bezier(.09,.82,.6,.99);"+
            "-webkit-animation:animatedTop "+time+" cubic-bezier(.09,.82,.6,.99);"+
            "-ms-animation:animatedTop "+time+" cubic-bezier(.09,.82,.6,.99)";

    }
	/*
    var html_height = $(window).height();
    $(".animate").each(function (n) {
        var content_offset_top = $(this).offset().top;
        if(content_offset_top-$(window).scrollTop()<=(html_height*.9)&&content_offset_top-$(window).scrollTop()>=-(html_height*.7)&&$(this).css('visibility')=='hidden'){
            animateFunc(n);
        }
    });
    $(window).scroll(function () {
        var scroll_top = $(window).scrollTop();
        $(".animate").each(function (n) {
            var content_offset_top = $(this).offset().top;
            if(content_offset_top-$(window).scrollTop()<=(html_height*.9)&&content_offset_top-$(window).scrollTop()>=-(html_height*.7)&&$(this).css('visibility')=='hidden'){
                animateFunc(n);
            }
        });
        $('.imgBg').each(function () {
            $(this).css({
                'background-position-y':($(this).offset().top-$(window).scrollTop())/10
            });
        });
        if(scroll_top>=$('body').height()/2){
            $('#footer').css({
                zIndex:2
            });
            $('.index-slide-box').hide();
        }else{
            $('#footer').css({
                zIndex:0
            });
            $('.index-slide-box').show();
        }
    });
	
	*/

    var url_city =$("#yy-city").val();
    if(url_city=='杭州'||url_city=='南京'){
        $('.oldFang-article').hide();
        $('.oldFang').hide();
        $(".new-value").html('58888(60m²)');
        $(".new-href").prop('href',"/products/delicacy/");
    }else if(url_city=='北京'){
        $(".new-value").html('888/㎡');
        $(".old-value").html('888+148/㎡');
        $(".new-href").prop('href',"/zhuanti/170712-888/");
        $(".old-href").prop('href',"/zhuanti/170712-888old/");
    }else if(url_city=='天津'){
        $(".new-value").html('888/㎡');
        $(".old-value").html('888+148/㎡');
        $(".new-href").prop('href',"/zhuanti/170712tj-888/");
        $(".old-href").prop('href',"/zhuanti/170712tj-888old/");
    }else if(url_city=='重庆'){
        $(".new-href").prop('href',"/zhuanti/170712cq-888/");
        $(".old-href").prop('href',"/zhuanti/170712cq-888old/");
    }else if(url_city=='广州'||url_city=='深圳'){
        $(".new-value").html('68800(60m²)');
        $(".new-href").prop('href',"/zhuanti/170712gz-888/");
        $(".old-value").html('68800+118(60m²)');
        $(".old-href").prop('href',"/zhuanti/170712gz-888old/");
    } else if(url_city=='武汉') {
        $('.oldFang-article').hide();
        $('.oldFang').hide();
        $(".new-value").html('58888(60m²)');
        $
    }
 

});
