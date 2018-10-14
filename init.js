/*
 * Copyright (c) 2018 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	edrea_tm_hamburger();
	edrea_tm_imgtosvg();
	edrea_tm_magnific_popup();
	edrea_tm_jarallax();
	edrea_tm_portfolio();
	edrea_tm_nav_bg_scroll();
	edrea_tm_anchor();
	edrea_tm_contact_form();
	edrea_tm_owl_carousel();
	edrea_tm_text_animation();
	edrea_tm_animate_text();
	edrea_tm_projects();
	edrea_tm_miniboxes();
	edrea_tm_portfolio_image();
	edrea_tm_isotope();
	edrea_tm_totop();
	edrea_tm_totop_myhide();
	edrea_tm_animate_text();
	edrea_tm_popup_blog();
	edrea_tm_popupscroll();
	edrea_tm_footer_fixed();
	edrea_tm_about_animation();
	edrea_tm_kenburn_slider();
	edrea_tm_ripple();
	edrea_tm_audiobox();
	edrea_tm_audio_off();
	edrea_tm_popup_service();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		edrea_tm_nav_bg_scroll();
		edrea_tm_totop_myhide();
	});
	
	jQuery(window).on('resize',function(){
		edrea_tm_miniboxes();
		edrea_tm_isotope();
		edrea_tm_footer_fixed();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.edrea_tm_preloader').addClass('loaded');
    }, 1000);
		
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function edrea_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function edrea_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.edrea_tm_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function edrea_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function edrea_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function edrea_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.edrea_tm_portfolio_list');
		var filter		 = jQuery('.edrea_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function edrea_tm_projects() {
	
	"use strict";
	
	jQuery('.edrea_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.edrea_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.edrea_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.edrea_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.edrea_tm_portfolio_titles').removeClass('visible');
		});
//		dgf.addClass('fdg').removeClass('sde').parent().addClass('asd').children('.fdg').hide();
	});
}

function edrea_tm_portfolio_image(){
	
	"use strict";
	
	var list			= jQuery('.edrea_tm_portfolio_list > li');
	
	list.each(function(){
		
		var element				= jQuery(this);
		var div					= element.find('.edrea_tm_portfolio_image_main');
		var data				= div.data('url');
		
		div.css({backgroundImage: 'url('+data+')'});
	});
//	var dataBgImgs = jQuery('*[data-bg-img]');
//	dataBgImgs.each(function(){
//		var dataBgImg = jQuery(this);
//		var dataURL		= dataBgImg.data('bg-img');
//		dataBgImg.css({backgroundImage: 'url('+dataURL+')'});
//	});
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function edrea_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.edrea_tm_header');
	var headerH 		= header.outerHeight();
	var WH	 			= jQuery(window).height();
	var windowScroll	= jQuery(window).scrollTop();
	var W				= jQuery(window).width();
	
	if(W>1040){
		jQuery(window).scroll(function(){
            if(windowScroll >= WH-headerH){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
		if(windowScroll >= WH-headerH){
			header.addClass('scroll');
		}
		else{
			header.removeClass('scroll');  
		}
	} 
}

// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function edrea_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function edrea_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function edrea_tm_owl_carousel(){
	
	"use strict";
	
	var carousel			= jQuery('.edrea_tm_services_wrap .owl-carousel');
  	carousel.owlCarousel({
			loop: true,
			items: 3,
			lazyLoad: true,
			margin: 30,
			autoplay: false,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1200:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});
	
	jQuery('.edrea_tm_services_wrap .custom_nav > a.prev').on('click', function(){
		carousel.trigger('prev.owl.carousel');
		return false;
	});
	
	jQuery('.edrea_tm_services_wrap .custom_nav > a.next').on('click', function(){
		carousel.trigger('next.owl.carousel');
		return false;
	});
	edrea_tm_imgtosvg();
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ---------------    HERO TEXT ANIMATION  --------------
// -----------------------------------------------------

function edrea_tm_text_animation(){
	
	"use strict";
	
	var H        			= jQuery(window).height();
	var titleHolder			= jQuery('.edrea_tm_hero_title');
	var titleHolder2		= jQuery('.edrea_tm_hero_title_second');
	var titleHeight			= titleHolder.outerHeight();
	var titleHeight2		= titleHolder2.outerHeight();
	var headerHeight		= jQuery('.edrea_tm_header').outerHeight();
	
	var	height				= H/2 + titleHeight/2 - headerHeight;
	var	height2				= H/2 + titleHeight2/2 - headerHeight;
	
	jQuery(window).on('scroll',function(){
		var window_offset = jQuery(window).scrollTop();
		titleHolder.css({opacity:1 - (window_offset/height), marginTop:(window_offset/height)*200});
		titleHolder2.css({opacity:1 - (window_offset/height2), marginTop:(window_offset/height2)*200});
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.edrea_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.edrea_tm_bar_wrap');
		var pBar 			= progress.find('.edrea_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.edrea_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

 function edrea_tm_miniboxes(){
	 
  "use strict";
	 
  var el 			= jQuery('.edrea_tm_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    var child		= jQuery(element).find('.edrea_tm_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    var W 		= jQuery(window).width();
    if(W > 480){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function edrea_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function edrea_tm_totop(){
	
	"use strict";
	
	jQuery(".edrea_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function edrea_tm_totop_myhide(){
	
	"use strict";
	
	var toTop		=jQuery(".edrea_tm_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}
// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function edrea_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.edrea_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["Edrea Kennedy", "Web Developer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------

function edrea_tm_popup_blog(){
	"use strict";
	var li				= jQuery('.edrea_tm_list_wrap.blog_list .inner_list');
	var popupBox		= jQuery('#edrea_tm_popup_blog');
	var popupInner		= popupBox.find('.inner_popup');
	var closePopup		= popupBox.find('.close');
	
	li.each(function(){
		var element		= jQuery(this);
		var button		= element.find('.read_more a,.title_holder a,.link_news');
		var html		= element.html();
		var mainImage	= element.find('.news_image');
		var imgData		= mainImage.data('url');
		var title		= element.find('.title_holder h3');
		var titleHref	= element.find('.title_holder h3 a').html();
		
		mainImage.css({backgroundImage: 'url('+imgData+')'});
		button.on('click',function(){
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// ---------------  POPUP BLOG SCROLL ------------------
// -----------------------------------------------------

function edrea_tm_popupscroll(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.scrollable');
	var popupBox		= jQuery('.edrea_tm_popup_blog .inner_popup');
	
	popupBox.css({height:H-100});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH-100});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -----------------------------------------------------
// -------------    FIXED FOOTER -----------------------
// -----------------------------------------------------

function edrea_tm_footer_fixed(){
	
	"use strict";
	
	var content			= jQuery('.edrea_tm_content');
	var footer			= jQuery('.edrea_tm_footer_contact_wrapper_all').outerHeight();
	var WW				= jQuery(window).width();
	
	if(WW>768){
		content.css({marginBottom:footer});
	}
	else{
		content.css({marginBottom:0});
	}
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function edrea_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function edrea_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.edrea_tm_hero_header .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/hero/1.jpg' },
				{ src: 'img/hero/2.jpg' },
				{ src: 'img/hero/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -----------------  RIPPLE  ----------------------
// -------------------------------------------------

function edrea_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -----------------------------------------------------
// -----------------    AUDIOBOX    --------------------
// -----------------------------------------------------
function edrea_tm_audiobox(){
	
	 "use strict";

	 var curPlaying; 
	 var speaker			= jQuery('.edrea_tm_audio_icon a'); 
	 
	 speaker.on('click',function(e) {

		e.preventDefault();
		 if(!speaker.hasClass('paused')){
			 speaker.addClass('paused');
		 }else{
			 speaker.removeClass('paused');
		 }
		var song 		= jQuery('audio')[0];

		if(song.paused){
			song.play();
			if(curPlaying) {jQuery("audio", "#"+curPlaying)[0].pause();}
		} 
		else {song.pause();}
		curPlaying 		= jQuery(this).parent()[0].id;
		 
	});
 }

function edrea_tm_audio_off(){
	
	"use strict";
	
	var element			= jQuery('.edrea_tm_wrapper_all');
	var dataAudio		= element.data('audio');
	var audioBox		= jQuery('.edrea_tm_audio_wrap');
	
	if(dataAudio !== 'off'){
		audioBox.find('audio').attr('autoplay','');
	}
	
}

// -----------------------------------------------------
// -----------------    POPUP SERVICE    ---------------
// -----------------------------------------------------

function edrea_tm_popup_service(){
	
	"use strict";
	
	var list				= jQuery('.edrea_tm_services_wrap ul li');
	var popupBox			= jQuery('#edrea_tm_popup_service');
	var popupContent		= jQuery('#edrea_tm_popup_service .inner_popup');
	var closeButton 		= jQuery('#edrea_tm_popup_service .close a');
	
	list.each(function(){
		
		var element			= jQuery(this);
		var button			= element.find('.link_service');
		var html			= element.find('.texts_wrap').html();
		
		button.on('click',function(){
			
			popupBox.addClass('opened');
			popupContent.html(html);
			return false;
		});
		
	});
	
	closeButton.on('click',function(){
		popupBox.removeClass('opened');
		popupContent.html('');
		return false;
	});
}

