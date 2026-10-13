//헤더 스크롤
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if (scrollTop > 100) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
});

if (scrollTop >= 800) {
    $(".top").addClass("show");
    $(".top").removeClass("show");
}

//모바일 메뉴
$("#nNav button").click(function () {
    $("#nNav nav").toggleClass("show");
});

//푸터메뉴
// $("firstMen").click(function () {
// $(this).next(".footer_dropdown").toggleClass("slide");
// });

$("firstMen").click(function () {
    $(this).next(".footer_dropdown").toggleClass(500);
});
