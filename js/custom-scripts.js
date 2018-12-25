/*-------------------------------------------------------------------*/
/* Project: Move Fast - Relocation and Moving Service HTML5 Template */
/* Ver: 1.0.2*/
/* Date: 17-07-2018*/
/* Author: xenioushk*/
/*-------------------------------------------------------------------*/
jQuery(function ($) {
    "use strict";
    
    // DETECT TOUCH DEVICE
    function is_touch_device() {
        return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
    }
    
    // ANIMATIONS //
     function animations() {
        animations = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 120,
            mobile: false,
            live: true
        });
        animations.init();
    }
    
    // ONE PAGE SMOOTH SCROLLING 
    function smooth_scrolling() {
        $(".nav_menu").on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                var offset = $('.header-wrapper').outerHeight();
                if ($('.stuck').length === 1) {
                    offset = $('.stuck').outerHeight();
                } else {
                    offset = parseInt(offset, 0) + 24;
                }
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - parseInt(offset, 0)
                    }, 1300);
                    return false;
                }
            }
        });
    }
    
    // PARALLAX
    if (typeof $.fn.stellar !== 'undefined') {
        if (!is_touch_device()) {
            $(window).stellar({
                horizontalScrolling: false,
                verticalScrolling: true,
                responsive: true,
                verticalOffset: 50
            });
        }
    }
    
    
    // CUSTOM BACKGROUND.
    
    if ($(".section-custom-bg").length) {

        $(".section-custom-bg").each(function () {

            var $this = $(this);

            var bg_img = "images/home_1_slider_1.jpg",
                    bg_color = "#000000",
                    bg_opacity = "0.5",
                    bg_color_2 = "#000000",
                    bg_opacity_2 = "0.8",
                    bg_position = "center center",
                    bg_repeat = "no-repeat",
                    bg_size = "cover";

                    

            if ($this.is('[data-bg_img]')) {
                bg_img = ', url("' + $this.data('bg_img') + '")';
            } else {
                bg_img = ', url("' + bg_img + '")';
            }

            if ($this.is('[data-bg_color]')) {
                bg_color = $this.data('bg_color');
            }

            if ($this.is('[data-bg_opacity]')) {
                bg_opacity = $this.data('bg_opacity');
            }

            var $color_overlay = hexToRgbA(bg_color, bg_opacity);

            $color_overlay_2 = $color_overlay;

            if ($this.is('[data-gardient]') && $this.data('gardient') == true) {


                if ($this.is('[data-bg_color_2]')) {
                    bg_color_2 = $this.data('bg_color_2');
                }

                if ($this.is('[data-bg_opacity_2]')) {
                    bg_opacity_2 = $this.data('bg_opacity_2');
                }

                var $color_overlay_2 = hexToRgbA(bg_color_2, bg_opacity_2);

            }

            $this.attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay_2 + " )" + bg_img + "; background-position: center center; background-repeat: repeat; background-attachment: inherit; background-size: cover; overflow:hidden;");

            

        });

    }
    
    // BANNER.
    
    if ($(".section-banner").length) {
        // BG & Color Settings.
        $(".section-banner").each(function () {
            var $this = $(this);
            var bg_img = "",
                    bg_color = "#000000",
                    bg_opacity = "0.5";
            if ($this.is('[data-bg_img]')) {
                bg_img = ', url("' + $this.data('bg_img') + '")';
            }
            if ($this.is('[data-bg_color]')) {
                bg_color = $this.data('bg_color');
            }
            if ($this.is('[data-bg_opacity]')) {
                bg_opacity = $this.data('bg_opacity');
            }
            var $color_overlay = hexToRgbA(bg_color, bg_opacity);
            $this.attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay + " )" + bg_img + "; background-position: center center; background-repeat: no-repeat; background-attachment: inherit; background-size: cover; overflow:hidden;");
        });
        
    }
    
    
    // SLIDER 1
    function slider_resize() {
        if ($(window).width() > 991) {
             $(".slider-content").first().attr("style", "margin-top: 0px;");
        } else {
            $(".slider-content").first().attr("style", "margin-top: 0px;");
        }
    }
    
    function hexToRgbA(hex, opacity) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
        } else {
            return 'rgba("0,0,0,' + opacity + '")';
        }
    }
    
    // add animate.css class(es) to the elements to be animated
    function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        _elem.each(function () {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
            $elem.addClass($animationType).one(animationEndEvent, function () {
                $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
            });
        });
    }
    

    
    if($('.slider-wrap')) {
        
        var $this = $('.slider-wrap');
        
        if ($this.is('[data-bg_img]')) {
            
            var bg_img = 'url("' + $this.data('bg_img') + '")';
            $this.css({
                'background-image': bg_img,
                'background-repeat': 'repeat',
                'background-position': 'center center',
                'background-size': 'cover'
            });
            
        }
        
    }
    
    if ($("#slider_1").length) {
        
        // BG & Color Settings.
        $("#slider_1").find('.slider_item_container').each(function () {
            var $this = $(this);
            var bg_img = "",
                    bg_color = "#000000",
                    bg_opacity = "0.1";
            if ($this.is('[data-bg_img]')) {
                bg_img = ', url("' + $this.data('bg_img') + '")';
            }
            if ($this.is('[data-bg_color]')) {
                bg_color = $this.data('bg_color');
            }
            if ($this.is('[data-bg_opacity]')) {
                bg_opacity = $this.data('bg_opacity');
            }
            var $color_overlay = hexToRgbA(bg_color, bg_opacity);
            
            $this.find('.item').before('<div class="slide-bg"></div>');
            
            $this.find('.slide-bg').attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay + " )" + bg_img + "; background-position: center center; background-repeat: no-repeat; background-attachment: inherit; background-size: cover; overflow:hidden;");
            
        });
        
        slider_resize();
        
        $(window).on("resize", function () {
            if ($(window).width() > 767) {
                slider_resize();
            } else {
                $(".slider-content").removeAttr("style");
            }
        });
        
        // Carousel.
        
        var $slider_1 = $("#slider_1");
        
        var $this = $slider_1;
        
        var items_val = 1,
                bg_effect_val = true,
                nav_val = false,
                dots_val = true,
                autoplay_val = true,
                autoplaytimeout_val = 10000;
        // Status.
        if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
            $this.removeClass('owl-carousel');
            return '';
        }
        
        // Status.
        if ($this.attr('data-bg_effect') && !isNaN($this.data('bg_effect'))) {
            bg_effect_val = $this.data('bg_effect');
        }
        // navigation status.
        if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
            nav_val = $this.data('nav');
        }

        // navigation status.
        if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
            dots_val = $this.data('dots');
        }
        // Autoplay status.
        if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
            autoplay_val = $this.data('autoplay');
        }
        // Autoplay status.
        if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
            autoplaytimeout_val = $this.data('autoplaytimeout');
        }
        
        $slider_1.owlCarousel({
            callbacks: true,
            margin:0,
            items: items_val,
            loop: true,
            autoplay: autoplay_val,
            autoplayTimeout: autoplaytimeout_val,
            autoplayHoverPause: false,
            dots: dots_val,
            nav: nav_val,
            responsive: {
                0: {
                    items: items_val,
                    nav: false,
                    loop: true,
                    dots: false
                },
                600: {
                    items: items_val,
                    nav: false,
                    loop: true,
                    dots: false
                },
                1000: {
                    items: items_val
                }
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        
        
        
        
        var $slider_animation = $slider_1;
        
         
        
        // Fired before current slide change
        $slider_animation.on('change.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', $slider_animation).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation($elemsToanim, 'out');
        });
        
     
        // Fired after current slide has been changed

        $slider_animation.on('changed.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', $slider_animation).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-in]");
            setAnimation($elemsToanim, 'in');
      
        });
        
        
        
        if( bg_effect_val === true ) {
           
            $slider_animation.on('translated.owl.carousel',function(e){
               $(".active .slide-bg").addClass("slidezoom");
           }); 

           $slider_animation.on('translate.owl.carousel',function(e){
               $(".active .slide-bg").removeClass("slidezoom");
           });
        
        }
        
        
    }
    
    // STICKY HEADER & MENU

    if ($(".main-header").attr('data-sticky_header')) {

        $('.main-header .navbar-default').waypoint('sticky', {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: 'stuck'
        });

    }
    
    // GALLERY.
    
    if ( $('.gallery-light-box').length ) {
            
        $('.gallery-light-box').venobox();
        
    }
    
    // SERVICE CAROUSEL
      if ($(".service-carousel").length) {
        var $team_carousel = $('.service-carousel');
        $team_carousel.each(function () {
            var $this = $(this);
            
            var items_val = 3,
                    nav_val = false,
                    dots_val = true,
                    autoplay_val = true,
                    autoplaytimeout_val = 5000;
            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                
                $this.removeClass('owl-carousel');
                return '';
            }
            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }
            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }
            
            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }
            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }
            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }
            
            $this.owlCarousel({
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
    } 
    
     // GALLERY CAROUSEL   
    
    if ($(".gallery-carousel").length ) {
        
        var $gallery_carousel = $('.gallery-carousel');
        
        $gallery_carousel.each(function () {
            var $this = $(this);
            
            var items_val = 5,
                    nav_val = false,
                    dots_val = true,
                    autoplay_val = true,
                    autoplaytimeout_val = 5000;
            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                
                $this.removeClass('owl-carousel');
                return '';
            }
            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }
            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }
            
            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }
            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }
            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }
            
            $this.owlCarousel({
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
        
    }
    
    // COUNTER
    if ($(".counter").length ) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }
    
    //CLIENTS LOGOS 
    if ($(".logo-items").length ) {
        
        var $logo_items = $('.logo-items');
        
        $logo_items.each(function () {
            var $this = $(this);
            
            var items_val = 5,
                    nav_val = false,
                    dots_val = true,
                    autoplay_val = true,
                    autoplaytimeout_val = 5000;
            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                
                $this.removeClass('owl-carousel');
                return '';
            }
            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }
            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }
            
            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }
            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }
            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }
            
            $this.owlCarousel({
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: false
                    },
                    600: {
                        items: 3,
                        nav: false,
                        dots: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
        
    }
    // TESTIMONIAL CAROUSEL.
    if ($(".testimonial-container").length) {
        var $testimonial_container = $('.testimonial-container');
        $testimonial_container.each(function () {
            var $this = $(this);
            
            var items_val = 2,
                    nav_val = false,
                    dots_val = true,
                    autoplay_val = true,
                    autoplaytimeout_val = 5000;
            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                
                $this.removeClass('owl-carousel');
                return '';
            }
            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }
            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }
            
            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }
            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }
            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }
            
            $this.owlCarousel({
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
    } 
    
    // TEAM CAROUSEL.
    if ($(".team-carousel").length) {
        var $team_carousel = $('.team-carousel');
        $team_carousel.each(function () {
            var $this = $(this);
            
            var items_val = 3,
                    nav_val = false,
                    dots_val = true,
                    autoplay_val = true,
                    autoplaytimeout_val = 5000;
            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                
                $this.removeClass('owl-carousel');
                return '';
            }
            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }
            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }
            
            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }
            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }
            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }
            
            $this.owlCarousel({
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
    } 
    
    //LATEST NEWS
      if ($("#latest_news").length) {
        $("#latest_news").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true
                }
            },
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }   
    
    // GOOGLE MAP FOR CONTACT & EVENT PAGE.
    if ($('#map_canvas').length) {
        var map;
        $('#map_canvas').css({
            'height': '400px'
        });
        map = new GMaps({
            div: '#map_canvas',
            lat: 21.0275906,
            lng: 105.7515594
        });
    }
    
    // VENOBOX VIDEO.
    
       $(document).ready(function(){
            $('.venobox').venobox();   
        });  
    

    // COUNTDOWN.
    
    if( $('#coming_countdown').length > 0 ) {
    
        $('#coming_countdown').countdown('2020/10/10', function (event) {
            var $this = $(this).html(event.strftime(''
                    + '<div class="countdown_container"><span class="count_number">%d</span><span class="count_text">Days</span></div>'
                    + '<div class="countdown_container"><span class="count_number">%H</span><span class="count_text">Hours</span></div>'
                    + '<div class="countdown_container"><span class="count_number">%M</span><span class="count_text">Miniutes</span></div>'
                    + '<div class="countdown_container"><span class="count_number">%S</span><span class="count_text">Seconds</span></div>'));
        });
    }      
    
    
    // CONTACT FORM 
    
    function email_checkRegexp( o, regexp ) {
        if (!(regexp.test(o.val()))) {
            return false;
        } else {
            return true;
        }
    }
        
    
    if($('#contact-form').length) {
 
        var $contact_form = $("#contact-form");
        
        var $contact_submit_btn = $contact_form.find("button.btn-custom");
        var $user_name = $contact_form.find("#user_name");
        var $user_email = $contact_form.find("#user_email");
        var $email_subject = $contact_form.find("#email_subject");
        var $email_message = $contact_form.find("#email_message");
        
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        var $all_fields = $([]).add($user_name).add($user_email).add($email_subject).add($email_message);
        
        
        $all_fields.val("");
        
        var $error_border =  "border-bottom: 1px solid red;";
        var contact_form_bValid, user_name_bValid,user_email_bValid,user_email_subject_bValid, user_email_message_bValid;
        
        
        $contact_form.find("button[type=submit]").on("click", function() {
            
                contact_form_bValid = true;
            
                if( $user_name.val() === "" ) {
                    
                    user_name_bValid = false;
                    $user_name.next("span").remove();
                    $user_name.attr("style", $error_border).after("<span class='error'>" + $user_name.attr("data-msg") + "</span>");
                    
                } else {
                    user_name_bValid = true;
                    $user_name.removeAttr("style").next("span").remove();
                    
                }
                
                 contact_form_bValid = contact_form_bValid && user_name_bValid;
            
            
                if( $user_email.val() === ""  || email_checkRegexp( $user_email , emailRegex) == false  ) {
                    
                    user_email_bValid = false;
                    $user_email.next("span").remove();
                    $user_email.attr("style", $error_border).after("<span class='error'>" + $user_email.attr("data-msg") + "</span>");
                    
                } else {
                     user_email_bValid = true;
                    $user_email.removeAttr("style").next("span").remove();
                    
                }
                
                contact_form_bValid = contact_form_bValid && user_email_bValid;
                
                
                if( $email_subject.val() === "" ) {
                    
                    user_email_subject_bValid = false;
                    $email_subject.next("span").remove();
                    $email_subject.attr("style", $error_border).after("<span class='error'>" + $email_subject.attr("data-msg") + "</span>");
                    
                } else {
                    user_email_subject_bValid = true;
                    $email_subject.removeAttr("style").next("span").remove();
                }
                
                contact_form_bValid = contact_form_bValid && user_email_subject_bValid;
                
                if( $email_message.val() === "" ) {
                    
                    user_email_message_bValid = false;
                    $email_message.next("span").remove();
                    $email_message.attr("style", $error_border).after("<span class='error'>" + $email_message.attr("data-msg") + "</span>");
                    
                } else {
                    user_email_message_bValid = true;
                    $email_message.removeAttr("style").next("span").remove();
                    
                }
                
                contact_form_bValid = contact_form_bValid && user_email_message_bValid;
            
                if ( contact_form_bValid === true ) {
                    
                    $all_fields.attr("disabled", "disabled");
                    $contact_submit_btn.after("<span class='form_msg'>Please wait ....</span>").attr("disabled","disabled");
                    
                    $.ajax({
                    url: "contact_email.php",
                    type: 'POST',
                    dataType: 'JSON',
                    data: {
                        safety_key: 'dynatf',
                        user_name: $user_name.val(),
                        user_email: $user_email.val(),
                        email_subject: $email_subject.val(),
                        email_message: $email_message.val()
                    },
                    success: function (data) {
                        if ( data.status === 1) {
                            
                            $contact_submit_btn.next("span").remove();
                            $contact_submit_btn.after("<span class='form_msg'>" + data.msg + "</span>");
                            
                            setTimeout(function(){
                            
                                $all_fields.removeAttr("disabled").val("");
                                
                                $contact_submit_btn.next("span").slideUp('slow',function(){
                                    $(this).remove();
                                    $contact_submit_btn.removeAttr("disabled");
                                });
                                
                            },3000)
                        } else {
                            
                            $all_fields.removeAttr("disabled");
                            
                        }
                    },
                    error: function (xhr, textStatus, e) {
                        alert("Email can not be sent. Please try again.");
                        return;
                    }
                });
                    
                    
                }
            
            return false;
            
        })
        
    }
    
    
    // Appointment Form.
    
    if($('.appoinment-form').length) {
        
 
        var $appt_form = $(".appoinment-form");
        
        var $appt_submit_btn = $appt_form.find("button.btn");
        
        var $move_from = $appt_form.find("#move_from");
        var $move_to = $appt_form.find("#move_to");
        var $moving_size = $appt_form.find("#moving_size");
        var $your_date = $appt_form.find("#your_date");
        
        var $your_name = $appt_form.find("#your_name");
        var $your_email = $appt_form.find("#your_email");
        var $your_phone = $appt_form.find("#your_phone");
        var $your_comment = $appt_form.find("#your_comment");
        
        
        // $your_date.dcalendarpicker({
            // // default: mm/dd/yyyy
            // format: 'dd-mm-yyyy'
        // });
		
		$your_date.datetimepicker();
        
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        var $all_fields = $([]).add($move_from).add($move_to).add($moving_size).add($your_date).add($your_name).add($your_email).add($your_phone);
        
        
        $all_fields.val("");
        
        var $error_border =  "border-bottom: 1px solid red;";
        var appt_form_bValid, 
              move_from_bValid,
              move_to_bValid,
              moving_size_bValid,
              your_date_bValid,
              your_name_bValid,
              your_email_bValid,
              your_phone_bValid;
       
                
        
        
        $appt_form.find("button[type=submit]").on("click", function() {
            
                appt_form_bValid = true;
                // Move From Validation.
            
                if( $move_from.val() === "" && $move_from.is('[required]') ) {
                    
                    move_from_bValid = false;
                    $move_from.next("span").remove();
                    $move_from.attr("style", $error_border).after("<span class='error'>" + $move_from.attr("data-msg") + "</span>");
                    
                } else {
                    move_from_bValid = true;
                    $move_from.removeAttr("style").next("span").remove();
                    
                }
                
                 appt_form_bValid = appt_form_bValid && move_from_bValid;
                 
                // Move To Validation.
            
                if( $move_to.val() === ""  && $move_to.is('[required]') ) {
                    
                    move_to_bValid = false;
                    $move_to.next("span").remove();
                    $move_to.attr("style", $error_border).after("<span class='error'>" + $move_to.attr("data-msg") + "</span>");
                    
                } else {
                    move_to_bValid = true;
                    $move_to.removeAttr("style").next("span").remove();
                    
                }
                
                 appt_form_bValid = appt_form_bValid && move_to_bValid;
                 
                 // Move Size Validation.
            
                if( $moving_size.val() === "" && $moving_size.is('[required]') ) {
                    
                    moving_size_bValid = false;
                    $moving_size.next("span").remove();
                    $moving_size.attr("style", $error_border).after("<span class='error'>" + $moving_size.attr("data-msg") + "</span>");
                    
                } else {
                    moving_size_bValid = true;
                    $moving_size.removeAttr("style").next("span").remove();
                    
                }
                
                 appt_form_bValid = appt_form_bValid && moving_size_bValid;
                 
                 // Your Date Validation.
            
                if( $your_date.val() === "" && $your_date.is('[required]') ) {
                    
                    your_date_bValid = false;
                    $your_date.next("span").remove();
                    $your_date.attr("style", $error_border).after("<span class='error'>" + $your_date.attr("data-msg") + "</span>");
                    
                } else {
                    your_date_bValid = true;
                    $your_date.removeAttr("style").next("span").remove();
                    
                }
                
                 appt_form_bValid = appt_form_bValid && your_date_bValid; 
                 
                
                // Name Validation.
            
                if( $your_name.val() === "" && $your_name.is('[required]') ) {
                    
                    your_name_bValid = false;
                    $your_name.next("span").remove();
                    $your_name.attr("style", $error_border).after("<span class='error'>" + $your_name.attr("data-msg") + "</span>");
                    
                } else {
                    your_name_bValid = true;
                    $your_name.removeAttr("style").next("span").remove();
                    
                }
                
                 appt_form_bValid = appt_form_bValid && your_name_bValid;
            
            
               // Email Validation.  
            
                if( $your_email.val() === ""  || email_checkRegexp( $your_email , emailRegex) == false  ) {
                    
                    your_email_bValid = false;
                    $your_email.next("span").remove();
                    $your_email.attr("style", $error_border).after("<span class='error'>" + $your_email.attr("data-msg") + "</span>");
                    
                } else {
                     your_email_bValid = true;
                    $your_email.removeAttr("style").next("span").remove();
                    
                }
                
                appt_form_bValid = appt_form_bValid && your_email_bValid;
                
                // Phone No Validation.
                
                if( $your_phone.val() === "" && $your_phone.is('[required]') ) {
                    
                    your_phone_bValid = false;
                    $your_phone.next("span").remove();
                    $your_phone.attr("style", $error_border).after("<span class='error'>" + $your_phone.attr("data-msg") + "</span>");
                    
                } else {
                    your_phone_bValid = true;
                    $your_phone.removeAttr("style").next("span").remove();
                }
                
                appt_form_bValid = appt_form_bValid && your_phone_bValid;
            
                if ( appt_form_bValid === true ) {
                    
                    $all_fields.attr("disabled", "disabled");
                    $appt_submit_btn.after("<span class='form_msg'>Please wait ....</span>").attr("disabled","disabled");
                    
                    $.ajax({
                    url: "free_quote_email.php",
                    type: 'POST',
                    dataType: 'JSON',
                    data: {
                        safety_key: 'dynatf',
                        move_from: $move_from.val(),
                        move_to: $move_to.val(),
                        moving_size: $moving_size.val(),
                        your_date: $your_date.val(),
                        your_name: $your_name.val(),
                        your_email: $your_email.val(),
                        your_phone: $your_phone.val(),
                        your_comment: $your_comment.val()
                    },
                    success: function (data) {
                        if ( data.status === 1) {
                            
                            $appt_submit_btn.next("span").remove();
                            $appt_submit_btn.after("<span class='form_msg'>" + data.msg + "</span>");
                            
                            setTimeout(function(){
                            
                                $all_fields.removeAttr("disabled").val("");
                                
                                $appt_submit_btn.next("span").slideUp('slow',function(){
                                    $(this).remove();
                                    $appt_submit_btn.removeAttr("disabled");
                                });
                                
                            },3000)
                        } else {
                            
                            $all_fields.removeAttr("disabled");
                            
                        }
                    },
                    error: function (xhr, textStatus, e) {
                        alert("Email can not be sent. Please try again.");
                        return;
                    }
                });
                    
                    
                }
            
            return false;
            
        })
        
    }
    
    
    //WoW Animation.
    animations();
    //One Page Scrolling.
    smooth_scrolling();
    // BACK TO TOP BUTTON.
    if ($('#backTop').length === 1) {
        $('#backTop').backTop({
            'theme': 'custom'
        });
        
    }
    // PRELOADER
    $(window).on("load", function () {
        $("#preloader").fadeOut(500);
    });
});