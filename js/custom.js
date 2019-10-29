$(document).ready(function () {
    $(function () {

        $("a[href*='#']:not(a[href='#'])").click(function () {

            $("#navbar").removeClass("show");
            var target = $(this.hash);
            $("html, body").animate({
                scrollTop: target.offset().top - 70
            }, "slow");
            return false;
        });

        $("a[href='#']").click(function () {

            $("#navbar").removeClass("show");
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    });
    $(window).scroll(function () {

        if ($(window).scrollTop() < $("#timetable").height()) {
            $(".nav-item").removeClass("active");
            $("#nav-speaker").addClass("active");
        } else if ($(window).scrollTop() >= $("#timetable").height() && $(window).scrollTop() < $("#transport").height()) {
            $(".nav-item").removeClass("active");
            $("#nav-timetable").addClass("active");
        } else if ($(window).scrollTop() >= $("#transport").height() && $(window).scrollTop() < $("#sponsor").height()) {
            $(".nav-item").removeClass("active");
            $("#nav-transport").addClass("active");
        } else if ($(window).scrollTop() >= $("#sponsor").height()) {
            $(".nav-item").removeClass("active");
            $("#nav-sponsor").addClass("active");
        }

    })
});
