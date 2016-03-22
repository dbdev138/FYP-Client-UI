//This is the main controller for the application registered to the myApp module

app.controller('dealsCtrl', function($scope, $http) {
    
    //The Controller accepts the standard $scope directive as well as the built in angular $http directive
    
    //The following function retrives the groupon data in a JSON format from Wayne Flanagans service and makes it available in the
    //$scope under the object name groupon.
    
    //https://api.myjson.com/bins/1jmc1
    //https://api.myjson.com/bins/31fu1
    //https://retrieval-service.herokuapp.com/retrieve/deals?channel=getaways&division=seattle
    
    //https://api.myjson.com/bins/455in
//    $http.get("https://api.myjson.com/bins/455in")
//                  .then(function (response) {
//    
//    
//                    //Read in Groupon API Data
//                    $scope.stats = response.data;
//                    
//                    //The controller loads synchronously and therefor if I try to inject the groupon data into the chart data source objects
//                    //below as they are being declared the application will break as the Scope.groupon object will not be avialable to them
//                    //I can assign the values within this function and Angular will update the objects itself later
//        
//        
//                    //Assign values to Pie Chart Data
////                    $scope.pieChartDataSource.data[0].label = $scope.groupon[0].shortAnnouncementTitle;
////                    $scope.pieChartDataSource.data[0].value = $scope.groupon[0]['options'][0].discountPercent;
////        
////                    $scope.pieChartDataSource.data[1].label = $scope.groupon[1].shortAnnouncementTitle;
////                    $scope.pieChartDataSource.data[1].value = $scope.groupon[1]['options'][0].discountPercent;
////        
////                    $scope.pieChartDataSource.data[2].label = $scope.groupon[2].shortAnnouncementTitle;
////                    $scope.pieChartDataSource.data[2].value = $scope.groupon[2]['options'][0].discountPercent;
////        
////                    $scope.pieChartDataSource.data[3].label = $scope.groupon[3].shortAnnouncementTitle;
////                    $scope.pieChartDataSource.data[3].value = $scope.groupon[3]['options'][0].discountPercent;
////        
////                    $scope.pieChartDataSource.data[4].label = $scope.groupon[4].shortAnnouncementTitle;
////                    $scope.pieChartDataSource.data[4].value = $scope.groupon[4]['options'][0].discountPercent;
//        
//                    //Assign values to Bar Chart Data
//                    $scope.barChartDataSource.data[0].label = $scope.stats[0].num_records_returned;
//                    $scope.barChartDataSource.data[1].label = $scope.stats[1].num_records_returned;
//                    $scope.barChartDataSource.data[2].label = $scope.stats[2].num_records_returned;        
//                    $scope.barChartDataSource.data[3].label = $scope.stats[3].num_records_returned;
//                    $scope.barChartDataSource.data[4].label = $scope.stats[4].num_records_returned;
//        
//                    $scope.barChartDataSource.data[0].value = $scope.stats[0].runtime_pc;
//                    $scope.barChartDataSource.data[1].value = $scope.stats[1].runtime_pc;
//                    $scope.barChartDataSource.data[2].value = $scope.stats[2].runtime_pc;
//                    $scope.barChartDataSource.data[3].value = $scope.stats[3].runtime_pc;
//                    $scope.barChartDataSource.data[4].value = $scope.stats[4].runtime_pc;
//        
//                    //NOTE: Sometimes the expiresInDays field in the json object is null. This is due to it retrieving old data
//                    //For testing purposes uncomment the below assignments to override these values with hardcodeed ones
//        
////                    $scope.barChartDataSource.data[0].value = 6;
////                    $scope.barChartDataSource.data[1].value = 5;
////                    $scope.barChartDataSource.data[2].value = 10;
////                    $scope.barChartDataSource.data[3].value = 8;
////                    $scope.barChartDataSource.data[4].value = 2;
//        
//
//                    
//    });
    
    
    //Below are the JSON object used to populate the charts
    
    
//    //Define Pie Chart Data Object
//    $scope.pieChartDataSource = {
//        
//      
//            "chart": {
//                "caption": "",
//                "bgcolor": "FFFFFF",
//                "showvalues": "1",
//                "showpercentvalues": "1",   
//                "showborder": "0",
//                "showplotborder": "0",
//                "showlegend": "1",
//                "legendborder": "0",
//                "legendposition": "bottom",
//                "enablesmartlabels": "1",
//                "use3dlighting": "0",
//                "showshadow": "0",
//                "legendbgcolor": "#CCCCCC",
//                "legendbgalpha": "20",
//                "legendborderalpha": "0",
//                "legendshadow": "0",
//                "legendnumcolumns": "3",
//                "palettecolors": "#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78"
//            },
//
//              "data": [{"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""},{"label":"", "value": ""}]  
//            };            
    
    //Define Bar Chart Data Object
    $scope.barChartDataSource = {
      
        "chart": {
//        "caption": "Total footfall in Bakersfield Central",
//        "subCaption": "Last week",
//        "xAxisName": "Day",
//        "yAxisName": "No. of Visitors",
//        "lineThickness": "2",
//        "paletteColors": "#0075c2",
//        "baseFontColor": "#333333",
//        "baseFont": "Helvetica Neue,Arial",
//        "captionFontSize": "14",
//        "subcaptionFontSize": "14",
//        "subcaptionFontBold": "0",
//        "showBorder": "0",
//        "bgColor": "#ffffff",
//        "showShadow": "0",
//        "canvasBgColor": "#ffffff",
//        "canvasBorderAlpha": "0",
//        "divlineAlpha": "100",
//        "divlineColor": "#999999",
//        "divlineThickness": "1",
//        "divLineDashed": "1",
//        "divLineDashLen": "1",
//        "divLineGapLen": "1",
//        "showXAxisLine": "1",
//        "xAxisLineThickness": "1",
//        "xAxisLineColor": "#999999",
//        "showAlternateHGridColor": "0"
    },
        "data": [{"label":"3", "value": "3970"}, {"label":"9", "value": "69"}, {"label":"4", "value": "6970"}, {"label":"9", "value": "6970"},{"label":"9", "value": "2843"}]

    };
    
    
});