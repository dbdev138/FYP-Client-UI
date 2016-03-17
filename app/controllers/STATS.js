//This is the main controller for the application registered to the myApp module

app.controller('statsCtrl', function($scope, $http) {
    
    //The Controller accepts the standard $scope directive as well as the built in angular $http directive
    
    //The following function retrives the groupon data in a JSON format from Wayne Flanagans service and makes it available in the
    //$scope under the object name groupon.
    
    //https://api.myjson.com/bins/1jmc1
    //https://api.myjson.com/bins/31fu1
    //https://retrieval-service.herokuapp.com/retrieve/deals?channel=getaways&division=seattle
    
    
//    $http.get("http://localhost:8083/api/processControllers/processA/getStatistics")
//                  .then(function (response) {
//    
//    
//                    //Read in Groupon API Data
//                    $scope.pieStats = response.data;
//                    
//                    //The controller loads synchronously and therefor if I try to inject the groupon data into the chart data source objects
//                    //below as they are being declared the application will break as the Scope.groupon object will not be avialable to them
//                    //I can assign the values within this function and Angular will update the objects itself later
//        
//        
//                    //Assign values to Pie Chart Data
//                    $scope.pieChartDataSource.data[0].label = $scope.groupon[2].shortAnnouncementTitle;
//                    $scope.pieChartDataSource.data[0].value = $scope.groupon[2]['options'][0].discountPercent;
//        
//                    $scope.pieChartDataSource.data[1].label = $scope.groupon[3].shortAnnouncementTitle;
//                    $scope.pieChartDataSource.data[1].value = $scope.groupon[3]['options'][0].discountPercent;
//        
//                    $scope.pieChartDataSource.data[2].label = $scope.groupon[4].shortAnnouncementTitle;
//                    $scope.pieChartDataSource.data[2].value = $scope.groupon[4]['options'][0].discountPercent;
//        
//
//                    
//    });
    
    
    //Below are the JSON object used to populate the charts
    
$scope.barChartDataSource = {
      
        "chart": {
            "caption": "",
            "subCaption": "",
            "yAxisName": "Days",
            "numberPrefix": "",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        "data": [{"label":"4", "value": "456"}, {"label":"6", "value": "432"}, {"label":"34", "value": "421"}, {"label":"32", "value": "123"},{"label":"321", "value": "312"}]

    };
    
});