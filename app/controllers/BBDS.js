app.controller('bbdsCtrl', function($scope, $http) {
    

    
    
    $scope.visibility_status = false;
    
    $scope.getBusinessList = function(){
        
            //SampleJSON
         //https://api.myjson.com/bins/2wjgv
        //https://api.myjson.com/bins/3f8ut
        //http://localhost:8081/baseBusinesses/all/details
         $http.get("http://localhost:8081/baseBusinesses/all/details")
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
         });

    };
    
    
     $scope.getBusinessListByTown = function(townParam){
        //http://localhost:8081/baseBusinesses/all/details
         $http.get("http://localhost:8081/baseBusinesses/all/details/towns/"+townParam)
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
         });

    };
    
    $scope.getBusinessById = function(idParam){
        //http://localhost:8081/baseBusinesses/all/details
         $http.get("http://localhost:8081/baseBusinesses/"+idParam+"/details/")
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
         });

    };
    
    $scope.getBusinessByCounty = function(countyParam){
        //http://localhost:8081/baseBusinesses/all/details
         $http.get("http://localhost:8081/baseBusinesses/all/details/counties/"+countyParam)
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
         });

    };
    
    $scope.getBusinessByRegion = function(regionParam){
        //http://localhost:8081/baseBusinesses/all/details
         $http.get("http://localhost:8081/baseBusinesses/all/details/regions/"+regionParam)
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
         });

    };
    

    
    
     
});


