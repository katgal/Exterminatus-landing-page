/*created by katgal 2017*/
$(document).ready(function() {

    console.log("Do you hear the voices too?");

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


        function toggle() {
            $(this).attr('style', "").toggleClass("show");
            // ****adding class height:auto to .main-width for better look of webopage (menu will not override section1)
            mainWidth.toggleClass("add-auto-height");
        }

        hamburgerMenu.on("click", function() {
            list.slideToggle(500, toggle());
        });

        // close menu after clicking on link / work after site refreshing
        if (hamburgerMenu.css("display") == "block") {
            aElements.on("click", function(e) {
                list.slideToggle(500, toggle());
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
                // this IE exeption solves problems with z-index
                //(<nav> while becoming .sticky was hiding behind section1 for a second), I have read IE has problems with z-index
                //I tried position: relative with parent/child elements solutions (css sheet) but they did not work
                // so I used this code instead,
                //it works fine but when <nav> gets .sticky class for the first time code does not work properly...
                // I see tricky heresy growing here...
                if (!!navigator.userAgent.match(/Trident\/7\./)) {
                    navMenu.addClass("sticky").css({
                        "opacity": "0.9",
                        "z-index": "1000"
                    });
                }
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

        aElements.on("click", function(e) {
            e.preventDefault(); //solves problem with flickering (IE and Chrome)
            console.log("Don't think you can order ME around...");

            var aHref = $(this).attr("href");
            var target = $(aHref);
            var targetOffset = target.offset().top;
            var scrollTop = $(document).scrollTop();

            function animate() {
                $("html, body").animate({
                    scrollTop: targetOffset
                }, 2000);
            }

            if (scrollTop < targetOffset) {

                var navMenu = $("#scroll-destination");
                var navMenuHeight = navMenu.height();

                if (!navMenu.hasClass("sticky")) {
                    $("html, body").animate({
                        scrollTop: targetOffset - navMenuHeight
                    }, 2000);
                } else {
                    animate();
                }
            } else if (scrollTop > targetOffset) {
                animate();
            }
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
                scrollTop: target.offset().top - 145
            }, 2000);
        });
    }
    scrollTo2();


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
    //************ hover icon/consol msg ***********
    //**********************************************

    function hover() {
        var img = $("#section1").find(".img-holder");

        img.on("mouseenter", function() {
            console.log("Inquisition is watching you...");
        });

    }
    hover();

    //**********************************************
    //**************** button/video ****************
    //**********************************************

    function video() {

        var button = $(".msg");

        button.on("click", function() {
            console.log("That is the way to hell...");
            //users of IE are using heretic browser so there is no video for them... there must be some punishement for that
            if ($(window).width() >= 770 && !navigator.userAgent.match(/Trident\/7\./)) {
                var body = $("body");
                var newDiv = document.createElement("div");
                $newDiv = $(newDiv);
                $newDiv.addClass("fullscreen");
                body.append(newDiv);

                var video = document.createElement("video");
                var source = document.createElement("source");

                $(video).css({"height": "auto"}).attr("controls", "controls").attr("autoplay", "autoplay");
                $(source).attr("src", "video/The_Exterminatus_of_Typhon_Primaris.mp4").attr("type", "video/mp4");

                video.append(source);
                $newDiv.append(video);

                var close = document.createElement("button");
                var $close = $(close);
                close.innerText = "X";
                $close.addClass("close");

                $newDiv.append($close);

                $close.on("click", function() {
                    $newDiv.parent().find($newDiv).remove();
                });
            }
        });
    }
    video();

    //**********************************************
    //*************** hero slider ******************
    //**********************************************

    //I am aware that this may contain little too much heresy but I wanted to create RWD slider on my own
    //maybe it is not perfect but I will figure it out... someday
    //in responsive view it looks ok, in browser window not so great in some small sizes... (match media/resize?)
    // if you resize window browser you have to refresh site and code will work as planned
    function heroSlider() {

        var prevButton = $(".prev");
        var nextButton = $(".next");
        var sliderContainer = $(".slider-container");
        var hero = sliderContainer.find(".hero-pic");

        hero.on("mouseenter", function() {
            console.log("Hope you are not heretic... Are you?");
        });

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

    //**********************************************
    //************** progress bars *****************
    //**********************************************
    function progressBars() {

        var firstBar = $(".accuracy");
        var secondBar = $(".speed");
        var thirdBar = $(".resilience");
        var forthBar = $(".fury");

        $(window).on("scroll", function() {

            var trigger = $(".trigger");
            var triggerTopPosition = trigger.offset().top - 300;
            var scrollTop = $(document).scrollTop();

            if (scrollTop > triggerTopPosition) {

                firstBar.animate({
                    "width": "97%"
                }, 2500);

                secondBar.animate({
                    "width": "70%"
                }, 2500);

                thirdBar.animate({
                    "width": "85%"
                }, 2500);

                forthBar.animate({
                    "width": "100%"
                }, 2500);
            }
        });
    }

    progressBars();

    //**********************************************
    //************ services counter ****************
    //**********************************************

    function count() {

        $(window).on("scroll", startCounter);

        function startCounter() {

            var scrollTop = $(document).scrollTop();
            var countOnScroll = $("#services-slider").offset().top - 700;
            var counter = $(".counter-item").find("p:first-child");

            if (scrollTop >= countOnScroll) {

                $(window).off("scroll", startCounter); //prevents from multiple starts/count on scroll

                counter.each(function() {
                    var $this = $(this);
                    $({
                        Counter: counter.text()
                    }).animate({
                        Counter: $this.data().count
                    }, {
                        duration: 2500,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
            }
        }
    }
    count();

    //**********************************************
    //************** motto slider ******************
    //**********************************************

    function mottoSlider() {

        var mottoSlider = $(".motto-slider");
        var ork = mottoSlider.find(".ork");
        var chaos = mottoSlider.find(".chaos");
        var sister = mottoSlider.find(".adepta");
        var guard = mottoSlider.find(".guard");
        var tyrant = mottoSlider.find(".tyranids");
        var necron = mottoSlider.find(".necrons");

        ork.on("mouseenter", function() {
            console.log("Zog off! ... Stoopid humies...");
        });

        chaos.on("mouseenter", function() {
            console.log("Don't provoke me!");
        });

        sister.on("mouseenter", function() {
            console.log("Show no mercy!");
        });

        guard.on("mouseenter", function() {
            console.log("Kasrkin squad ready for war... and you?");
        });

        tyrant.on("mouseenter", function() {
            console.log("Zergs you say? pfff (...). Xenomorph? I dated his mother.");
        });

        necron.on("mouseenter", function() {
            console.log("No, I am not related to Terminator franchise, and I don't know Skynet... (*sigh*)");
        });


        mottoSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnDotsHover: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    dots: false,
                }
            }]
        });
    }
    mottoSlider();

    //**********************************************
    //***************** gallery ********************
    //**********************************************

    function necron() {

        var gallery = $(".gallery");
        var lord = gallery.find(".necrons");

        lord.on("mouseenter", function() {
            console.log("Necron Lord: ... (*sigh*)... ultra boneheads...");
        });
    }
    necron();

    //**************** show image ******************
    function imageView() {

        var body = $("body");
        var img = $(".figure__image");

        img.on("click", function() {
            if ($(window).width() >= 770) {
                var imgAdress = this.getAttribute("src");

                var newDiv = document.createElement("div");
                $newDiv = $(newDiv);
                $newDiv.addClass("fullscreen");

                body.append($newDiv);

                var newImg = document.createElement("img");
                newImg.setAttribute("src", imgAdress);
                var $newImg = $(newImg);

                $newDiv.append($newImg);

                var close = document.createElement("button");
                var $close = $(close);
                close.innerText = "X";
                $close.addClass("close");

                $newDiv.append($close);

                $close.on("click", function() {
                    $newDiv.parent().find($newDiv).remove();
                });
            }
        });
    }
    imageView();

    //**************** sort image ******************

    function sort() {

        var imgs = $(".gallery__figure");
        var buttons = $(".button-wrapper__tags");

        buttons.on("click", function() {

            var buttonTag = this.dataset.tag;
            for (var i = 0; i < imgs.length; i++) {

                var imgTag = imgs[i].dataset.tag;
                var $img = $(imgs[i]);

                if (imgTag.indexOf(buttonTag) == -1) {
                    $img.fadeOut(1);
                } else {
                    $img.fadeIn(500);
                }
            }
        });
    }
    sort();

    function buttonAccess() {

        var galleryButton = $(".gallery-button");
        galleryButton.on("click", function() {
            console.log("Access denied");
        });
    }
    buttonAccess();
    //**********************************************
    //******************* form *********************
    //**********************************************

    function formVerification() {

        var form = $(".form");
        var name = $(".form__input--name");
        var email = $(".form__input--email");
        var msg = $(".form__textarea");
        var errorName = $(".errorName");
        var errorEmail = $(".errorEmail");
        var errorMsg = $(".errorMsg");

        form.on("submit", function(event) {

            var nameValue = name.val();
            var emailValue = email.val();
            var msgValue = msg.val();
            var validEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailValue);

            errorName.text("");
            errorEmail.text("");
            errorMsg.text("");

            if (nameValue.length < 4) {
                errorName.text("*Your name must be longer than 5 signs!");
                event.preventDefault();
                return;
            }

            if (!validEmail) {
                errorEmail.text("*Your email address is invalid! Try again!");
                event.preventDefault();
                return;
            }

            if (msgValue.length <= 10) {
                errorMsg.text("*Your message must be longer than 10 signs!");
                event.preventDefault();
                return;
            }

        });
    }
    formVerification();

});
