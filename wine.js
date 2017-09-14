(function () {'use strict';

 angular
  .module('myApp', [])
  .controller('WineCtrl', WineCtrl)
  .filter('capitalizeFirst', capitalizeFirstFilter);

// Functions - Definitions
function capitalizeFirstFilter() {
  return function _doFilter(str) {
    return str && (str.charAt(0).toUpperCase() + str.substring(1));
  };
}

function WineCtrl() {
  // Variables - Private
  var self = this;
  
  // Variables - Public
  self.filter = {};
  self.wines = [
    {name: 'Wine A', category: 'red', location:'chennai'},
    {name: 'Wine B', category: 'red', location:'london'},
    {name: 'Wine C', category: 'white', location:'chennai'},
    {name: 'Wine D', category: 'red', location:'kolkata'},
    {name: 'Wine E', category: 'red', location:'chennai'},
    {name: 'Wine F', category: 'white', location:'delhi'},
    {name: 'Wine G', category: 'champagne', location:'delhi'},
    {name: 'Wine H', category: 'champagne', location:'chennai'}    
  ];
  
  // Functions - Public
  self.filterByProperties = filterByProperties;
  self.getValuesFor = getValuesFor;
  
  // Functions - Definitions
  function filterByProperties(wine) {
    var activeFilterProps = Object.
      keys(self.filter).
      filter(function (prop) { return !noFilter(self.filter[prop]); });

    // Use this snippet for matching with AND
    return activeFilterProps.
      every(function (prop) { return self.filter[prop][wine[prop]]; });
    // Use this snippet for matching with OR
    //return !activeFilterProps.length || activeFilterProps.
    //  some(function (prop) { return self.filter[prop][wine[prop]]; });
  }
    
  function getValuesFor(prop) {
    return (self.wines || []).
      map(function (wine) { return wine[prop]; }).
      filter(function (value, idx, arr) { return arr.indexOf(value) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
}

}());
