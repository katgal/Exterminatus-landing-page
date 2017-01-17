/*created by katgal 2016*/
$(document).ready(function() {


    console.log("Do you hear the voices too?");
    // console.log("Sanity is for the weak!");
    // console.log("I feel Warp is overtakig me... it is a good pain");
    // console.log("That is the way to hell...");

    //**********************************************
    //************** icon scroller *****************
    //**********************************************
    function scroll() {

        var scrollIcon = $("#scroller");
        var scrollTo = $("#scroll-destination");

        scrollIcon.on("click", function() {
            $("html, body").animate({
                scrollTop: scrollTo.offset().top
            }, 2000);
            console.log("Yes Master? ...We will build it for you.");
        });
    }
    scroll();


    //**********************************************
    //****** hamburger menu show-hide animation ****
    //**********************************************
    function animatedMenuScroll() {
        var hamburgerMenu = $(".hamburger-menu");
        var list = $(".menu");
        var mainWidth = $(".main-width");
        // <a> elements for closing menu after clicking
        var aElements = list.find("a");

        hamburgerMenu.on("click", function() {
            list.slideToggle(500, function() {

                $(this).attr('style', "").toggleClass("show");
            });
            // ****adding class height:auto to .main-width for better look of webopage (menu will not override section1)
            mainWidth.toggleClass("add-auto-height");
        });
        // close menu after clicking on link / do not affect whole .menu - prevent .menu "flashing" after click
        if (hamburgerMenu.css("display") == "block") {
            aElements.on("click", function() {
                list.slideToggle(500, function() {

                    $(this).attr('style', "").toggleClass("show");
                });

                mainWidth.toggleClass("add-auto-height");
            });
        }
    }
    animatedMenuScroll();

    //**********************************************
    //************** sticky menu *******************
    //**********************************************

    function stickyMenu() {

        var navMenu = $("#scroll-destination");
        var navMenuTopPosition = navMenu.offset().top;

        $(window).on("scroll", function() {
            var scrollTop = $(document).scrollTop();

            if (scrollTop > navMenuTopPosition) {
                navMenu.addClass("sticky").css("opacity", "0.9");
            } else {
                navMenu.removeClass("sticky");
            }
        });
    }
    stickyMenu();

    //**********************************************
    //************ nav scroll to ... ***************
    //**********************************************

    //****************** home **********************
    function scrollTo() {

        var menu = $(".menu");
        var aElements = menu.find("a");
        var mainWidth = $(".main-width");

        aElements.on("click", function() {

            console.log("Don't think you can order ME around...");

            var aHref = $(this).attr("href");
            var target = $(aHref);

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 2000);
        });
    }
    scrollTo();

    //**********************************************
    //*********** icons scroll to ... **************
    //**********************************************

    function scrollTo2() {

        var wrapper = $(".icons-wrapper");
        var divElements = wrapper.find(".icon-background");

        divElements.on("click", function() {

            console.log("Who are you to order me, fool?");

            var divId = $(this).attr("id").substr(5);
            var target = $("#" + divId);

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 2000);
        });
    }
    scrollTo2();

});

//**********************************************
//*** section 2 show-hide animation on scroll **
//**********************************************

function scrollSection2() {

    var devicesImg = $("#img-devices");
    //I have to indicate section 1 right above section2 to get desired effect
    var section1 = $("#section1");
    var section1Position = section1.offset().top;
    var paragraphWrap = $(".paragraph-wrapper");

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > section1Position && $(window).width() > 480) {
            devicesImg.fadeIn(1000);
            paragraphWrap.fadeIn(1000);
        } else {
            if ($(window).width() > 480) {
                paragraphWrap.fadeOut();
            }
            devicesImg.fadeOut();
        }
    });
}

scrollSection2();

//**********************************************
//*************** hero slider ******************
//**********************************************

