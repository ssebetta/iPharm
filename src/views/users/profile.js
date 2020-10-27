<div class="col-md-6 col-lg-12 col-xl-6">
              <div class="card">
                <div class="card-header">
                  <a href="#!profile/"><h4 style="color: #00cc00!important">User Profile</h4></a>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                    	<tbody>
	                        <tr>
	                          <td><b>Name</b> <span> <?=$person['firstname']." ".$person['lastname']?> </span></td></tr>
	                        </tr>
	                        <tr>
	                          <td><b>Email</b> <span><?=$person['email']?></span></td></tr>
	                        </tr>
	                        </tr>
	                         <tr>
	                          <td><b>Role</b> <span><?=$person['role']?></span></td></tr>
	                        </tr>
                    	</tbody>
                    </table>
                  </div>
                  <div class="row">
		              <div id="success" class="col-md-6">
		                <button class="btn btn-primary4 " style="background-color:#33ff00">Reset Password</button>
		              </div>
		            </div>
                </div>
              </div>
            </div>