import $ from 'jquery';
// // window.onload = function(){
// //     console.log("이제 되나?")
// // }

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 30){
            $("#ads").addClass("h0")
        }else{$("#ads").removeClass("h0")}
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 30){
            $("body").addClass("scroll")
        }else{$("body").removeClass("scroll")}
    })
})
    // $(window).scroll(function(){
    //     if($(window).scrollTop() < 30){
    //         $("#maintab").addClass("mt50")
    //     }else{$("#maintab").removeClass("mt50")}
    // })
    // $(window).scroll(function(){
    //     if($(window).scrollTop() > 30){
    //         $("#maintab").addClass("fixed-top")
    //     }else{$("#maintab").removeClass("fixed-top")}
