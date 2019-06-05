document.addEventListener("DOMContentLoaded", function(){
    // booking form request
    $(window).bind("load", function() {
        $('.form').submit(function(e) { 
            e.preventDefault(); 
            var form_data = $(this).serialize();  
            $.ajax({ 
                type: "POST", 
                url: "../bookform.php", 
                data: form_data, 
                success: function() { 
                    setTimeout( function() { 
                        alert("Ваше сообщение успешно отправлено!"); 
                    }, 1000); }, 
                error: function() { 
                    setTimeout( function() { 
                        alert("Ошибка отправления!"); 
                    }, 1000); 
                } 
            }); 
        });

        $(document).ready(function(){
            $(".container__burger").on("click", function(){
                $(".content__nav").toggleClass("active");
                $(".container__burger").toggleClass("active");
            });
        });
    });

    // free hosting elements deletion 
    try { 
        document.getElementsByClassName("cbalink")[0].parentNode.removeChild(document.getElementsByClassName("cbalink")[0]); 
        document.getElementsByClassName("cumf_bt_form_wrapper")[0].parentNode.removeChild(document.getElementsByClassName("cumf_bt_form_wrapper")[0]); 
    } catch(e) { 
        //catch 
    } 

    // anchor scroll
    window.onload = function () {
        anchors = [].slice.call(document.querySelectorAll('a[href^="#"]'));
        anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var anchorOffset = document.querySelector(this.getAttribute('href')).offsetTop;
            window.scrollTo(0, anchorOffset - 7 * window.innerHeight / 100);
        });
        });
    };

    // variables
    var botbar = document.getElementsByClassName("top");
    var topCont = document.getElementsByClassName("top__container");
    var navItem = document.getElementsByClassName("navbar__item");
    var contBur = document.getElementsByClassName("container__burger");
    var prevOffset = window.pageYOffset;

    //menu resize
    window.onscroll = function myFnc() {
        if (prevOffset == 0) {
            var newOffset = window.pageYOffset;
            if (newOffset > prevOffset) {
                botbar[0].classList.add("top-move");
                topCont[0].classList.add("top__container-move");
                navItem[0].classList.add("navbar__item-move");
                contBur[0].classList.add("container__burger-move");
            } else {
                botbar[0].classList.remove("top-move");
                topCont[0].classList.remove("top__container-move");
                navItem[0].classList.remove("navbar__item-move");
                contBur[0].classList.remove("container__burger-move");
            }  
        } else {
            var newOffset = window.pageYOffset;
            if (newOffset == 0) {
                botbar[0].classList.remove("top-move");
                topCont[0].classList.remove("top__container-move");
                navItem[0].classList.remove("navbar__item-move");
                contBur[0].classList.remove("container__burger-move");
            } else {
                botbar[0].classList.add("top-move");
                topCont[0].classList.add("top__container-move");
                navItem[0].classList.add("navbar__item-move");
                contBur[0].classList.add("container__burger-move");
            }
        }
    };
});
