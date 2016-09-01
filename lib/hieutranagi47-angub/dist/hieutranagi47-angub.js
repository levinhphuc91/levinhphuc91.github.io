'use strict';
/*! hieutranagi47-angub 2016-01-11 */
angular.module('hieutranagi47-angub', ['ui.bootstrap']);

'use strict';
angular.module('hieutranagi47-angub').directive('htTable', function () {
  return {
    restrict: 'E', //E = element, A = attribute, C = class, M = comment
    scope: {
      foo:     "=",
      data:    "=",
      options: "="
    },
    templateUrl: 'lib/hieutranagi47-angub/dist/templates/htTable.html',
    link: function(scope, element, attrs) {
      // Establish default options for all GBST area charts
      if (typeof scope.options.header            === undefined) scope.options.header = {};
      if (typeof scope.options.header.columnName === undefined) scope.options.header.columnName = ['Column_1', 'Column_2', 'Column_3', '...'];
      if (typeof scope.options.title             === undefined) scope.options.title = "Table title";
    }
  };
});

window.HieuTranAGI47 = {
  helpers: {
    helperA: function(param1, param2){
      //do some thing and return data.
    },
    sum2Number: function(a,b){
      return a+b;
    }
    
  }
};
