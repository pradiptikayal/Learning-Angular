

var app=angular
         .module("mymodule",[])
         .filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
})
		 

        .controller("mycontroller",function($scope){
			 
			  
             var  employees=[
                 {name:"Ben",gender:"Male",salary:"55000",city:"London"},
                 {name:"Sara",gender:"Female",salary:"68000",city:"Chennai"},
                 {name:"Mark",gender:"Male",salary:"57000",city:"London"},
                 {name:"Pam",gender:"Female",salary:"63000",city:"Chennai"},
                 {name:"Todd",gender:"Male",salary:"60000",city:"London"}
                                  
             ];
			 $scope.employees=employees;
			 var countryList=["India","Afganistan","bangladesh"];
			 $scope.countryList=countryList;
			 $scope.complete=function(string){
				 var output=[];
				 angular.forEach($scope.countryList,function(country){
					 if(country.toLowerCase().indexOf(string.toLowerCase())>=0)
					 {
						 output.push(country);
					 }
				 });
				 $scope.filtercountry=output;
			 }
			 
			 $scope.filltextbox=function(string){
				 $scope.country=string;
				 $scope.hidethis=true;
			 }
             
		 });