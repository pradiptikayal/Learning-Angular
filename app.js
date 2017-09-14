var app=angular
          .module("myapp",[])
		  .filter('myfilter', function() {
   return function( items, types) {
    var filtered = [];

    angular.forEach(items, function(item) {
       if(types.luxury == false && types.double_suite == false && types.five==false && types.four==false && types.three==false) {
          filtered.push(item);
        }
        else if(types.luxury == true && types.double_suite == false && item.type == 'luxury'){
          filtered.push(item);
        }
        else if(types.double_suite == true && types.luxury == false && item.type == 'double suite'){
          filtered.push(item);
		}
		 else if(types.five==true && item.star=='5' && types.four==false && types.three==false){
			  filtered.push(item);
		 }
		 else if(types.four==true && item.star=='4' && types.five==false && types.three==false){
			  filtered.push(item);
		 }
		 else if(types.three==true && item.star=='3'&& types.four==false && types.five==false){
			  filtered.push(item);
		 }
        
    });

    return filtered;
  };
})
 .controller("mycontroller",function($scope){
	 var  hotels=[
                 {name:"Ben",type:"luxury",star:"5",price:"50000"},
                 {name:"Sara",type:"double suite",star:"3",price:"40000"},
                 {name:"Mark",type:"luxury",star:"4",price:"6000"},
                 {name:"Pam",type:"luxury",star:"5",price:"40000"},
                 {name:"Todd",type:"double suite",star:"3",price:"30000"}
                                  
             ];
			 $scope.hotels=hotels;
			 $scope.types = {luxury: false, double_suite:false, five:false, four:false, three:false};
 });