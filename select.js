var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  
  //Contains the filter options
  $scope.filterOptions = {
    stores: [
      {id : 2, name : 'Show All', rating: 6 },
			{id : 3, name : 'Rating 5', rating: 5 },
      {id : 4, name : 'Rating 4', rating: 4 },
      {id : 5, name : 'Rating 3', rating: 3 },
      {id : 6, name : 'Rating 2', rating: 2 },
      {id : 7, name : 'Rating 1', rating: 1 } 
    ]
  };
  
  //Contains the sorting options
  $scope.sortOptions = {
    stores: [
      {id : 1, name : 'Price Highest to Lowest' },      
      {id : 2, name : 'Price Lowest to Highest' },
      ]
  };
  
  //Mapped to the model to filter
  $scope.filterItem = {
    store: $scope.filterOptions.stores[0]
  }
  
  //Mapped to the model to sort
  $scope.sortItem = {
    store: $scope.sortOptions.stores[0]
  };
  
  //Watch the sorting model - when it changes, change the
  //ordering of the sort (descending / ascending)
  $scope.$watch('sortItem', function () {
    console.log($scope.sortItem);
    if ($scope.sortItem.store.id === 1) {
      $scope.reverse = true;
    } else {
      $scope.reverse = false;
    }
  }, true);
  
  //Custom filter - filter based on the rating selected
  $scope.customFilter = function (data) {
    if (data.rating === $scope.filterItem.store.rating) {
      return true;
    } else if ($scope.filterItem.store.rating === 6) {
      return true;
    } else {
      return false;
    }
  };  
  
  //The data that is shown
  $scope.data = [
    {
      name: "product1",
      price: 198,
      rating: 1
    },
    {
      name: "product2",
      price: 200,
      rating: 5
    },
    {
      name: "product3",
      price: 200,
      rating: 2
    },
    {
      name: "product4",
      price: 10,
      rating: 3
    },
    {
      name: "product5",
      price: 200,
      rating: 3
    },
    {
      name: "product6",
      price: 400,
      rating: 5
    }
  ];
});
