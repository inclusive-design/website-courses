$(document).ready(function () {
    $("#main-nav li:first-child").addClass("active");    

    $('#main-nav a').click(function() {
        $("li.active").removeClass("active");
        $(this).closest('li').addClass("active");
    });
});