$(document).ready(function() {

	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
	//menu toggle
	$('[data-toggle=offcanvas]').click(function() {
		var parsedCssValue = parseInt($('.row-offcanvas').css('right')); //returns 20
		if(parsedCssValue=="300"){
			$('.row-offcanvas').toggleClass('active').animate({"right":"0px"}, "slow");;
		}else{
			$('.row-offcanvas').toggleClass('active').animate({"right":"300px"}, "slow");;
		}
	});
	//banner
	/*
	$('.banner,.carousel .item').height((viewport_height));
	$(window).resize(function() {
	  var viewport_width = window.innerWidth;
	  var viewport_height = window.innerHeight;
		$('.banner,.carousel .item').height((viewport_height));
	});	*/
	//animate scroll down icon
	reanimate();
	function reanimate(){
		$('.scroll_down').animate({bottom:40},1000).animate({bottom:55},1000, function(){
			setTimeout(reanimate, 200);
		});
	}
	//menu scroll links
	$('.sidebar-offcanvas a[href*=#]:not([href=#]),.scroll_down a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[class=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
	});

	$('.navigation a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('section.' + this.hash.slice(1) );
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 110
			}, 1350);
			return false;
		  }
		}
	});

	$('section').waypoint(function(direction) {
		  var target = $(this).attr("data-id");
		  $(".navigation li a.active").removeClass();
		  $(".navigation li a[href='#"+target+"']").addClass("active");
	}, { offset: 220 });

    /* Backstrech logic */
    $(".js-backstrech").each(function() {
         $(this).backstretch($(this).attr("data-image"));
    })


		$(function(){
				var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var dayOfWeekIndex = (new Date()).getDay();
				var dayOfWeek = weekdays[dayOfWeekIndex];
				var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());
				var dayOfWeekPast;
				var hourOfDay = new Date().getHours();
				var timeOfDay;
				// choose day of week other than current one
				if (dayOfWeekPastIndex == dayOfWeekIndex) {
					dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
				} else {
					dayOfWeekPast = weekdays[dayOfWeekPastIndex];
				}
				// assign time of day to the hour
				if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
					timeOfDay = "morning";
				} else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
					timeOfDay = "afternoon";
				} else {
					timeOfDay = "evening";
				}

	//typed1 script init



        $("#typed").typed({
            strings: ["Hi There!", "I hope your enjoying your",  dayOfWeek + " " +  timeOfDay, "I specialize in", "Web Development,", "Consulting,", "And other things", "Like making <i class='fa fa-coffee'></i>", "Thanks for dropping by!", "Scroll down to learn more."],
            typeSpeed: 10,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });



		//typed2 script init




	        $("#typed2").typed({
	            strings: ["HI!", "So", "You want to  get in touch.", "That is pretty easy", "Just fill out the form below,", "and I will get back to you soon", "Hasta la vista!"],
	            typeSpeed: 10,
	            backDelay: 500,
	            loop: false,
	            contentType: 'html', // or text
	            // defaults to false for infinite loop
	            loopCount: false,
	            callback: function(){ foo(); },
	            resetCallback: function() { newTyped(); }
	        });

	        $(".reset").click(function(){
	            $("#typed").typed('reset');
	        });



			//typed3 script init




		        $("#typed3").typed({
		            strings: ["HI!", "So", "You are probably wondering", "If I received your message", "Well I didn't,", "I am just a Web Browser", "But, it is on it's way to Nathan", "In fact", "As we speak", "It is traveling trough the ether", "I could tell you all about packets", "But that would probably bore you", "Oh, I know!", "Do you like jokes", "Of course you do", "Everyone likes jokes", "Well, I have a good one.", "How may developers does it take to change a lightbulb?", "...", "You figure it out yet?", "No?", "None, thats a hardware problem.", "LOL", "Why are you not laughing?", "You know I can see you through your webcam right?", "LOL", "Just kidding that would be creepy.", "but seriously?", "You have to have better things to do", "If you click the green square on the right", "You can visit other parts of this site", "I would suggest reading Nathan's blog", "Don't tell him I told you", "But that guy is kind of weird", "So it is worth checking out for a good laugh", "Anyway", "I have Web Browser stuff to do", "There are some sad Javascript bugs that I have to console", "Get it?", "Alright I give up", "Zài Lián Xì", "That is Mandarin for Let's stay in touch", "Bye Bye"],
		            typeSpeed: 8,
		            backDelay: 500,
		            loop: false,
		            contentType: 'html', // or text
		            // defaults to false for infinite loop
		            loopCount: false,
		            callback: function(){ foo(); },
		            resetCallback: function() { newTyped(); }
		        });

		        $(".reset").click(function(){
		            $("#typed").typed('reset');
		        });





				//typed4 script init


			        $("#typed4").typed({
			            strings: ["Hi There!", "This is a place where I share", "My thoughts", "Somtimes they are pretty good", "Other times I just rant", "Anyway", "Find an article you like and dig in", "Still, there are probably better things to do", "On a " + dayOfWeek + " " +  timeOfDay],
			            typeSpeed: 10,
			            backDelay: 500,
			            loop: false,
			            contentType: 'html', // or text
			            // defaults to false for infinite loop
			            loopCount: false,
			            callback: function(){ foo(); },
			            resetCallback: function() { newTyped(); }
			        });

			        $(".reset").click(function(){
			            $("#typed").typed('reset');
			        });



					//typed5 script init




				        $("#typed5").typed({
				            strings: ["Great Choice!", "Don't forget to leave a comment", "Enjoy!"],
				            typeSpeed: 10,
				            backDelay: 500,
				            loop: false,
				            contentType: 'html', // or text
				            // defaults to false for infinite loop
				            loopCount: false,
				            callback: function(){ foo(); },
				            resetCallback: function() { newTyped(); }
				        });

				        $(".reset").click(function(){
				            $("#typed").typed('reset');
				        });

					//typed6 script init

							        $("#typed6").typed({
							            strings: ["Uh Oh!", "I came here before and it was packed", "But", "Not much going on a " + dayOfWeek + " " +  timeOfDay, "Maybe, you can use the menu to the right", "to visit somewhere else", "Sorry <i class='fa fa-meh-o'></i>"],
							            typeSpeed: 10,
							            backDelay: 500,
							            loop: false,
							            contentType: 'html', // or text
							            // defaults to false for infinite loop
							            loopCount: false,
							            callback: function(){ foo(); },
							            resetCallback: function() { newTyped(); }
							        });

							        $(".reset").click(function(){
							            $("#typed").typed('reset');
							        });


				    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("I am guessing you know what you are doing if you are reading this. I am always looking to learn and hear constructive feedback on my work. Drop me a line at nathanshumate0@gmail.com if you have any suggestions, or just want to nerd it out and talk about code."); }

	//stick menu to top
     $(function() {
            var offset = $(".list-group-holder").offset();
            var topPadding = 15;
            $(window).scroll(function(obj) {

            	var current_position = $(this).scrollTop();
            	if($(".list-group-holder").length > 0) {
	                if (current_position > offset.top) {
	                    $(".list-group-holder").stop().animate({
	                        marginTop: current_position - offset.top + topPadding
	                    });
	                } else {
	                    $(".list-group-holder").stop().animate({
	                        marginTop: 0
	                    });
	                };
           		 }
                if (current_position > $(".banner").height()) {
                    $(".navigation-holder").addClass("fixed");
                    $(".banner").css({
                    	"margin-bottom": $(".navigation-holder").height()+"px"
                    });
                } else {
                    $(".navigation-holder").removeClass("fixed");
                    $(".banner").css({
                    	"margin-bottom": "0px"
                    });
                };

            });
        });
	/* waypoints
	--------------------------*/
	//chart
	$('.chart').waypoint(function(event, direction) {
		$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			barColor:'#545ec4',
			trackColor:'#ccc',
            scaleColor:false,
            lineWidth:2,
			size:191,
            lineCap:'circle',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	},{
	  triggerOnce: true,
	  offset: 'bottom-in-view'
	});
	//parallax bg image scroll
	$('.whatwedo .digitalsolutions').parallax("45%", 0.02);
	$('.whatwedo .digitalsolutions .bg2').parallax("50%", 0.03);
	//tabs
	$('.workprocess a:first').tab('show');
	$('.features a:first').tab('show');
	$('.happycustomers .nav-tabs a:first').tab('show');
	// auto tabs
	var tabChange = function(){
		var tabs = $('.happycustomers .nav-tabs > li');
		var active = tabs.filter('.active');
		var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
		// Use the Bootsrap tab show method
		next.tab('show')
	}
	$('#rootwizard').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});
	$('#rootwizard1').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});
	$('#rootwizard2').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});
	var tabCycle = setInterval(tabChange, 5000)
	$(this).find('.happycustomers .nav-tabs a').click(function(e) {
		e.preventDefault();
		clearInterval(tabCycle);
		$(this).tab('show')
	});
	//recent design work
	var owl = $("#rdw");
	owl.owlCarousel({
		autoPlay: false, //Set AutoPlay to 3 seconds
		stopOnHover:true,
		items : 6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [979,6],
		pagination: false
	});
	// Custom Navigation Events
	$(".carouseltop .right").click(function(){
		owl.trigger('owl.next');
	});
	$(".carouseltop .left").click(function(){
		owl.trigger('owl.prev');
	});
	//image overlay
	$('.item').hover(function() {
		//Display the caption
		$(this).find('div.owlcaption').stop(false,true).fadeIn(200);
	},
	function() {
		//Hide the caption
		$(this).find('div.owlcaption').stop(false,true).fadeOut(200);
	});
	//show hide form on mail button click
	$('#mailbtn').on('click', function(){
		if ($('#mailbtn').hasClass('active')) {
			$( "#mailbtn" ).removeClass( "active" );
		}else{
        	$( "#mailbtn" ).addClass( "active" );
		}
		$(".bigpage").slideToggle(function() {
		    /* Backstrech logic */
		    $(".js-backstrech").each(function() {
		         $(this).backstretch($(this).attr("data-image"));
		    })
		});

		return false;
	});

	/* Stellar */
	$.stellar();

   /* Portfolio */
	  if ($.fn.mixitup) {
	      $('#grid').mixitup( {
	        filterSelector: '.filter-item'
	      } );
	      $(".filter-item").click(function(e) {
	      	e.preventDefault();
	      })
	  }

  /* Portfolio items */
  $(".portfolio-item").click( function() {
  	var item_number = $(this).attr("data-portfolio-name");
	$.get( "portfolio_item_"+item_number+".html", function( data ) {
		$( ".js-portfolio-data" ).slideUp( 1200, function() {
			$( ".js-portfolio-data" ).html( data ).slideDown("slow", function() {
				  $("#owl-portfolio").owlCarousel({

				      navigation : false, // Show next and prev buttons
				      slideSpeed : 1700,
				      paginationSpeed : 400,
				      singleItem:true,
				      responsive: true,
				     //Pagination
				      pagination : true,
				      paginationNumbers: false,
				      // "singleItem:true" is a shortcut for:
				      // items : 1,
				      // itemsDesktop : false,
				      // itemsDesktopSmall : false,
				      // itemsTablet: false,
				      // itemsMobile : false

				  });
				$('html,body').animate({
				  scrollTop: $( ".js-portfolio-data" ).offset().top - 100
				}, 1500);
			});

		} );
	});
  });

	$(".contact-form").submit(function() {

	    var url = $(this).attr("action"); // the script where you handle the form input.

	    $.ajax({
	           type: "POST",
	           url: url,
	           data: $(".contact-form").serialize(), // serializes the form's elements.
	           success: function(data)
	           {
	               $(".contact-form").html(data);
	           }
	         });

	    return false; // avoid to execute the actual submit of the form.
	});

  $("body").on('click', '.js-close-portfolio-details', function(e) {
  	e.preventDefault();
  	$( ".js-portfolio-data" ).slideUp( 1500, function() {
		$('html,body').animate({
		  scrollTop: $( "section.work" ).offset().top - 100
		}, 1500);
  	} );

  });

    /* Faces */
    $(".faces ul li").click( function() {
    	var target = $(this).attr("data-target");
    	$(".faces ul li.active").removeClass("active");
    	$(this).addClass("active");
    	$(".faces-content .face.active").slideUp("slow", function() {
    		$(this).removeClass("active");
    		$("[data-face='"+target+"']").slideDown('slow').addClass("active");

    	});
    });

  $("#owl-our-clients, .owl-carousel-blog, .use-carousel").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 1700,
      paginationSpeed : 400,
      singleItem:true,
      responsive: true,
     //Pagination
      pagination : true,
      paginationNumbers: false,
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  /* Responsive navigation */
  $(".open-navigation a").click(function(e) {
  	e.preventDefault();
  	$(".navigation-holder ul.navigation").slideToggle('slow');
  });

  if (viewport_width < 900) {
  	$(".navigation-holder ul.navigation a").click(function(e) {
  		e.preventDefault();
	  	$(".navigation-holder ul.navigation").slideToggle('slow');
  	});
  };

});

$( window ).resize(function() {
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
	$('.banner').height((viewport_height));
	$(window).resize(function() {
	  var viewport_width = window.innerWidth;
	  var viewport_height = window.innerHeight;
		$('.banner').height((viewport_height));
	});
});

$(window).load(function() {
    /* Features line */
    var line_height = $(".features").height();
    $(".features-line .line").css({
    	"height" : line_height-$(".feature").height()+"px"
    });

    /* Team social media height */
    var social_height = $(".faces-content").height();
    $(".faces-social").css({
    	"height" : social_height+"px"
    });

});

$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            }
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                }
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            }
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }
});

//functions
