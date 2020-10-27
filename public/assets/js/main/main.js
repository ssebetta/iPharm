var app = angular.module('funApp',['ngRoute']);
app.config(function($routeProvider)
	{
		$routeProvider
		.when("/", 
			{
				templateUrl:"<?=base_url()?>/welcome/gardens",
				controller:"gardensCtrl"
			})
			.when("/main", 
			{
				templateUrl:"<?=base_url();?>/welcome/gardens",
				controller:"gardensCtrl"
			})
			.when("/book/:id", 
			{
				templateUrl:"<?=site_url('bookings/add_view/:id');?>",
				controller:"bookNowCtrl"
			})
			.when("/view/:id", 
			{
				templateUrl:"<?=site_url('gardens/view/:id');?>",
				controller:"viewGardenCtrl"
			})
			/*Locations*/
			.when("/kla", 
			{
				templateUrl:"<?=site_url('locations/kla_view');?>",
				controller:"klaCtrl"
			})
			.when("/mbra", 
			{
				templateUrl:"<?=base_url();?>/locations/mbra_view",
				controller:"mbraCtrl"
			})
			.when("/wakiso", 
			{
				templateUrl:"<?=base_url();?>/locations/wakiso_view",
				controller:"wakisoCtrl"
			})
			
			.when("/msk", 
			{
				templateUrl:"<?=base_url();?>/locations/msk_view",
				controller:"mskCtrl"
			})
			.when("/mbl", 
			{
				templateUrl:"<?=base_url();?>/locations/mbl_view",
				controller:"mblCtrl"
			})
			.when("/jnj", 
			{
				templateUrl:"<?=base_url();?>/locations/jnj_view",
				controller:"jnjCtrl"
			})
			.when("/mpigi", 
			{
				templateUrl:"<?=base_url();?>/locations/mpg_view",
				controller:"mpgCtrl"
			})
			/*Ratings*/
			.when("/five", 
			{
				templateUrl:"<?=base_url();?>/ratings/five_view",
				controller:"fiveCtrl"
			})
			.when("/four", 
			{
				templateUrl:"<?=base_url();?>/ratings/four_view",
				controller:"fourCtrl"
			})
			.when("/three", 
			{
				templateUrl:"<?=base_url();?>/ratings/three_view",
				controller:"threeCtrl"
			})
			.when("/two", 
			{
				templateUrl:"<?=base_url();?>/ratings/two_view",
				controller:"twoCtrl"
			})
			.when("/one", 
			{
				templateUrl:"<?=base_url();?>/ratings/one_view",
				controller:"oneCtrl"
			})
			.when("/unrated", 
			{
				templateUrl:"<?=base_url();?>/ratings/none_view",
				controller:"unratedCtrl"
			})
			/*services*/
			.when("/hall",
			{
				templateUrl:"<?=base_url();?>/services/hall_view",
				controller:"hallCtrl"
			})
			.when("/food",
			{
				templateUrl:"<?=base_url();?>/services/food_view",
				controller:"foodCtrl"
			})
			.when("/music",
			{
				templateUrl:"<?=base_url();?>/services/music_view",
				controller:"musicCtrl"
			})
			.when("/pool",
			{
				templateUrl:"<?=base_url();?>/services/pool_view",
				controller:"poolCtrl"
			})
			.when("/deco",
			{
				templateUrl:"<?=base_url();?>/services/deco_view",
				controller:"decosCtrl"
			})
			.when("/video",
			{
				templateUrl:"<?=base_url();?>/services/video_view",
				controller:"videoCtrl"
			})
			/*others*/
			.when("/contact", 
			{
				templateUrl:"<?=base_url();?>/contact/index",
				controller:"contactCtrl"
			})
			.when("/help", 
			{
				templateUrl:"<?=base_url();?>/gardens/help",
				controller:"helpCtrl"
			})
			.when("/about", 
			{
				templateUrl:"<?=base_url();?>/gardens/about",
				controller:"parisCtrl"
			})
			;
			/*-------*/
	});
app.controller("klaCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/kla'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("wakisoCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/wakiso'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("mbraCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/mbra'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("mblCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/mbl'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("jnjCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/jnj'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("mpgCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/mpg'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("mskCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>locations/msk'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("bookNowCtrl",function($scope,$http,$routeParams)
	{
		$scope.gardenId=$routeParams.id;
    	$scope.bookNow=function () 
        {
          $http(
          {
            method: 'post',
            url:'<?=base_url()?>bookings/add',
            data:$scope.bookingData,
            headers:{'Content-Type':'application/json'}
          }).success(function(data)
          {
            $scope.message=data;
            location.reload();
          });
        }
	});
app.controller("gardensCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>gardens/get'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("fiveCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>/ratings/five'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("fourCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>ratings/four'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("threeCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>ratings/three'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("twoCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>ratings/two'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
app.controller("oneCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>ratings/one'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("unratedCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>ratings/none'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("hallCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>services/hall'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("poolCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>services/pool'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("musicCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>services/music'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("videoCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>services/video'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("foodCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>services/food'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("decosCtrl",function($scope,$http)
	{
    	$http(
		    	{
			      	method: 'post',
			      	url:'<?=base_url()?>services/deco'
			    }
			  )
    	.then(function success(response)
			    	{
			      		$scope.gardens = response.data;
		    		}
		    );
	});
	app.controller("contactCtrl", function ($scope,$http) 
{
	$scope.send_message=function () 
{
  $http(
  {
    method: 'post',
    url:'<?=base_url()?>contact/send',
    data:$scope.contactData,
    headers:{'Content-Type':'application/json'}
  }).success(function(data)
  {
    $scope.message=data;
    location.reload();
  });
}
});
app.controller("funCtrl",function($scope,$http)
  {

  });
	