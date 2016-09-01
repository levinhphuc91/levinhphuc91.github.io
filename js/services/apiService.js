'use strict';
angular.module('app').factory("dataService", ['$http', '$q',
  function ($http, $q) {
    
//    var domain  = "http://domain:port/v0";
    var domain  = "asset/sampledata";

    /**** PUBLIC METHODS. ***/

    var makeRequest = function(path, params) {
      if (typeof params === 'undefined') params = {};
      return $http({
        method: "get",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        },
        params: params,
        url: domain + "/" + path
      }).then(handleSuccess, handleError);
    };

    return({
      get: makeRequest,
      getWithParams: makeRequest
    });
    
    /**** PRIVATE METHODS. ***/ 
    
    // Transform the error response, unwrapping the application dta from the API response payload. 
    function handleError(response, status) {
      //  Sample format: {data: "callback({'message':'Not found','errorcode':404})", status: 404, headers: function, config: Object, statusText: "Not Found"}
      console.log("Error");
    }

    // Transform the successful response, unwrapping the application data from the API response payload. 
    function handleSuccess(response) {
      return response;
    }
    
  }]
);