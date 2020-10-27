<!--A Design by W3layouts 
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!Doctype html>
<html>
<head>
<title>SAMBA | Free Registration</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>

<link rel="shortcut icon" href="<?=base_url()?>assets/images/3afd71b2-1651-45cf-94b8-95ef4081185d.png">
<!-- css -->
<link href="<?=base_url()?>/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />

<link href="<?=base_url()?>/assets/css/w3.css" rel="stylesheet" type="text/css" media="all" />
<link href="<?=base_url()?>/assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<!-- /css -->
<!-- /js -->
	<script src="<?=base_url()?>assets/js/jquery-3.2.1.js" type="text/javascript"></script>
	<!-- <script src="<?=base_url()?>assets/js/jquery.min.js" type="text/javascript"></script> -->
	<script src="<?=base_url()?>assets/js/bootstrap.js" type="text/javascript"></script>
	
	<!--  -->
	<!-- /js -->
</head>
<style>
	@media screen and (min-width: 100px) and (max-width: 500px)
  	{
  		
  		div.hide1
  		{
  			display: none;
  		}
  		.switch
  		{
  			display: 
  		}
  		.navbar
  		{
  			font-size: 10px;
  		}
  		img.mob
	    {
	    	max-height:200px;
	    }

    	div .one 
    	{
      		width: 200%;
      		align-content: middle;
      		/*position: center;*/
	    }
	    div .two
      {
        display: inline-block;
        margin-left: 0px;
        align-content: left;
      }
	    .sidenav
		  {
		    margin-top:10%;
		    height: auto;
		    width: 50%;
		    z-index: 1;
		    top: 0;
		    left: 0;
		    background-color: #303030;
		    /*opacity: 0.2;*/
		    overflow-x: hidden;
		    padding-top: 20px;
		    font-size: 90%;
		    display:none;
		  }
		/*input#emails,input#pass
		{
			width:50%;
			height:40px;
			padding:0 15px;
			color:black;
		}*/
  	}
  	@media screen and (min-width: 401px)
  	{
	  	div.hide2
		{
			display: none;
		}
	}
	@media screen and (min-width: 700px)
	{
		.hide
	{
		display: none;
	}
	}
	
  	.sidenav
  	{
  		display: none;
  	}
	
</style>
<body class="" data-spy="scroll" style="">
<div  style="color: rgb(0,0,0)!important; height: 813px">
  	<!-- navigation bar -->
<?php $this->load->view('includes/nav1');?>
<!-- end vanigation bar -->

