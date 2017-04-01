// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.footer'])
.component("footerComponent", {
        templateUrl:"template/footer.html",
       
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
	//Modify the tabs of android display position! start
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  //Modify the tabs of android display position! end

	 $stateProvider
	 	  .state('tabs',{
	 	  	  url:'/tab',
	 	  	  templateUrl:'template/tabs.html'
	 	  })
	 	  .state('tabs.home',{
	 	  	  url:'/home',
	 	  	  views:{
	 	  	  	'tab-home':{
	 	  	  		  templateUrl:'template/home.html',
	 	  	  		  controller:'ctrl_home'
	 	  	  	}
	 	  	  	 
	 	  	  }
	 	  })
	 	  .state('tabs.homelist',{
	 	  	  url:'/home/:id',
	 	  	  views:{
	 	  	  	 'tab-home':{
	 	  	  	 	   templateUrl:'template/homelist.html',
	 	  	  	 	   controller:'ctrl_homein'
	 	  	  	 }
	 	  	  }
	 	  })
	 	  .state('tabs.discount',{
	 	  	  url:'/discount',
	 	  	  views:{
	 	  	  	 'tab-discount':{
	 	  	  	 	   templateUrl:'template/discount.html',
	 	  	  	 	   controller:"ctrl_dis"
	 	  	  	 }
	 	  	  }
	 	  })
	 	   .state('tabs.dislist',{
	 	  	  url:'/discount/:id',
	 	  	  views:{
	 	  	  	 'tab-discount':{
	 	  	  	 	   templateUrl:'template/dislist.html',
	 	  	  	 	   controller:'ctrl_disin'
	 	  	  	 }
	 	  	  }
	 	  })
	 	   .state('tabs.dislistin',{
	 	  	  url:'/discount/dislist/:id',
	 	  	  views:{
	 	  	  	 'tab-discount':{
	 	  	  	 	   templateUrl:'template/dislistin.html',
	 	  	  	 	   controller:'ctrl_dislistin'
	 	  	  	 }
	 	  	  }
	 	  })
	 	  .state('tabs.free1',{
	 	  	   url:'/free1',
	 	  	   views:{
	 	  	   	  'tab-free1':{
	 	  	   	  	  templateUrl:'template/free1.html',
	 	  	   	  	  controller:'ctrl_free1'
	 	  	   	  }
	 	  	   }
	 	  })
	 	  .state('tabs.freelist1',{
	 	  	  url:'/free1/:id',
	 	  	  views:{
	 	  	  	 'tab-free1':{
	 	  	  	 	   templateUrl:'template/freelist1.html',
	 	  	  	 	   controller:'ctrl_freein1'
	 	  	  	 }
	 	  	  }
	 	  })
	 	  .state('tabs.free2',{
	 	  	   url:'/free2',
	 	  	   views:{
	 	  	   	   'tab-free2':{
	 	  	   	   	   templateUrl:'template/free2.html',
	 	  	   	   	   controller:'ctrl_free2'
	 	  	   	   }
	 	  	   }
	 	  })
	 	  .state('tabs.freelist2',{
	 	  	  url:'/free2/:id',
	 	  	  views:{
	 	  	  	 'tab-free2':{
	 	  	  	 	   templateUrl:'template/freelist2.html',
	 	  	  	 	   controller:'ctrl_freein2'
	 	  	  	 }
	 	  	  }
	 	  })
	 	  .state('tabs.center',{
	 	  	 url:'/center',
	 	  	 views:{
	 	  	 	  'tab-center':{
	 	  	 	  	   templateUrl:'template/center.html'
	 	  	 	  }
	 	  	 }
	 	  })
	 	  $urlRouterProvider.otherwise('/tab/home')
})
.controller('ctrl_home',["$scope","$http",function($scope,$http){
	 $http({
	  	 url:'test.json'
	  }).success(function(data){
	  	 $scope.lb_arr = data.home_lb
	  })
	  $http({
	  	 url:'test.json'
	  }).success(function(data){
	  	 $scope.arr = data.home
	  })
	  $http({
	  	 url:'test.json'
	  }).success(function(data){
	  	 $scope.arr0 = data.home_icon1
	  })
	  $http({
	  	 url:'test.json'
	  }).success(function(data){
	  	 $scope.arr1 = data.home_icon2
	  })
	  
}])
.controller('ctrl_homein',["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	$http({
		url:'test.json'
	}).success(function(data){
		$scope.str=data.home[$stateParams.id].img;
		$scope.str0=data.home[$stateParams.id].price;
		$scope.str1=data.home[$stateParams.id].title
	})
}])
.controller('ctrl_dis',["$scope","$http",function($scope,$http){
	 $http({
	 	 url:'test.json'
	 }).success(function(data){
	 	 $scope.dis_arr = data.discount
	 })
}])
.controller('ctrl_disin',["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	$http({
		url:'test.json'
	}).success(function(data){
		$scope.str1=data.discount[$stateParams.id].title;
		$scope.banner=data.discount[$stateParams.id].banner;
		$scope.arr_lisin = data.discount[$stateParams.id].name;
	})
}])
.controller('ctrl_dislistin',["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	$http({
		url:'test.json'
	}).success(function(data){
		$scope.str=data.discount.name[$stateParams.id].img;
		$scope.str0=data.discount.name[$stateParams.id].price;
		$scope.str1=data.discount.name[$stateParams.id].title;
		
	})
}])
.controller('ctrl_free1',["$scope","$http","$stateParams",function($scope,$http){
	 $http({
	 	 url:'test.json'
	 }).success(function(data){
	 	 $scope.arr = data.free1
	 })
}])
.controller('ctrl_freein1',["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	$http({
		url:'test.json'
	}).success(function(data){
		$scope.str=data.free1[$stateParams.id].img;
		$scope.str0=data.free1[$stateParams.id].price;
		$scope.str1=data.free1[$stateParams.id].title;
		
	})
}])
.controller('ctrl_free2',["$scope","$http","$stateParams",function($scope,$http){
	 $http({
	 	 url:'test.json'
	 }).success(function(data){
	 	 $scope.arr = data.free2
	 })
}])
.controller('ctrl_freein2',["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	$http({
		url:'test.json'
	}).success(function(data){
		$scope.str=data.free2[$stateParams.id].img;
		$scope.str0=data.free2[$stateParams.id].price;
		$scope.str1=data.free2[$stateParams.id].title
	})
}])

.controller('login',["$scope","$http",function($scope,$http){
	$scope.login=function(){
		var _uname = document.getElementById("username").value;
		var _passwd = document.getElementById("password").value;
		console.log(_uname);
		console.log(_passwd);
		var http;
		if(window.XMLHttpRequest){
			http = new XMLHttpRequest();
		}else{
			http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		http.onreadystatechange = function(){
			if(http.readyState == 4 && http.status == 200){
				//TODO
				console.log(http.responseText);
				console.log(111)

			}
		}
		http.open('POST',"loginapp.php",true);
		http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		http.send("username="+_uname+"&passwd="+_passwd);
	}
}])
