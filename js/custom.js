$(document).ready(function () {
    $(function () {

        $("a[href*='#']:not(a[href='#'])").click(function () {

            $("#navbar").removeClass("show");
            var target = $(this.hash);
            //            console.log(target);
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

        val = $(window).scrollTop() + 71;
        //        console.log(val);

        if (val > $("#crew").offset().top) {
            $(".nav-item").removeClass("active");
            $("#nav-crew").addClass("active");
        } else if (val > $("#sponsor").offset().top) {
            $(".nav-item").removeClass("active");
            $("#nav-sponsor").addClass("active");
        } else if (val > $("#transport").offset().top) {
            $(".nav-item").removeClass("active");
            $("#nav-transport").addClass("active");
        } else if (val > $("#timetable").offset().top) {
            $(".nav-item").removeClass("active");
            $("#nav-timetable").addClass("active");
        } else {
            $(".nav-item").removeClass("active");
            $("#nav-speaker").addClass("active");
        }

    })
});
