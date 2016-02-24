app.controller('gtsCtrl', function($scope, $http) {
    
    $scope.getGeoTag = function(addressParam){
        //http://localhost:8081/baseBusinesses/all/details
         $http.get("http://localhost:8082/geoTaggings/addresses/"+addressParam)
                      .then(function (response) {
                        $scope.g_cords_list = response.data;
                        $scope.query_address = addressParam;
//                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
//                        $scope.visibility_status = true;
         });

    };
    
});