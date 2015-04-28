<!DOCTYPE html>
<html>
<head>
	<title><?php echo isset($title) ? _h($title) : config('blog.title') ?></title>

	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" user-scalable="no" />
	<meta name="description" content="<?php echo config('blog.description')?>" />

	<link rel="alternate" type="application/rss+xml" title="<?php echo config('blog.title')?>  Feed" href="<?php echo site_url()?>rss" />
	<link href="<?php echo site_url() ?>assets/css/bootstrap.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="<?php echo site_url() ?>assets/css/main.css">
	<link rel="stylesheet" type="text/css" href="<?php echo site_url() ?>assets/css/owl.carousel.css">


	<link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700&subset=latin,cyrillic-ext" rel="stylesheet" />
	<link rel="icon" type="image/png" href="<?php echo site_url() ?>assets/img/fav.png" />

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

</head>
<body onload="setTimeout(function() { window.scrollTo(0, 1) }, 100);">
	<div class="row row-offcanvas row-offcanvas-right">
	  <section id="content">
		  <?php echo content()?>
			<!--   main menu   -->
					<div class="sidebar-offcanvas" id="sidebar" role="navigation">
							<div class="list-group-holder">
							<!--	<a href="#banner" class="menu-logo"><img src="images/menu_logo.png" alt="" title=""></a> -->
									<a data-toggle="offcanvas" class="close_menu">X</a>
									<a class="btn-menu" data-toggle="offcanvas"><span></span></a>
									<div class="list-group">
											<a href="<?php echo site_url() ?>#banner"  class="list-group-item">Welcome</a>
											<a href="<?php echo site_url() ?>#about" class="list-group-item">About</a>
											<a href="<?php echo site_url() ?>#calltoaction" class="list-group-item">Resume</a>
											<a href="<?php echo site_url() ?>#happycustomers" class="list-group-item">Happy Customers</a>
											<a href="<?php echo site_url() ?>articles" class="list-group-item">Blog</a>
											<a href="<?php echo site_url() ?>contact" class="list-group-item">Contact</a>
									</div>
									<p class="touch">Other Places</p>
									<p class="social">
											<a href="https://www.facebook.com/nathan.shumate" class="socialbtn"><i class="fa fa-facebook"></i></a>
											<a href="https://twitter.com/Nathanshumate0" class="socialbtn"><i class="fa fa-twitter"></i></a>
											<a href="https://github.com/nzshumate" class="socialbtn"><i class="fa fa-github"></i></a>
											<a href="https://www.linkedin.com/pub/nathan-shumate/47/935/790" class="socialbtn"><i class="fa fa-linkedin"></i></a>
									</p>
							</div>
					</div>
	  </section>
  </div>


    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
		<script src="<?php echo site_url() ?>assets/js/jquery.js"></script>
		<script src="<?php echo site_url() ?>assets/js/bootstrap.js"></script>

    <script type="text/javascript">
        if( !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))
         document.write('<script type="text/javascript" src="<?php echo site_url() ?>assets/js/scrollReveal.js"><\/script>');
    </script>
    <script src="<?php echo site_url() ?>assets/js/jquery.parallax.min.js"></script>
    <script src="<?php echo site_url() ?>assets/js/transition.js"></script>
    <script src="<?php echo site_url() ?>assets/js/waypoints.min.js"></script>
    <script src="<?php echo site_url() ?>assets/js/owl.carousel.js"></script>
	  <script src="<?php echo site_url() ?>assets/js/jquery.bootstrap.wizard.min.js"></script>
    <script src="<?php echo site_url() ?>assets/js/stellar.js"></script>
    <script src="<?php echo site_url() ?>assets/js/backstrech.js"></script>
    <script src="<?php echo site_url() ?>assets/js/typed.js"></script>
    <script src="<?php echo site_url() ?>assets/js/share.js"></script>
		<script src="<?php echo site_url() ?>assets/js/TweenMax.min.js"></script>
		<script src="<?php echo site_url() ?>assets/js/scripts.js"></script>
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-28698770-1', 'auto');
		  ga('send', 'pageview');

		</script>

</body>
</html>
