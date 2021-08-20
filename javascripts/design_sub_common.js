"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var $window = $(window);
var winSc;
var $html = $("html");
var htmlH;

$window.load(function () {
    htmlH = $("body").outerHeight(true);
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    whyOled();
    sub();
});


function sub(){
    var initSwiper = new Swiper('.swiper-container.studio_page', {
        spaceBetween: 0,
        speed:800,
        loop:true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        hashNavigation: true
    });

    $(document).ready(function(){
        $(document).bind('keydown',function(e){
            if ( e.keyCode === 123 /* F12 */) {
                e.preventDefault();
                e.returnValue = false;
            }
        });
    });
    document.onmousedown=disableclick;
    status="Right click is not available.";

    function disableclick(event){
        if (event.button === 2) {
            alert(status);
            return false;
        }
    }
}

function whyOled(){


    // //mask init
    var controller = new ScrollMagic.Controller({
        tweenChanges: true
    });




    var $makesSeen = $(".makes_oled_seen");
    //     $makesImg01 = $makesSeen.find(".makes_img02"),
    //     $makesTxt01 = $makesSeen.find(".makes_txt01"),
    //     $makesTxt02 = $makesSeen.find(".makes_txt02"),
    //     $makesTxt03 = $makesSeen.find(".tv_display"),
    //     $makesTxt04 = $makesSeen.find(".makes_txt03"),
    //     $makesLine = $makesSeen.find(".center_line");
    //
    //
    // var maskImg01 = TweenMax.to($makesImg01, .7, {opacity:"1", display:"block"}),
    //     maskImg01_move = TweenMax.to($makesImg01, .7, {x:"50%"}),
    //     maskLine01_start = TweenMax.to($makesLine, .3, {opacity:"1", display:"block", delay:.3}),
    //     maskLine01_end = TweenMax.to($makesLine, .5, {opacity:"0", display:"none", delay:.5}),
    //     makesTxt01_start = TweenMax.to($makesTxt01, .5, {opacity:"1", display:"block", y:"-50%", delay:.3}),
    //     makesTxt01_end = TweenMax.to($makesTxt01, .5, {opacity:"0", display:"none", y:"-60%", delay:.5}),
    //     makesTxt02_start = TweenMax.to($makesTxt02, .5, {opacity:"1", display:"block", y:"-50%", delay:.3}),
    //     makesTxt02_end = TweenMax.to($makesTxt02, .5, {opacity:"0", display:"none", y:"-60%", delay:.5}),
    //     makesTxt03_start = TweenMax.to($makesTxt03, .3, {opacity:"1", display:"block", delay:.3}),
    //     makesTxt03_end = TweenMax.to($makesTxt03, .5, {opacity:"0", display:"none", delay:.5}),
    //     makesTxt04_start = TweenMax.to($makesTxt04, .5, {opacity:"1", display:"block", y: "-50%", delay:.3}),
    //     makesTxt04_end = TweenMax.to($makesTxt04, .5, {delay:.2});
    //
    //
    // var _maskTime = new TimelineMax();
    // _maskTime.add([makesTxt01_start]).add(makesTxt01_end)
    //     .add([maskImg01 , makesTxt02_start]).add(makesTxt02_end).add(maskImg01_move).add([maskLine01_start, makesTxt03_start])
    //     .add([makesTxt03_end,maskLine01_end]).add(makesTxt04_start).add(makesTxt04_end);
    //
    //
    // var sceneMask = new ScrollMagic.Scene({
    //     triggerElement: "#makesOled",
    //     duration:7000,
    //     triggerHook:0
    //
    // })
    //     .setPin("#makesOled")
    //     .setTween(_maskTime)
    //     .addTo(controller);



    var $monitorSeen = $(".monitor_seen_wrap"),
        $monitorTxt01 = $monitorSeen.find(".monitor_txt01");

    var monitorTxt01 = TweenMax.to($monitorTxt01, 1, {opacity:"1", display:"block", y:"-50%", delay:.5}),
        monitorTxt01_end = TweenMax.to($monitorTxt01, .3, {delay:1});


    var _monitorTime = new TimelineMax();
    _monitorTime.add(monitorTxt01).add(monitorTxt01_end);


    var scenemonitorSeen = new ScrollMagic.Scene({
        triggerElement: "#monitorSeen",
        duration:500,
        triggerHook:0

    })
        .setPin("#monitorSeen")
        .setTween(_monitorTime)
        .addTo(controller);


    var $makesoled = $(".makes_oled");

    if($makesoled.length > 0){
        var makesoled_h = $makesoled.height(),
            makesoled_top = $makesoled.offset().top,
            makesoled_bottom = $makesoled.offset().top + makesoled_h;
    }


    var $makesTxt03 = $makesSeen.find(".makes_txt03");
    var $initMakesVideo = $makesSeen.find(".init_makes_video");

    $(window).scroll(function () {
        var _scrollTop = $(this).scrollTop();
        if(makesoled_top < _scrollTop && makesoled_bottom > _scrollTop){
            if(!$makesoled.hasClass("active")){
                $makesoled.addClass("active");
                TweenMax.to($initMakesVideo, .3, {opacity:"1", display:"block", onComplete: function () {
                        $initMakesVideo.find("video")[0].play();
                    }});
            }
        }
    });
    $initMakesVideo.find("video").on("ended" ,function () {
        TweenMax.to($initMakesVideo, .3, {opacity:"0", display:"none", onComplete:function () {
                TweenMax.to($makesTxt03, .3, {opacity:"1", display:"block"});
            }});
    })
    // video Event
    var $makesVideo = $makesSeen.find(".makes_video"),
        $makesShow = $makesSeen.find(".makes_show");

    $makesShow.on("click",function () {
        TweenMax.to($makesVideo, .3, {opacity:"1", display:"block", onComplete: function () {
                $makesVideo.find("video")[0].play();
            }});
    });
    $makesVideo.find("video").on("ended" ,function () {
        TweenMax.to($makesVideo.find("strong"), .2, {opacity:"1", display:"block"});
        TweenMax.to($makesVideo.find(".play_btn"), .2, {opacity:"1", display:"block"});
    });
    $makesVideo.find(".play_btn").on("click",function () {
        console.log("0");
        TweenMax.set($makesVideo, {display:"none", opacity:0});
        TweenMax.set($makesVideo.find("strong"), {opacity:"0", display:"none"});
        TweenMax.set($makesVideo.find(".play_btn"), {opacity:"0", display:"none"});
        TweenMax.set($makesTxt03, {opacity:"0", display:"none"});
        $initMakesVideo.find("video")[0].play();
        TweenMax.to($initMakesVideo, .3, {opacity:"1", display:"block", onComplete: function () {

            }});
    });
    var $whyVideo = $(".why_video_wrap"),
        $whyVideoBtn_yt = $whyVideo.find(".play_btn.yt");

    $whyVideoBtn_yt.on("click" ,function () {
        var _this = $(this);
        TweenMax.to(_this.parent(), .5, {opacity:"0", display:"none"});
    })



    // monitor
    var _compareBoxW = $(".monitor_compare .compare_box").width();
    var $alignMonitor = $(".monitor_compare .compare_box, .monitor_compare .lcd_screen .img_wrap");

    $alignMonitor.css({"background-position-x" :  -(1600 - _compareBoxW) / 2});

    $window.on("resize", function () {
        _compareBoxW = $(".monitor_compare .compare_box").width();
        $alignMonitor.css({"background-position-x" :  -(1600 - _compareBoxW) / 2});
    });

    if (!$(".monitor_compare").length) return false;
    var $movingBtn = $(".moving_btn");
    var _movingMouse = true;

    $movingBtn.mousedown(function (e) {
        _movingMouse = true;
        e.preventDefault();
        var _this = $(this),
            _lcdScreen = _this.parent(),
            _lcdScreenW = _lcdScreen.width();
        var _mouseStart= e.clientX;

        $(document).mousemove(function (e) {
            if(_movingMouse === false) return false;
            var _movingMax = e.clientX - _mouseStart + _lcdScreenW;
            if(_movingMax < 65){ return false;}
            if(_compareBoxW + 64 > _movingMax){
                _lcdScreen.css({width: _movingMax});
            }
        });
    });
    $(document).mouseup(function () {
        _movingMouse = false;
    });

    $(".monitor_seen_wrap").find(".monitor_show").on("click",function () {
        var _this = $(this).parent().parent();
        TweenMax.to(_this, 1, {display:"none", opacity:0});
    });
    // //monitor

    var $lightSwipe = $(".light_swipe");
    var $lightBtn = $lightSwipe.find(".light_btn");
    $lightBtn.on("click",function () {
        var _this = $(this);
        var _$loader = _this.parent().parent().find(".loading_var");
        var _$txtWrap = _this.parent();
        var _$dimm = _this.parent().parent().find(".light_dimm");

        TweenMax.to(_$txtWrap, .5 , {opacity:0, display:"none"});
        TweenMax.to(_$loader, 1 , {opacity:1, display:"block", delay:.5, onComplete:function () {
                TweenMax.to(_$dimm, 1.5 , {opacity:0, display:"none", delay:.5});
                TweenMax.to(_$loader, 1 , {opacity:0, display:"none", delay:.5});
            }});
    })

    var flyingSwiper = new Swiper('.flying_swipe', {
        speed: 1000,
        slidesPerView:1.25,
        centeredSlides: true,
        spaceBetween: 100,
        navigation: {
            nextEl: '.swipe_next_btn.flying_btn',
            prevEl: '.swipe_prev_btn.flying_btn',
        },
        pagination: {
            el: '.swiper-pagination.flying_pagination',
            clickable: true,
        },
        on:{
            slideChangeTransitionStart:function (swiper) {
                // console.log(this.activeIndex);
            },
            slideChangeTransitionEnd:function (swiper) {
                // console.log(this.activeIndex);
            }
        }
    });

    var lightSwiper = new Swiper('.light_swipe', {
        speed: 1000,
        slidesPerView:1,
        centeredSlides: true,
        navigation: {
            nextEl: '.swipe_next_btn.lifht_btn',
            prevEl: '.swipe_prev_btn.lifht_btn',
        },
        pagination: {
            el: '.swiper-pagination.light_pagination',
            clickable: true,
        },
        on:{
            slideChangeTransitionStart:function (swiper) {
                console.log(this.activeIndex);
            },
            slideChangeTransitionEnd:function (swiper) {
                console.log(this.activeIndex);
            }
        }
    });

    $(document).ready(function(){
        $(document).bind('keydown',function(e){
            if ( e.keyCode === 123 /* F12 */) {
                e.preventDefault();
                e.returnValue = false;
            }
        });
    });
    document.onmousedown=disableclick;
    status="Right click is not available.";

    function disableclick(event){
        if (event.button === 2) {
            alert(status);
            return false;
        }
    }
};