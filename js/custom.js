$(document).ready(function(){
    $(".burger").on("click", function(){
        $(".menu").toggleClass("active");
        $(".burger").toggleClass("active");
    });
});