<!-- for normal screens -->
  <div id="portfolio">
    <div class="container ">
     
      <div class="row">
          <div class="portfolio-items hide1">
             <div class="col-sm-6 col-md-3 " style="margin-left: ;margin-top: 15%;">
              <img src="<?=base_url()?>assets/images/hello-1502369.png" style="width: 450px">
             </div>
            <div class="col-sm-6 w3-blue" style="margin-left: 20%;margin-top: 10%;">
              <div class="section-title text-center">
                <h2><span style="color: white">Free Registration</span></h2> <!-- | <a href="<?=base_url()?>users/add">Signup</a></h2> -->
                <hr style="border:30px solid transparent">
              </div>
              <?php if(isset($error_message)):?>
                <p class="w3-text-red">
                  <?=$error_message;?>
                </p><br>
              <?php endif;?>
              <?php if(isset($message_display)):?>
                <p class="w3-text-blue">
                  <?=$error_message;?>
                </p><br>
              <?php endif;?>
              <?php if(isset($success)):?>
                <p class="w3-text-green">
                  <?= $success;?>
                </p><br>
              <?php endif;?>
              <?=form_open('users/user_register');?>
                <div class="portfolio-item" style="margin-left: 5%">
                  <span>Personal Details</span>
                  <div class="form-inline" >
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-user" style="font-size: 20px"></span>
                        </div>
                        <input type="text" name="firstname" class="form-control" placeholder="First Name" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required> 
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <!-- <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-envelope" style="font-size: 20px"></span>
                        </div> -->
                        <input type="text" name="lastname" class="form-control" placeholder="Last Name" style="width: 240px;border-left: none;height: 40px;font-size: 15px" required> 
                      </div>
                    </div><br><br>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-envelope" style="font-size: 20px"></span>
                        </div>
                        <input type="email" name="email" class="form-control" placeholder="Email" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required> 
                      </div>
                    </div><br><br>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-lock" style="font-size: 20px"></span>
                        </div>
                        <input type="password" name="password" class="form-control" placeholder="Password" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required><br>
                      </div>
                    </div>
                  </div><br><br>
                  <span>Farm Details</span>
                  <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-briefcase" style="font-size: 20px"></span>
                        </div>
                        <input type="text" name="name" class="form-control" placeholder="Name" style="width: 450px;border-left: none;height: 40px;font-size: 15px" required> 
                      </div>
                    </div><br><br>
                  <div id="success"></div>
                  <input type="submit" class="btn btn-primary4 w3-text-white w3-hover-text-white" value="Register" style="width: 150px;margin-left:35% ;border:none; background-color: #cc0000;">
                </div>
              <?=form_close();?>
              <br>
              <div class="text-center">
                 <p class=" " style="color:white"> 
                  Already have an account? <a href="<?=base_url()?>users/login" style="color: #000066">Login here</a> 
                </p>
              </div>
              <div class="text-center" style="margin-top: 20%">
                <p class=" " style="color:white"> 
                  <?=date('Y')?>© SSAMBA<br>
                  All rights reserved.
                </p>
            </div>
          </div></div>
          <!-- Mobile -->
          <div class="portfolio-items hide2">
            <div class="hide2">
            <div class="col-sm-6 " style="margin-left:5%;margin-top: 15%;">
              <div class="section-title text-center">
                <h3><span style="color: black">Free Registration</span></h3>
                <hr style="border:2px solid transparent">
              </div>
              <?php if(isset($error_message)):?>
                <p class="w3-text-red">
                  <?=$error_message;?>
                </p><br>
              <?php endif;?>
              <?php if(isset($message_display)):?>
                <p class="w3-text-blue">
                  <?=$error_message;?>
                </p><br>
              <?php endif;?>
              <?php if(isset($success)):?>
                <p class="w3-text-green">
                  <?= $success;?>
                </p><br>
              <?php endif;?>
              <?=form_open('users/user_register');?>
                <div class="portfolio-item">
                  <div class="form-inline" >
                    Personal Details<br><br>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-user" style="font-size: 15px"></span>
                        </div>
                        <input type="text" name="firstname" class="form-control" placeholder="First Name" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required> 
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        
                        <input type="text" name="lastname" class="form-control" placeholder="Last Name" style="width: 238px;height: 40px;font-size: 15px" required><br>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-lock" style="font-size: 15px"></span>
                        </div>
                        <input type="email" name="email" class="form-control" placeholder="Email" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required><br>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-lock" style="font-size: 15px"></span>
                        </div>
                        <input type="password" name="password" class="form-control" placeholder="Password" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required><br>
                      </div>
                    </div><br><br>
                    <span>Farm Details</span>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
                          <span class="fa fa-briefcase" style="font-size: 15px"></span>
                        </div>
                        <input type="text" name="name" class="form-control" placeholder="Name" style="width: 200px;border-left: none;height: 40px;font-size: 15px" required><br>
                      </div>
                    </div>
                  </div><br>
                  <div id="success"></div>
                  <input type="submit" class="btn btn-primary4" value="Register" style="width: 100px;margin-left: ; background-color: #cc0000">
                </div>
              <?=form_close();?>
              <br>
              <div class="">
                 <p class=" " style="color:black"> 
                  Already have an account? <a href="<?=base_url()?>users/login" style="color: #000066">Login here</a> 
                </p>
              </div>
              <div class="text-center" style="margin-top: 20%">
              <p class=" " style="color: #303030"> 
                <?=date('Y')?>© SAMBA<br>
                All rights reserved.
              </p>
            </div>
          </div>

        
      </div>
    </div>
  </div><br>
</div>
</body>
</html>
