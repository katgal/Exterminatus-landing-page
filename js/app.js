/*created by katgal october 2016*/
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

        hamburgerMenu.on("click", function() {
            list.slideToggle(500, function() {

                $(this).attr('style', "").toggleClass("show");
            });
            //****adding class height:auto to .main-width for better look of webopage (menu will not override section1)
            mainWidth.toggleClass("add-auto-height");
        });
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
                navMenu.addClass("sticky");
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
