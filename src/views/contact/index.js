<!Doctype html>
<html>
<head>
	<title>Mateeka MS | Contact</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Mateeka Management System is a web and desktop software system that you can use to mange your Mateeka firm or law firm. Users can acces information about court files and other issues they would use in any court cases. It also helps in keeping upto date with the day to day running of a law firm, by keeping track of the utilities of the law firm." />
	<meta name="keywords" content="Mateeka, management systems, lawyer, law firm, judge, court" />
	<link rel="shortcut icon" href="<?=base_url()?>assets/images/logos/fg-logo-1.jpg">
	<!-- css -->
	<link href="<?=base_url()?>/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />
	<link href="<?=base_url()?>/assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
	<link href="<?=base_url()?>/assets/css/w3.css" rel="stylesheet" type="text/css" media="all" />
	<!-- /css -->
	<!-- /js -->
	<script src="<?=base_url()?>assets/js/jquery-3.2.1.js" type="text/javascript"></script>
	<script src="<?=base_url()?>assets/js/bootstrap.js" type="text/javascript"></script>
	<script src="<?=base_url()?>assets/js/angular.min.js" ></script>
	<script src="<?=base_url()?>assets/js/angular-route.min.js" ></script>
	
	<!--  -->
	<!-- /js -->
</head>
<style>
html,body
{
	font-family: /*Times New Roman,*//*Times,*/Helvetica,"Courier New", serif, /*sans-serif,*/Arial;
}
	@media screen and (min-width: 100px) and (max-width: 800px)
  	{
  		body
  		{
  			font-size: 10px;
  		}
  		div.hide1
  		{
  			display: none;
  		}
  		.extend
  		{
  			margin-top: 15%; 
  		}
  		.navbar
  		{
  			font-size: 10px;
  		}
  		.describe
  		{
  			font-size:250%!important; 
  		}
  		img.mob
	    {
	    	max-height:200px;
	    }

    	div .one 
    	{
      		display: grid;
      		width: 1000px;
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
	  		margin-top: 46%!important;
		    height: auto;
		    width: 50%!important;
		    z-index: 1;
		    top: 0;
		    left: 0;
		    /*opacity: 0.2;*/
		    overflow-x: hidden;
		    display:none;
	  	}
		.intro1 
		{
			/*height: 100%;*/
			padding: 0;
			color: #fff;
		}
		.intro1 h1 
		{
			font-size: 20px;
			font-weight: 300;
			text-transform: uppercase;
		}
		.intro1 .intro-text1 p 
		{
			font-size: 10px;
			letter-spacing: 4px;

		}
		.small-capt
		{
			margin-left:-15%;
			margin-bottom: -15%;
		}
  	}
  	@media screen and (min-width: 801px)
  	{
	  	div.hide2
		{
			display: none;
		}
		.footer
		{
			display: none;
		}
	}
  	.sidenav
  	{
  		display: none;
  	}
  	hr.title 
  	{
		height: 2px;
		width: 200px;
		background-color: #616161;
		margin-left: 16%;
	}

	hr.title1 
  	{
		height: 2px;
		width: 200px;
		background-color: #606060;
		margin-left: 16%;
	}

	hr.title2
  	{
		height: 2px;
		width: 300px;
		background-color: #606060;
		margin-left: 12%;
	}
	
	body .here{
	background-position:center;
	background-size:cover;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	font-family: 'Raleway', sans-serif;
	font-weight:300;
	}
	.two
	{
		display: none;
	}
	a:hover
	{
		color:orange;
		text-decoration: none;
	}
