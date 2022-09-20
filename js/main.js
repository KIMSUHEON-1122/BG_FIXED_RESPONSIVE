$(".trigger").click(function(){
    $(this).toggleClass("on");
    $("nav").slideToggle(400);
});
$(window).resize(function(){
    let winW = $(window).width(); // 브라우저의 가로 길이를 변수에
    console.log('winW',winW);
    if(winW >= 768 && $("nav").is(":hidden")){
        console.log("nav가 안보임");
        $("nav").removeAttr("style");
    }
});