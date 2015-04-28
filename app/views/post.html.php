<section class="banner2">
            	<div class="top">
								<div class="logo"><a href="<?php echo site_url() ?>"><img src="<?php echo site_url() ?>assets/img/logo_white.png" alt="" title="Nathan Shumate"></a></div>
                    <h1>Nathan Shumate</h1>
                    <h2><span id="typed5"></span></h2>
                </div>
                <div class="scroll_down"><a href="#welcome">Scroll down</a></div>
        </section>
        <!-- welcome -->

        <!-- POSTS  -->
        <section class="bigpage">
          <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2">
              <div class="post" data-scrollreveal="enter from the bottom over 4s">
        	      <h2 class="post-title"><?php echo $p->title ?></h2>
        	      <div class="date"><?php echo date('d F Y', $p->date)?></div>
                <?php echo $p->body?>

              </div>
							<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'nzshumate';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
            </div>
		      </div>
        </section>


        <!-- footer -->
        <section class="contact">
            <div class="container">
                <div class="col-sm-8 col-md-offset-2">
                    <p class="line"><span></span></p>
                    <h4><a href="<?php echo site_url() ?>blog" class="btn btn-default">Other Articles</a></h4>

          <div class="content">
            <div class="share">
    					<button class="share-toggle-button">
    						<i class="share-icon fa fa-power-off"></i>
    					</button>
    					<ul class="share-items">
    						<li class="share-item">
    							<a href="https://www.facebook.com/nathan.shumate" class="share-button">
    								<i class="share-icon fa fa-facebook"></i>
    							</a>
    						</li>
    						<li class="share-item">
    							<a href="https://twitter.com/Nathanshumate0" class="share-button">
    								<i class="share-icon fa fa-twitter"></i>
    							</a>
    						</li>
    						<li class="share-item">
    							<a href="https://github.com/nzshumate" class="share-button">
    								<i class="share-icon fa fa-github"></i>
    							</a>
    						</li>
    						<li class="share-item">
    							<a href="https://www.linkedin.com/pub/nathan-shumate/47/935/790" class="share-button">
    								<i class="share-icon fa fa-linkedin"></i>
    							</a>
    						</li>
    					</ul>
    				</div>
    			</div>

    			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
    			  <defs>
    			    <filter id="goo">
    			      <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
    			      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
    			      <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
    			    </filter>
    			  </defs>
    			</svg>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-12 text-center copyinfo"  data-scrollreveal="enter from the bottom over 1s">
                	<p><strong>Built With <i class="fa fa-heart" style="color: red;"></i> by N.Shumate</strong></p>
                </div>
            </div>
        </section>
