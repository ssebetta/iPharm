import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect, Router,Link } from "react-router-dom";
import "./germinate/css/bootstrap.css";
import "./germinate/css/style.css"; 
import "./germinate/css/mislider.css";
import "./germinate/css/font-awesome.css";
import "./germinate/css/mislider-custom.css";
import img1 from './germinate/images/1.png';
import cattle from './germinate/images/pills-384846_640.jpg';
import crops from './germinate/images/syringe-1884784_640.jpg';
import equipment from './germinate/images/stethoscope-2617701_640.jpg';
import pesticides from './germinate/images/wallet-2292428_640.jpg';
import insecticides from './germinate/images/pulse-trace-163708_640.jpg';
import starter from './germinate/images/health-2082630_640.jpg';
export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="w3_agileits_banner_main_grid">
              <div className="w3_agile_logo">
                <h1><Link to="/"><span style={{color:'white'}}>i</span>Dagala<i>easy access of medical drus</i></Link></h1>
              </div>
              <div className="agile_social_icons_banner">
                <ul className="agileits_social_list">
                  <li><Link to="/shop" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Drug Shop</Link></li>
                  <li><Link to="/dashboard" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Dashboard</Link></li>
                  <li><Link to="/register" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Sign up</Link></li>
                  <li><Link to="/login" className="w3_agile_vimeo"><i className="fa fa-dribbble" aria-hidden="true" /> Login</Link></li>
                  <li><Link to="/cart" className="w3_agile_vimeo"><i className="fa fa-shopping-cart" aria-hidden="true" /> My cart</Link></li>
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
            <div className="w3_banner_info">
              <div className="w3_banner_info_grid">
                <h3 className="test">iDagala - Connecting Health Centers to Drug Shops</h3><br /><br />
                <p>
                  iDagala is a web and mobile cloud based system designed to help Health centers access medical drugs.
                  With a mobile phone or computer, a health center can connect with a growing list of drug shops that will
                  provide the necessary drugs. This will reduce unecessary movements made in search of drugs to stock in health centers.
                </p> 
                <ul>
                  <li><Link to="#" className="btn btn-primary" style={{color:'white', backgroundcolor:'#0033cc'}}>Get Started As a Health Center</Link></li> <br /><br/>
                  <li><Link to="#" className="btn btn-danger" style={{color:'white', backgroundcolor:'#0033cc'}}>Get Started As a Drug Shop / Pharmacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="thim-click-to-bottom">
              <Link to="#welcome_bottom" className="scroll">
                              <i className="fa  fa-chevron-down" />
                            </Link>
            </div>
          </div>
        </div>
        {/* banner */}

        {/* banner-bottom */}
        <div className="banner-bottom">
          <div className="col-md-4 agileits_banner_bottom_left">
            <div className="agileinfo_banner_bottom_pos">
              <div className="w3_agileits_banner_bottom_pos_grid">
                <div className="col-xs-4 wthree_banner_bottom_grid_left">
                  <div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
                    <i className="fa fa-truck" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-xs-8 wthree_banner_bottom_grid_right">	
                  <h4 style={{color:'#ffffff'}}>Buy and Stock Drugs</h4>
                  <p>Buy medical drugs for your health center or clinic with a mobile phone or computer.<br /> 
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 agileits_banner_bottom_left1">
            <div className="agileinfo_banner_bottom_pos">
              <div className="w3_agileits_banner_bottom_pos_grid">
                <div className="col-xs-4 wthree_banner_bottom_grid_left">
                  <div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
                    <i className="fa fa-desktop" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-xs-8 wthree_banner_bottom_grid_right">	
                  <h4 style={{color:'#ffffff'}}>Monitor</h4>
                  <p>Keep a digital record of available medical drugs. Access this information from anywhere.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 agileits_banner_bottom_left2">
            <div className="agileinfo_banner_bottom_pos">
              <div className="w3_agileits_banner_bottom_pos_grid">
                <div className="col-xs-4 wthree_banner_bottom_grid_left">
                  <div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
                    <i className="fa fa-heart" aria-hidden="true" />
                  </div>
                </div>
                <div className="col-xs-8 wthree_banner_bottom_grid_right">	
                  <h4 style={{color:'#ffffff'}}>Enjoy your good service</h4>
                  <p>With medical drugs always available to your patients, you will do more to save a life. And you will be happy about it.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        {/* //banner-bottom */}
        {/*-728x90-*/}
        {/* welcome */}
        <div className="welcome">
          <div className="container">
            <h3 className="agileits_w3layouts_head"><span>iDagala Health System</span></h3>
            <div className="w3_agile_image">
              <img src={img1} alt=" " className="img-responsive" />
            </div>
            <p className="agile_para">Here are some features.</p>
          </div>
          {/*-728x90-*/}
          <div className="mis-stage w3_agileits_welcome_grids"> 
            {/* The element to select and apply miSlider to - the class is optional */}
            <ol className="mis-slider">
              <li className="mis-slide"> 
                <figure> 
                  <img src={crops} alt=" " className="img-responsive" />
                  <figcaption><p style={{padding:'10px', fontSize:'20px',color:'white'}}>Buy Medical Drugs</p></figcaption>
                </figure>
              </li>
              <li className="mis-slide"> 
                <figure> 
                  <img src={cattle} alt=" " className="img-responsive" />
                  <figcaption><p style={{padding:'10px', fontSize:'20px',color:'white'}}>Sell Medical Drugs</p></figcaption>
                </figure>
              </li>
              <li className="mis-slide"> 
                <figure> 
                  <img src={insecticides} alt=" " className="img-responsive" />
                  <figcaption><p style={{padding:'10px', fontSize:'20px',color:'white'}}>Keep Account of Drug Stock</p></figcaption>
                </figure>
              </li>
              <li className="mis-slide"> 
                <figure> 
                  <img src={pesticides} alt=" " className="img-responsive" />
                  <figcaption><p style={{padding:'10px', fontSize:'20px',color:'white'}}>Pay on Delivery</p></figcaption>
                </figure>
              </li>
              <li className="mis-slide"> 
                <figure> 
                  <img src={equipment} alt=" " className="img-responsive" />
                  <figcaption><p style={{padding:'10px', fontSize:'20px',color:'white'}}>Use anywhere</p></figcaption>
                </figure>
              </li>
            </ol>
          </div>
        </div>
        {/* //welcome */}
        {/* welcome-bottom */}
        <div id="welcome_bottom" className="welcome-bottom" style={{backgroundColor: '#ffffff!important'}}>
          <div className="col-md-6 wthree_welcome_bottom_left">
            <h3>Our Mission</h3>
            <p>
             We want to help <b>bridge the gap between health centers and drug shops</b> when it comes to accessing drugs. 
             We believe this will in turn greatly help to make necessary medical drugs available to people everywhere, even
             in the remotest areas. <br />
              We don't charge users any daily, weekly, monthly or annual fees. We simply want to help.
            </p>
            <b>
              <p />
              <ul><li>
                  <Link to="/register" className="w3l_contact" style={{fontSize: '150%', color: '#ffffff!important', padding: '2px'}}>
                    <span style={{padding: '5px'}}>Register for free to start tapping into the power of this simple but powerful health system.</span>
                  </Link></li></ul>
              <div className="clearfix"> </div>
            </b></div><b>
            <div className="col-md-6 wthree_welcome_bottom_right">
              <div className="agileinfo_grid">
                <figure className="agileits_effect_moses">
                  <img  src={starter} alt=" " className="img-responsive" />
                  {/* //<figcaption>
						<h4>STARTER: $15/month</h4>
						<p>
						<h4>PRO: $15/month</h4>
						</p>
					</figcaption> */}			
                </figure>
              </div>
            </div>
            <div className="clearfix"> </div>
          </b></div><b>
          {/* //welcome-bottom */}
          {/* news */}
          {/* //news */}
          {/* newsletter */}
          <div className="newsletter">
            <div className="container">
              <h3 className="agileits_w3layouts_head agileinfo_head"><span>Talk to us.</span> </h3>
              <div className="w3_agile_image">
                <img  src="./germinate/images/12.png" alt=" " className="img-responsive" />
              </div>
              <p className="agile_para agileits_para">We would love to hear from you incase of any query or suggestion.</p>
              <div className="w3ls_news_grids">
                <div className="w3_agile_mail_left" style={{backgroundColor: 'transparent!important'}}>
                  <div className="agileits_mail_grid_right1 agile_mail_grid_right1" style={{backgroundColor: 'transparent!important'}} align="center">
                    <form action="<?=base_url()?>contact/email_admin" method="post">
                      <span>
                        <i style={{color: '#ffffff'}}>Name</i>
                        <input type="text" name="Name" placeholder=" " required style={{border:'1px solid #000000' }}/>
                      </span>
                      <span>
                        <i style={{color: '#ffffff'}}>Email</i>
                        <input type="email" name="Email" placeholder=" " required style={{border:'1px solid #000000' }}/>
                      </span>
                      <span>
                        <i style={{color: '#ffffff'}}>Subject</i>
                        <input type="text" name="Subject" placeholder=" " required style={{border:'1px solid #000000' }}/>
                      </span>
                      <span>
                        <i style={{color: '#ffffff'}}>Message</i>
                        <textarea name="Message" placeholder=" " required defaultValue={""} style={{border:'1px solid #000000' }}/>
                      </span>
                      <div className="w3_submit">
                        <input type="submit" defaultValue="Submit Now" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //newsletter */}
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
          </div></b></div>
    );
  }
}