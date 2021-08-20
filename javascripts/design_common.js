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
    main();
});


function main(){
    var $hashBtnWrap = $(".hash_btn_wrap");
    var $cardWrap = $(".card_wrap");
    var $modelBtnInnerWrap = $(".model_btn_inner_wrap");
    var $loadActiveModel = $modelBtnInnerWrap.find(".active").text();
    var $modelBtn = $modelBtnInnerWrap.find("button");

    //처음 load될 때 active되어 있는 btn에 해당하는 hashtag block
    $hashBtnWrap.find("."+$loadActiveModel).css("display","inline-block");
    $hashBtnWrap.children("button").on("click",function(){
        $hashBtnWrap.find(".active").removeClass("active");
        $(this).addClass("active");

        //card에 해당하는 hashtag 눌렀을 때 해당 카드만 block
        var $hashName = $(this).attr('id');
        $cardWrap.children("div").css("display","none");
        $cardWrap.children("." + $hashName).css("display","block");
        iframeFn();
    })

    //vimeo control
    function iframeFn() {
        var $iframe = $("body").find(".vimeo_iframe");
        var iframeLength = $iframe.length;
        if(iframeLength > 0){
            for(var temp = 0; temp < iframeLength; temp++){
                var _videoSrc = $iframe.eq(temp).attr("src");
                $iframe.eq(temp).attr("src", _videoSrc);
            }
        }
    }
    var gnbActive = ["./images/layout/oled_active.png","./images/layout/qned_active.png","./images/layout/nanocell_active.png","./images/layout/audio_active.png"];
    for(var temp = 0; temp < 4; temp++){
        if($(".gnb_list").find("a").eq(temp).hasClass("active")){
            $(".gnb_list").find(".active img").attr("src",gnbActive[temp]);
        }
    }

    //slider
    //ai_picture
    var aiPictureSwiper = new Swiper('.ai_picture_swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 850,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    //lifestyle
    var lifestyleSwiper = new Swiper('.lifestyle_swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 850,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    //gallery_stand
    var gallerySwiper = new Swiper('.gallery_swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 850,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    //better_brighter_bigger
    var BetterBrighterBiggerSwiper = new Swiper('.b3_swiper-container', {
        observer: true,
        speed:500,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 850,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //game_optimizer
    var gameOptimizerSwiper = new Swiper('.game_optimizer_swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 850,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    //ai_sound_pro
    var aiSoundProSwiper = new Swiper('.ai_sound_pro_swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 850,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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

    //scrollbar
    var $scrollbar = $(".scrollbar"),
        imgSize = 500,
        $scrollAutoplayInterval = $(".scroll_autoplay_interval"),
        $intervalNamed = $scrollAutoplayInterval.find("button"),
        $clicked = $("#clicked"),
        $qrPopup = $(".qr_popup");

    var product = {
        "48C1" : {
            "imgLength": 195,
            "fileName" : "48C1",
            "pictureInterval" : [0, 35, 100, 171, 195],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_line" : "<button type=\"button\" class=\"stand_line\"><span>Stand</span></button>"
            }
        },
        "55C1" : {
            "imgLength": 211,
            "fileName" : "55C1",
            "pictureInterval" : [0, 33, 82, 133, 163],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_line" : "<button type=\"button\" class=\"stand_line\"><span>Stand</span></button>",
                "gallery_stand" : "<button type=\"button\" class=\"gallery_stand\"><span>Gallery<br> Stand</span></button>"
            }
        },
        "65B1" : {
            "imgLength": 220,
            "fileName" : "65B1",
            "pictureInterval" : [0, 31, 86, 144, 173],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_short" : "<button type=\"button\" class=\"stand_short\"><span>Stand</span></button>",
                "gallery_stand" : "<button type=\"button\" class=\"gallery_stand\"><span>Gallery<br> Stand</span></button>"
            }
        },
        "65C1" : {
            "imgLength": 236,
            "fileName" : "65C1",
            "pictureInterval" : [0, 34, 93, 160, 190],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_line" : "<button type=\"button\" class=\"stand_line\"><span>Stand</span></button>",
                "gallery_stand" : "<button type=\"button\" class=\"gallery_stand\"><span>Gallery<br> Stand</span></button>"
            }
        },
        "65G1" : {
            "imgLength": 269,
            "fileName" : "65G1",
            "pictureInterval" : [0, 36, 99, 180, 213],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand" : "<button type=\"button\" class=\"stand\"><span>Stand</span></button>",
                "gallery_stand" : "<button type=\"button\" class=\"gallery_stand\"><span>Gallery<br> Stand</span></button>"
            }
        },
        "65R1" : {
            "imgLength": 128,
            "fileName" : "65R1",
            "pictureInterval" : [0, 75, 101, 128],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "full_view" : "<button type=\"button\" class=\"full_view\"><span>Full<br> View</span></button>",
                "line_view" : "<button type=\"button\" class=\"line_view\"><span>Line<br> View</span></button>",
                "zero_view" : "<button type=\"button\" class=\"zero_view\"><span>Zero<br> View</span></button>"
            }
        },
        "77C1" : {
            "imgLength": 195,
            "fileName" : "77C1",
            "pictureInterval" : [0, 35, 99, 166],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_line" : "<button type=\"button\" class=\"stand_line\"><span>Stand</span></button>"
            }
        },
        "77G1" : {
            "imgLength": 223,
            "fileName" : "77G1",
            "pictureInterval" : [0, 36, 111, 193, 222],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand" : "<button type=\"button\" class=\"stand\"><span>Stand</span></button>"
            }
        },
        "77Z1" : {
            "imgLength": 192,
            "fileName" : "77Z1",
            "pictureInterval" : [0, 31, 91, 169],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand" : "<button type=\"button\" class=\"stand\"><span>Stand</span></button>"
            }
        },
        "83C1" : {
            "imgLength": 214,
            "fileName" : "83C1",
            "pictureInterval" : [0, 37, 101, 187],
            "pictureTextInterval" : [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_line" : "<button type=\"button\" class=\"stand_line\"><span>Stand</span></button>"
            }
        },
        "88Z1" : {
            "imgLength": 133,
            "fileName" : "88Z1",
            "pictureInterval": [0, 38],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "default" : "<button type=\"button\" class=\"default\"><span>Default</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>"
            }
        },
        "75QNED90" : {
            "imgLength": 223,
            "fileName" : "75QNED90",
            "pictureInterval": [0, 35, 99, 177, 198],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>",
                "stand_sharp" : "<button type=\"button\" class=\"stand_sharp\"><span>Stand</span></button>"
            }
        },
        "75QNED99" : {
            "imgLength": 194,
            "fileName" : "75QNED99",
            "pictureInterval": [0, 26, 86, 151, 172],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>",
                "stand_sharp" : "<button type=\"button\" class=\"stand_sharp\"><span>Stand</span></button>"
            }
        },
        "86QNED90" : {
            "imgLength": 250,
            "fileName" : "86QNED90",
            "pictureInterval": [0, 34, 105, 193, 222],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>",
                "stand_sharp" : "<button type=\"button\" class=\"stand_sharp\"><span>Stand</span></button>",
            }
        },
        "86QNED99" : {
            "imgLength": 228,
            "fileName" : "86QNED99",
            "pictureInterval": [0, 34, 96, 178, 202],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_sharp" : "<button type=\"button\" class=\"stand_sharp\"><span>Stand</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>"
            }
        },
        "65NANO75" : {
            "imgLength": 204,
            "fileName" : "65NANO75",
            "pictureInterval": [0, 24, 65, 107, 124, 141, 163],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_wide" : "<button type=\"button\" class=\"stand_wide\"><span>Wide<br> Stand</span></button>",
                "stand_narrow" : "<button type=\"button\" class=\"stand_narrow\"><span>Narrow<br> Stand</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>",
                "gallery_stand" : "<button type=\"button\" class=\"gallery_stand\"><span>Gallery<br> Stand</span></button>"
            }
        },
        "75NANO85" : {
            "imgLength": 197,
            "fileName" : "75NANO85",
            "pictureInterval": [0, 25, 75, 138, 159, 177],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_wide" : "<button type=\"button\" class=\"stand_wide\"><span>Wide<br> Stand</span></button>",
                "stand_narrow" : "<button type=\"button\" class=\"stand_narrow\"><span>Narrow<br> Stand</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>"
            }
        },
        "75NANO90" : {
            "imgLength": 193,
            "fileName" : "75NANO90",
            "pictureInterval": [0, 24, 72, 132, 151, 170],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_wide" : "<button type=\"button\" class=\"stand_wide\"><span>Wide<br> Stand</span></button>",
                "stand_narrow" : "<button type=\"button\" class=\"stand_narrow\"><span>Narrow<br> Stand</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>"
            }
        },
        "86NANO99" : {
            "imgLength": 174,
            "fileName" : "86NANO99",
            "pictureInterval": [0, 24, 72, 133, 154],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "wall_mount" : "<button type=\"button\" class=\"wall_mount\"><span>Wall<br> Mount</span></button>",
                "brackets" : "<button type=\"button\" class=\"brackets\"><span>Brackets</span></button>",
                "input_output" : "<button type=\"button\" class=\"input_output\"><span>Input&<br> Output</span></button>",
                "stand_sharp" : "<button type=\"button\" class=\"stand_sharp\"><span>Stand</span></button>",
                "stand_onepole" : "<button type=\"button\" class=\"stand_onepole\"><span>One-pole<br> Stand</span></button>",
            }
        },
        "Eclair" : {
            "imgLength": 189,
            "fileName" : "Eclair",
            "pictureInterval": [0, 74, 129],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "one_full_set" : "<button type=\"button\" class=\"one_full_set\"><span>Eclair<br>Full set</span></button>"
            }
        },
        "FN7" : {
            "imgLength": 134,
            "fileName" : "FN7",
            "pictureInterval": [0, 59, 98],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "earbuds" : "<button type=\"button\" class=\"earbuds\"><span>Earbuds</span></button>",
                "cradle" : "<button type=\"button\" class=\"cradle\"><span>Cradle</span></button>",
                "ear_full_set" : "<button type=\"button\" class=\"ear_full_set\"><span>Full Set</span></button>"
            }
        },
        "FP8" : {
            "imgLength": 140,
            "fileName" : "FP8",
            "pictureInterval": [0, 54, 98],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "earbuds" : "<button type=\"button\" class=\"earbuds\"><span>Earbuds</span></button>",
                "cradle" : "<button type=\"button\" class=\"cradle\"><span>Cradle</span></button>",
                "ear_full_set" : "<button type=\"button\" class=\"ear_full_set\"><span>Full Set</span></button>"
            }
        },
        "GP9" : {
            "imgLength": 53,
            "fileName" : "GP9",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "GX" : {
            "imgLength": 139,
            "fileName" : "GX",
            "pictureInterval": [0, 37, 88],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "one_full_set" : "<button type=\"button\" class=\"one_full_set\"><span>GX<br>Full set</span></button>"
            }
        },
        "PL2" : {
            "imgLength": 65,
            "fileName" : "PL2",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "PL5" : {
            "imgLength": 56,
            "fileName" : "PL5",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "PL7" : {
            "imgLength": 53,
            "fileName" : "PL7",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "PN1" : {
            "imgLength": 41,
            "fileName" : "PN1",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "PN5" : {
            "imgLength": 56,
            "fileName" : "PN5",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "PN7" : {
            "imgLength": 51,
            "fileName" : "PN7",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "SP2" : {
            "imgLength": 147,
            "fileName" : "SP2",
            "pictureInterval": [0],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
            }
        },
        "SP7Y" : {
            "imgLength": 203,
            "fileName" : "SP7Y",
            "pictureInterval": [0, 120, 171],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "one_full_set" : "<button type=\"button\" class=\"one_full_set\"><span>SP7Y<br>Full set</span></button>"
            }
        },
        "SP8" : {
            "imgLength": 176,
            "fileName" : "SP8",
            "pictureInterval": [0, 98, 146],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "one_full_set" : "<button type=\"button\" class=\"one_full_set\"><span>SP8<br>Full set</span></button>"
            }
        },
        "SP9" : {
            "imgLength": 209,
            "fileName" : "SP9",
            "pictureInterval": [0, 108, 158],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "one_full_set" : "<button type=\"button\" class=\"one_full_set\"><span>SP9<br>Full set</span></button>"
            }
        },
        "SP11RA" : {
            "imgLength": 297,
            "fileName" : "SP11RA",
            "pictureInterval": [0, 120, 170, 232],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "rear_up_speaker" : "<button type=\"button\" class=\"rear_up_speaker\"><span>Rear<br>Up-firing<br>speaker</span></button>",
                "tween_full_set" : "<button type=\"button\" class=\"tween_full_set\"><span>SP11RA<br>Full Set</span></button>"
            }
        },
        "SPD7" : {
            "imgLength": 199,
            "fileName" : "SPD7",
            "pictureInterval": [0, 85, 139],
            "pictureTextInterval": [],
            "clickPictureInterval" : [],
            "intervalTab" : {
                "sound_bar" : "<button type=\"button\" class=\"sound_bar\"><span>Sound<br> Bar</span></button>",
                "sub_woofer" : "<button type=\"button\" class=\"sub_woofer\"><span>Sub-<br> woofer</span></button>",
                "one_full_set" : "<button type=\"button\" class=\"one_full_set\"><span>SPD7<br>Full set</span></button>"
            }
        },
    };
    //canvas
    var canvas = document.querySelector('canvas'),
        c = canvas.getContext('2d'),
        imageArray,
        imgSrc,
        imgIdxArr = [], //img
        imgLength = 310;

    function drawImagesToCanvas(model,imglength) {
        imgIdxArr = [];
        for(var num = 1; num < imglength + 1; num++) { //0도 img 부여해야하기 때문에 311장의 img 필요
            imageArray = new Image;
            imgSrc = "./images/"+ product[model]["fileName"] +"/" + num + ".jpg";
            imageArray.src = imgSrc, imgIdxArr.push(imageArray);
        }
        imgIdxArr[0].onload = (function(){
            c.drawImage(imgIdxArr[0], 0, 0, 1400, 788); //처음에 load되는 이미지
            TweenMax.to($(".if_wrap_dimmed"), .8, {display:"block",opacity:1});
        });
        imgIdxArr[imglength - 1].onload = (function(){
            console.log("onload");
            TweenMax.to($(".if_wrap_dimmed"), .8, {display:"none",opacity:0});
        });
    }

    //Interactive Gallery button
    $(".btn_autoplay_video").on("click",function(){
        $("#canvas").css("display","block");
        $(".close_btn").css({"display":"block","transform":"translate(753px, -483px)"});
        $(".autoplay_video").css("display","block");
        $(".scroll_autoplay_wrap").css("display","block");
        $(".info_wrap").css("margin","160px 0 0 0");
        $(".more_btn").css("transform","translateY(-219px)");
        c.drawImage(imgIdxArr[0], 0, 0, 1400, 788);
        $(".scrollbar").scrollLeft(0); //scrollbar init
        $(".scroll_trace").css("width","0");
        $(".btn_autoplay_video_wrap").css("display","none");
        $(".if_wrap").css("height","950px");
        $(".qr_popup_btn").css("transform","translate(700px, -470px)");
    })

    //click and scroll

    var modelBtnText,
        intervalName,
        intervalClassName,
        scrollPosition,
        $selectIntervalTab,
        $selectLastIntervalTab,
        imglength;

    function calculation(modelBtnText) {
        //pictureTextInterval, clickPictureInterval
        //pictureTextInterval : (pictureInterval[i] / 총 img갯수 ) * 1400(canvas width)
        product[modelBtnText]["pictureTextInterval"] = []; //init
        product[modelBtnText]["clickPictureInterval"] = [];

        var temp;
        for(temp = 0; temp < product[modelBtnText]["pictureInterval"].length; temp++ ){
            //1400 : canvas width
            if(product[modelBtnText]["pictureInterval"][temp] > 130){
                product[modelBtnText]["pictureTextInterval"].push(parseInt(((product[modelBtnText]["pictureInterval"][temp] / product[modelBtnText]["imgLength"]) * 1400) - 13));
            }
            else {
                product[modelBtnText]["pictureTextInterval"].push(parseInt(((product[modelBtnText]["pictureInterval"][temp] / product[modelBtnText]["imgLength"]) * 1400)));
            }
            product[modelBtnText]["clickPictureInterval"].push(parseInt(product[modelBtnText]["pictureInterval"][temp] * imgSize));
        }
    }

    function ChangeIntervalText(modelName){
        $scrollAutoplayInterval.empty();
        var temp;
        for(temp = 0; temp < Object.keys(product[modelName]["intervalTab"]).length; temp++){
            $scrollAutoplayInterval.append(product[modelName]["intervalTab"][Object.keys(product[modelName]["intervalTab"])[temp]]);
            $("." + Object.keys(product[modelName]["intervalTab"])[temp] + "").css("margin-left",product[modelName]["pictureTextInterval"][temp]);
        }
    }

    function ChangeIntervalTextColor(modelName){
        scrollPosition = Math.ceil(($scrollbar.scrollLeft() * imgLength) / (imgLength * imgSize));
        c.drawImage(imgIdxArr[Math.ceil(($scrollbar.scrollLeft() * imgLength) / (imgLength * imgSize))], 0, 0, 1400, 788);

        var temp;
        for(temp = 0; temp < Object.keys(product[modelName]["intervalTab"]).length; temp++){
            if(product[modelName]["pictureInterval"][temp] <= scrollPosition && scrollPosition < product[modelName]["pictureInterval"][temp+1] ){
                $($scrollAutoplayInterval.find("button"),$intervalNamed).removeClass("active");
                $($scrollAutoplayInterval.find("button"),$intervalNamed).css({color: "#000",backgroundColor:"#e5e5e6"});
                $selectIntervalTab = $("." + Object.keys(product[modelName]["intervalTab"])[temp] + "");
                $selectIntervalTab.css({color: "#fff",backgroundColor:"#e0236b"});
                $selectIntervalTab.addClass("active");
            }
            else if(product[modelName]["pictureInterval"][Object.keys(product[modelName]["intervalTab"]).length - 1] < scrollPosition ){
                $($scrollAutoplayInterval.find("button"),$intervalNamed).removeClass("active");
                $($scrollAutoplayInterval.find("button"),$intervalNamed).css({color: "#000",backgroundColor:"#e5e5e6"});
                $selectLastIntervalTab = $("." + Object.keys(product[modelName]["intervalTab"])[Object.keys(product[modelName]["intervalTab"]).length - 1] + "");
                $selectLastIntervalTab.css({color: "#fff",backgroundColor:"#e0236b"});
                $selectLastIntervalTab.addClass("active");
            }
        }
    }

    function param(model){
        for (var j = 0; j < $modelBtn.length; j++) {
            if ($modelBtn.eq(j).text() === model) {
                //model matching
                $modelBtn.removeClass("active");
                $modelBtn.eq(j).addClass("active");

                //hash matching
                var selectModelName = $modelBtn.eq(j).text();
                var selectHash = $("[class*=" + selectModelName + "]");
                $hashBtnWrap.find("button").css("display", "inline-block");
                $hashBtnWrap.find("button").not(selectHash).css("display", "none");
                $modelBtn.eq(j).trigger("click");
            }
        }
    }

    $scrollbar.on("scroll",function(){
        ChangeIntervalTextColor(modelBtnText);
        if(product[modelBtnText]["imgLength"] < 45){
            $(".scroll_trace").css("width",""+ $scrollbar.scrollLeft() / ((imgSize * imglength) / 1400)  +"");
            $(".trick_scrollbar").css("width","1314px");
            $(".scrollbar").css("transform","translate(-48.5%, 321px)");
        }
        else if(product[modelBtnText]["imgLength"] < 100){
            $(".scroll_trace").css("width",""+ $scrollbar.scrollLeft() / Math.ceil(((imgSize * imglength) / 1400) - 0.3) +"");
        }
        else {
            $(".scroll_trace").css("width",""+ $scrollbar.scrollLeft() / Math.ceil(((imgSize * imglength) / 1400)) +"");
        }
        $(".temp_img").css("z-index","100");
        $("#canvas").css("z-index","200");
    });

    $modelBtn.on("click",function() {
        iframeFn();
        modelBtnText = $(this).text();
        var modelName = $(this).text();
        var findModel = $("[class*=" + modelName + "]");
        $(".model_btn_inner_wrap").find(".active").removeClass("active on");
        $(this).addClass("active on");
        $cardWrap.children("div").css("display","none");
        $hashBtnWrap.find(".active").removeClass("active");
        //클릭한 모델 명 찾고 모델명이 포함된 클래스인 button을 찾아서 dp block
        $hashBtnWrap.find("button").css("display","inline-block");
        $hashBtnWrap.find("button").not(findModel).css("display","none");
        $("#canvas").css("display","block");
        $(".close_btn").css("display","none");
        // $(".scroll_autoplay_wrap").css("display","none");
        $(".info_wrap").css("margin","0 0 0 0");
        $(".scrollbar").scrollLeft(0);
        $(".qr_popup_wrap").css("z-index","0");
        $qrPopup.css("display","none");
        $(".btn_autoplay_video_wrap").css("display","block");
        $(".if_wrap").css("height","940px");
        $(".qr_popup_btn").css("transform","translate(700px, -470px)");
        $(".trick_scrollbar").css("display","block");

        if(product[modelBtnText]["imgLength"] < 100) {
            $(".trick_scrollbar").css("width","1320px");
            $(".scrollbar").css("transform","translate(-49%, 321px)");
            $(".scroll_trace_wrap").css("transform","translateX(-49%);");
            $(".scroll_trace").css("left","2%");
        } else {
            $(".trick_scrollbar").css({width:"1370px",transform:"translateX(-50%)"});
            $(".scrollbar").css("transform","translate(-50%, 321px)");
            $(".scroll_trace_wrap").css("transform","translateX(-50%);");
            $(".scroll_trace").css("left","1%");
        }

        //furioos matching
        $(".furioos_iframe").attr("src",iframeArr[""+ modelBtnText +""]);

        //QR matching
        $(".qr_popup_btn").css("display","block");
        imglength = product[modelBtnText]["imgLength"];
        $qrPopup.find("img").attr("src","./images/qr_popup/"+"qr_popup_"+ modelBtnText +".png");
        $(".trick_contents").css("width",(imglength * imgSize)+"px");

        drawImagesToCanvas(modelBtnText,imglength);

        calculation(modelBtnText);

        ChangeIntervalText(modelBtnText);

        var $intervalNamed = $scrollAutoplayInterval.find("button");
        $intervalNamed.on("click",function(){
            $intervalNamed.removeClass("active");
            $intervalNamed.css({color: "#000",backgroundColor:"#e5e5e6"});
            intervalName = $(this).text();
            intervalClassName = $(this).attr('class');
            c.drawImage(imgIdxArr[product[modelBtnText]["pictureInterval"][Object.keys(product[modelBtnText]["intervalTab"]).indexOf(intervalClassName)]], 0, 0, 1400, 788);
            $(".scrollbar").scrollLeft(product[modelBtnText]["clickPictureInterval"][Object.keys(product[modelBtnText]["intervalTab"]).indexOf(intervalClassName)]);
            $(this).css({color: "#fff",backgroundColor:"#e0236b"});
            $(this).addClass("active");
        });
    })

    $clicked.trigger("click");

    //QR Popup
    $(".qr_popup_btn").on("click",function(){
        $(".qr_popup").css("display","block");
        $(".qr_close_btn").css("display","block");
        $(this).css("display","none");
        $(".qr_popup_wrap").css({"display":"block","z-index":"200"});
    })
    $(".qr_close_btn").on("click",function(){
        $(".qr_popup").css("display","none");
        $(this).css("display","none");
        $(".qr_popup_btn").css("display","block");
        $(".qr_popup_wrap").css({"display":"block","z-index":"0"});
    })

    var urlParam = location.search;
    urlParam = urlParam.split("?");
    urlParam = urlParam[1];
    if(urlParam !== undefined){
        urlParam = urlParam.split("=");
        var clickedProduct = urlParam[1];
    }
    param(clickedProduct);
}