/*created by katgal october 2016*/
$(document).ready(function() {


    console.log("Do you hear the voices too?");
    // console.log("Sanity is for the weak!");
    // console.log("I feel Warp is overtakig me... it is a good pain");
    // console.log("That is the way to hell...");

    //**********************************************
    //icon scroller************
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
    //hamburger menu show hide animation************
    //**********************************************
    function animatedMenuScroll() {
        var hamburgerMenu = $(".hamburger-menu");
        var list = $(".menu");
        var mainWidth = $(".main-width");

        hamburgerMenu.on("click", function() {
            list.slideToggle(500, function() {

                $(this).attr('style', "").toggleClass("show");
            });
            //****adding class height:auto to .main-width for better look of webopage (menu not override section1)
            mainWidth.toggleClass("add-auto-height");
        });
    }
    animatedMenuScroll();

    //**********************************************
    //sticky menu ************
    //**********************************************

    function stickyMenu() {

    }
    stickyMenu();

});