//I am aware that this may contain little too much heresy but I wanted to create RWD slider on my own
//maybe it is not perfect but I will figure it out... someday
//in responsive view it looks ok, in browser window not so great in some small sizes...(match media/resize?)
function heroSlider() {

    var prevButton = $(".prev");
    var nextButton = $(".next");
    var sliderContainer = $(".slider-container");

    nextButton.on("click", function() {
        if (!sliderContainer.is(":animated")) {
            //it have to be set on 1800px because when I add other numbers doesn't work as planned
            if (parseInt(sliderContainer.css("marginLeft")) > -1800 && $(window).width() <= 350) {
                sliderContainer.animate({
                    marginLeft: "-=360px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1800 && $(window).width() <= 400) { //-1900
                sliderContainer.animate({
                    marginLeft: "-=380px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1800 && $(window).width() <= 450) { //-2050
                sliderContainer.animate({
                    marginLeft: "-=410px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1800 && $(window).width() <= 500) { //-2125
                sliderContainer.animate({
                    marginLeft: "-=425px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1800 && $(window).width() <= 550) { //-2275
                sliderContainer.animate({
                    marginLeft: "-=455px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1800 && $(window).width() <= 600) { //-2450
                sliderContainer.animate({
                    marginLeft: "-=490px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1330 && $(window).width() <= 650) { //-1330
                sliderContainer.animate({
                    marginLeft: "-=665px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1330 && $(window).width() <= 700) { //-1330
                sliderContainer.animate({
                    marginLeft: "-=680px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1330 && $(window).width() <= 800) { //-1490
                sliderContainer.animate({
                    marginLeft: "-=745px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1330 && $(window).width() <= 850) { //-1490
                sliderContainer.animate({
                    marginLeft: "-=820px"
                }, 500);
            } else if (parseInt(sliderContainer.css("marginLeft")) > -1330 && $(window).width() <= 900) { //-1600
                sliderContainer.animate({
                    marginLeft: "-=800px"
                }, 500);
            } else {

                if (parseInt(sliderContainer.css("marginLeft")) > -1200 && $(window).width() >= 901) { //1200
                    sliderContainer.animate({
                        marginLeft: "-=400px"
                    }, 500);
                }
            }
        }
    });
    prevButton.on("click", function() {
        if (!sliderContainer.is(":animated") && parseInt(sliderContainer.css("marginLeft")) < 0) {
            if ($(window).width() <= 350) {
                sliderContainer.animate({
                    marginLeft: "+=360px"
                }, 500);
            } else if ($(window).width() <= 400) {
                sliderContainer.animate({
                    marginLeft: "+=380px"
                }, 500);
            } else if ($(window).width() <= 450) {
                sliderContainer.animate({
                    marginLeft: "+=410px"
                }, 500);
            } else if ($(window).width() <= 500) {
                sliderContainer.animate({
                    marginLeft: "+=425px"
                }, 500);
            } else if ($(window).width() <= 550) {
                sliderContainer.animate({
                    marginLeft: "+=455px"
                }, 500);
            } else if ($(window).width() <= 600) {
                sliderContainer.animate({
                    marginLeft: "+=490px"
                }, 500);
            } else if ($(window).width() <= 650) {
                sliderContainer.animate({
                    marginLeft: "+=665px"
                }, 500);
            } else if ($(window).width() <= 700) {
                sliderContainer.animate({
                    marginLeft: "+=680px"
                }, 500);
            } else if ($(window).width() <= 800) {
                sliderContainer.animate({
                    marginLeft: "+=745px"
                }, 500);
            } else if ($(window).width() <= 850) {
                sliderContainer.animate({
                    marginLeft: "+=820px"
                }, 500);
            } else if ($(window).width() <= 900) {
                sliderContainer.animate({
                    marginLeft: "+=800px"
                }, 500);
            } else {
                if ($(window).width() >= 901) {
                    sliderContainer.animate({
                        marginLeft: "+=400px"
                    }, 400);
                }
            }


        }
    });
}
heroSlider();