.intro {
	/*height: 100%;*/
	padding: 0;
	color: #fff;
}
.intro H1 {
	font-size: 60px;
	font-weight: 600;
	text-transform: uppercase;
}
.intro .intro-text p {
	font-size: 20px;
	letter-spacing: 2px;

}
#nav {
	z-index: 9999;
}
#nav.affix {
	position: fixed;
	top: 0;
	width: 100%
}
.navbar1 .navbar-nav {
	display: inline-block;
	float: none;
	vertical-align: top;
}
.navbar1 .navbar-collapse {
	text-align: center;
}
.navbar-custom {
	margin-bottom: 0;
	background-color: rgb(80,40,180);
	border-radius: 0px;
	padding: 10px 0;
}
.checked
{
	color: orange
}
</style>
<body class=""  data-spy="scroll">
<?php $this->load->view('includes/nav1');?>
	<div class="hide1">
		<div class="hide1" style="height: auto;">
			<div style="margin-top: 10%"  class="w3-blue" id="contact">
				<h1 style="font-size: 200%; color: white!important;margin-left: 40%" class="">
					Contact Us
				</h1>
				<div class="form-inline" style="margin-top: 3%;color: black;margin-left: 15%;">
					<?=form_open('contact/email_admin');?>
					<div class="form-group">
						<div class="input-group">
	                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
	                          <span class="fa fa-user" style="font-size: 20px"></span>
	                        </div>
								<input type="text" name="name" class="form-control" placeholder="Name" style="width: 350px;height: 50px" required="true"> 
							</div>
					</div>
					<div class="form-group">
						<div class="input-group">
	                        <div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
	                          <span class="fa fa-envelope" style="font-size: 20px"></span>
	                        </div>
	                        <input type="email" name="email" class="form-control" placeholder="Email" style="width: 350px; margin-left: ;height: 50px"><br>
						</div>
					</div><br><br>
					<div class="form-group">
						<textarea type="text" name="message" class="form-control" placeholder="Write your message here" style="height: 250px; width: 800px" required="true"></textarea><br>
					</div><br><br>
					<input type="submit" name="submit" value="SEND" class="btn btn-primary4 w3-black w3-hover-text-white" style="width: 30%;height: 50px"><br><br>
					<?=form_close();?>
				</div>
			</div>
			<div class=" text-center w3-bottom" style=" color: white!important;background-color: #303030;" >
				<div style="margin-top: 5%">
					<span style="padding: 5px"><a href="<?=base_url()?>">Home</a></span>
					<span style="padding: 5px"><a href="<?=base_url()?>users/login">Login</a></span>
					<span style="padding: 5px"><a href="<?=base_url()?>users/register">Register</a></span>
					<span style="padding: 5px"><a href="<?=base_url()?>contact/index">Contact Us</a></span>
					<span style="padding: 5px"><a href="#">FAQs</a></span>
				</div>
				<div style="margin-top: 5%">
					<span>
						2019<?='&copy';?> Mateeka Management System 
						<br>All rights reserved.
					</span>
				</div>
			</div>
			
		</div>
	</div>
	<!-- End -->
	<!-- Small screen footer -->
	<div class="hide2">
		<div class="hide2 row" style="height: ;background-color: #303030;width: 200%;">
			<div style="margin-left: 5%"  class="" id="contact">
				<h1 style="font-size: 200%; color: white!important;margin-left: 15%;" class="">
					Contact Us
				</h1>
				<div class="" style="margin-top: 3%;color: #303030;">
					<?=form_open('contact/email_admin');?>
					<div class="form-inline">
						<div class="form-group">
							<div class="input-group">
		    					<div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
		    						<span class="fa fa-user"></span>
		    					</div>
		    					<input type="text" name="name" class="form-control" placeholder="Name" style="width: 50%;border-left: none" required> 
		    				</div>
						</div><br>
						<div class="form-group">
							<div class="input-group">
		    					<div class="input-group-addon w3-text-blue w3-white"style="border-right: none">
		    						<span class="fa fa-envelope"></span>
		    					</div>
								<input type="email" name="email" class="form-control" placeholder="Email" style="width: 50%;border-left: none" required><br>
							</div>
						</div>
					</div>
					<div>
						<textarea type="text" name="message" class="form-control" placeholder="Write your message here" style="height: 150px; width: 55%" required="true"></textarea><br>
					</div>
					<input type="submit" name="submit" value="SEND" class="btn btn-primary4">
					<?=form_close();?>
				</div>
			</div>
			<div class=" " style=" color: white!important;margin-left:5%" >
				<div style="margin-top: 10%;margin-left: 10%">
					<span style="padding: 5px"><a href="<?=base_url()?>">Home</a></span>
					<span style="padding: 5px"><a href="<?=base_url()?>users/login">Login</a></span>
					<span style="padding: 5px"><a href="<?=base_url()?>users/register">Register</a></span>
					<span style="padding: 5px"><a href="<?=base_url()?>contact/index">Contact Us</a></span>
					<span style="padding: 5px"><a href="#">FAQs</a></span>
				</div>
				<div style="margin-top: 5%">
					<span>
						<?=date('Y').'&copy';?> Mateeka Management System. All rights reserved.
					</span>
				</div>
			</div>
			
		</div>
	</div>
</body>
</html>