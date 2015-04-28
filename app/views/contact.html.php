<section class="banner">
            	<div class="top">
                <div class="logo"><a href="<?php echo site_url() ?>"><img src="<?php echo site_url() ?>assets/img/logo_white.png" alt="" title="Nathan Shumate"></a></div>
                    <h1>Nathan Shumate</h1>
                    <h2><span id="typed2"></span></h2>
                </div>
                <div class="scroll_down"><a href="#welcome">Scroll down</a></div>
        </section>
        <!-- welcome -->

        <!-- contact form -->
        <section class="bigpage">
          <h1>Contact</h1>

          <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
          <form id="contact-form" class="form" action="<?php echo site_url() ?>assets/lib/sendmail.php" method="POST" role="form">
              <div class="form-group">
                  <label class="form-label" for="name">Your Name</label>
                  <input type="text" class="form-control" id="name" name="name" placeholder="Your name" tabindex="1" required>
              </div>
              <div class="form-group">
                  <label class="form-label" for="email">Your Email</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required>
              </div>
              <div class="form-group">
                  <label class="form-label" for="subject">Subject</label>
                  <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3">
              </div>
              <div class="form-group">
                  <label class="form-label" for="message">Message</label>
                  <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Message..." tabindex="4" required></textarea>
              </div>
              <div class="text-center">
                  <button type="submit" class="btn btn-start-order">Send Message</button>
              </div>
          </form>
      </div>
  </div>
        </section>


        <!-- footer -->
        <section class="contact">
            <div class="container">
                <div class="col-sm-8 col-md-offset-2">
                    <p class="line"><span></span></p>
                    <h4><a href="<?php echo site_url() ?>" class="btn btn-default">Want to go home?</a></h4>

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
