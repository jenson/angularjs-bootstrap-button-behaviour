var firstMod = angular.module("firstMod", []);
 
 firstMod.controller("firstController", function($scope){
 
      
    $scope.assignClass = function(className, type){
	     
		 switch(type){
	         
			 case 1:
				 $scope.btn_clr_txt = className;
				 $scope.btn_clr = className.toLowerCase();
			 break;
			 
			 case 2:
				 $scope.btn_sze_k = className.k;
				 $scope.btn_sze_txt = className.v;
			 break;
			 
			 case 3:
			    $scope.btn_bhvr_txt = className;
				$scope.btn_bhvr = className.toLowerCase();
			 break;
		}	
	
	}
	
	$scope.sayMeeeee = function(){
	  alert("I'm a \u00bb "+document.getElementById("finalBtn").innerHTML.trim()+"!!");
	}

 })