app.controller('pcsCtrl', function($scope, $http) {
    
    $scope.getBusinessesByAll = function(townParam){
        //http://localhost:8083/api/processControllers/processA/locationType/town/locationValue/+townParam
         $http.get("http://localhost:8083/api/processControllers/processA/locationType/all/locationValue/All")
                      .then(function (response) {
                        $scope.obj = response.data;
         });

    };
    
    $scope.getBusinessesByTown = function(townParam){
        //http://localhost:8083/api/processControllers/processA/locationType/town/locationValue/+townParam
         $http.get("http://localhost:8083/api/processControllers/processA/locationType/town/locationValue/"+townParam)
                      .then(function (response) {
                        $scope.obj = response.data;
         });

    };
    
     $scope.getBusinessesByCounty = function(countyParam){
        //http://localhost:8083/api/processControllers/processA/locationType/town/locationValue/+townParam
         $http.get("http://localhost:8083/api/processControllers/processA/locationType/county/locationValue/"+countyParam)
                      .then(function (response) {
                        $scope.obj = response.data;
         });

    };
    
     $scope.getBusinessesByRegion = function(regionParam){
        //http://localhost:8083/api/processControllers/processA/locationType/town/locationValue/+townParam
         $http.get("http://localhost:8083/api/processControllers/processA/locationType/region/locationValue/"+regionParam)
                      .then(function (response) {
                        $scope.obj = response.data;
         });

    };
    
});