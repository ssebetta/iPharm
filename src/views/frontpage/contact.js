import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect, Router,Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* banner */}
        <div className="banner1">
          <div className="container">
            <div className="w3_agileits_banner_main_grid">
              <div className="w3_agile_logo">
                <h1><Link to="/"><span style={{color:'white'}}>i</span>Dagala<i>easy access of medical drus</i></Link></h1>
              </div>
              <div className="agile_social_icons_banner">
                <ul className="agileits_social_list">
                  <li><Link to="/shop" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> drug shop</Link></li>
                  <li><Link to="/register" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> sign up</Link></li>
                  <li><Link to="/login" className="w3_agile_vimeo"><i className="fa fa-dribbble" aria-hidden="true" /> Login</Link></li>
                </ul>
              </div>
              <div className="agileits_w3layouts_menu">
                <div className="shy-menu">
                  <Link className="shy-menu-hamburger">
                    <span className="layer top" />
                    <span className="layer mid" />
                    <span className="layer btm" />
                  </Link>
                  <div className="shy-menu-panel">
                    <nav className="menu menu--horatio link-effect-8" id="link-effect-8">
                      <ul className="w3layouts_menu__list">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/register">Sign Up</Link></li> 
                        <li><Link to="/login">Login</Link></li> 
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* banner */}
        {/*-728x90-*/}
        {/* bootstrap-pop-up */}
        {/* //bootstrap-pop-up */}
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <div className="w3layouts_breadcrumbs_left">
              <ul>
                <li><i className="fa fa-home" aria-hidden="true" /><Link to="/" style={{color: '#0099ff'}}>Home</Link><span>/</span></li>
                <li><i className="fa fa-envelope-o" aria-hidden="true" />Contact</li>
              </ul>
            </div>
            <div className="w3layouts_breadcrumbs_right">
              <h2>Contact Us</h2>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* //breadcrumbs */}
        {/*-728x90-*/}
        {/* contact */}
        <div className="welcome">
          <div className="container">
            <h3 className="agileits_w3layouts_head">Get in<span> touch</span> with us</h3>
            <div className="w3_agile_image">
              <img src />
              {/*<img src="images/1.png" alt=" " class="img-responsive" /> */}
            </div>
            <p className="agile_para">We would love to hear from you. Feel free to share any discrepancies or suggestions. We will discuss a solution and help you.</p>
            {/*-728x90-*/}
            <div className="w3ls_news_grids">
              <div className="col-md-8 w3_agile_mail_left">
                <div className="agileits_mail_grid_right1 agile_mail_grid_right1" style={{backgroundColor: '#0099ff'}}>
                  <form action="#" method="post">
                    <span>
                      <i>Name</i>
                      <input type="text" name="name" placeholder=" " required />
                    </span>
                    <span>
                      <i>Email</i>
                      <input type="email" name="Email" placeholder=" " required />
                    </span>
                    <span>
                      <i>Subject</i>
                      <input type="text" name="subject" placeholder=" " required />
                    </span>
                    <span>
                      <i>Message</i>
                      <textarea name="message" placeholder=" " required defaultValue={""} />
                    </span>
                    <div className="w3_submit">
                      <input type="submit" defaultValue="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 w3_agile_mail_right">
                <div className="w3_agileits_mail_right_grid">
                  <h4>About iDagala</h4>
                  <p>A cloud based system for connecting Health Centers with medical drug shops.</p>
                  {/* <h5>Follow Us On</h5>
						<ul class="agileits_social_list">
							<li><Link to="#" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
							<li><Link to="#" class="agile_twitter"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
							<li><Link to="#" class="w3_agile_dribble"><i class="fa fa-dribbble" aria-hidden="true"></i></Link></li>
							<li><Link to="#" class="w3_agile_vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></Link></li>
						</ul> */}
                  <div className="w3_agileits_mail_right_grid_pos">
                    <img src />
                    {/*<img src="images/12.jpg" alt=" " class="img-responsive" />*/}
                  </div>
                </div>
                <div className="w3_agileits_mail_right_grid_main">
                  <div className="w3layouts_mail_grid_left">
                    <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                      <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
                    </div>
                    <div className="w3layouts_mail_grid_left2">
                      <h3>EMail Us</h3>
                      <Link to="mailto:spethacom@gmail.com">spethacom@gmail.com</Link>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* <div class="w3layouts_mail_grid_left">
							<div class="w3layouts_mail_grid_left1 hvr-radial-out">
								<span class="glyphicon glyphicon-home" aria-hidden="true"></span>
							</div>
							<div class="w3layouts_mail_grid_left2">
								<h3>Address</h3>
								<p>My Company 8907 Ukraine.</p>
							</div>
							<div class="clearfix"> </div>
						</div> */}
                  <div className="w3layouts_mail_grid_left">
                    <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                      <span className="glyphicon glyphicon-earphone" aria-hidden="true" />
                    </div>
                    <div className="w3layouts_mail_grid_left2">
                      <h3>Phone(s)</h3>
                      <p>+256 779-742-792</p>
                      <p>+256 788-291-186</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer">
            <div className="container">
              <div className="w3agile_footer_grids">
                <div className="col-md-3 agileinfo_footer_grid">
                  <div className="agileits_w3layouts_footer_logo">
                <h2><Link to="/"><span style={{color:'white'}}>i</span>Dagala<i>easy access of medical drus</i></Link></h2>
                  </div>
                </div>
                <div className="col-md-4 agileinfo_footer_grid">
                  <h3>Contact Us</h3>
                  <h2><span><Link style={{color: '#ffffff'}}>+256 779742792<br />+256 788291186</Link></span></h2>
                  <h3>Email Us</h3>
                  <h2><span style={{color:'white', fontSize:'20px'}}>spethacom@gmail.com</span></h2>
                  {/* <ul class="agileits_social_list">
            <li><Link to="#" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
            <li><Link to="#" class="agile_twitter"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
            <li><Link to="#" class="w3_agile_dribble"><i class="fa fa-dribbble" aria-hidden="true"></i></Link></li>
            <li><Link to="#" class="w3_agile_vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></Link></li>
          </ul> */}
                </div>
                <div className="col-md-2 agileinfo_footer_grid agileinfo_footer_grid1">
                  <h3>Navigation</h3>
                  <ul className="w3layouts_footer_nav">
                    <li><Link to="/home"><i className="fa fa-long-arrow-right" aria-hidden="true" />Home</Link></li>
                    <li><Link to="/login"><i className="fa fa-long-arrow-right" aria-hidden="true" />Login</Link></li>
                    <li><Link to="/register"><i className="fa fa-long-arrow-right" aria-hidden="true" />Sign Up</Link></li>
                    <li><Link to="/contact"><i className="fa fa-long-arrow-right" aria-hidden="true" />Contact Us</Link></li>
                  </ul>
                </div>
                <div className="col-md-3 agileinfo_footer_grid">
                  {/* */}
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="w3_agileits_footer_copy">
              <div className="container">
                <p>{/*?='&copy'. date('Y')?*/} 2020 COPYRIGHT SPETHACOM SMC LIMITED | All Rights Reserved</p>
              </div>
            </div>
          </div></div>
    );
  }
}