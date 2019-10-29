$(document).ready(function () {
    $(function () {

        $("a[href*='#']").click(function () {

            var target = $(this.hash);

            $("html,body").animate({
                scrollTop: target.offset().top - 70
            }, 500);

            return false;

        });

    });
});
