$(document).ready(function(){
    $(".container__burger").on("click", function(){
        $(".content__nav").toggleClass("active");
        $(".container__burger").toggleClass("active");
    });
});
