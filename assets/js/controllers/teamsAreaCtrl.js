/* Teams Area Controller
====================================================================================================
==================================================================================================*/

siteApp.controller('teamsAreaCtrl', function (pageIntroData,  tabContentData, teamsData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.tabContentArr = [];
    $scope.teamsOrgArr = [];
   
    //console.log('state params 555', $stateParams);
   
    $scope.teamsArea = $stateParams.teamsArea;
    //console.log('$scope.teamsArea', $scope.teamsArea);

    pageIntroData.getPageIntroData().then(function(data){

        //console.log('intro data ', data.d.results);

        angular.forEach(data.d.results, function(value, key){
            if(value.State_x002d_Name == $scope.teamsArea){
                $scope.pageData = value;
            }
        });

        // $scope.pageData = $filter('filter')(data.d.results, {'State_x002d_Name' : 'teams'})[0];

       //console.log('$scope.pageData 55677', $scope.pageData);
    });

    tabContentData.getTabContentData().then(function(response){
        //console.log('tab data ', response.d.results);
        angular.forEach(response.d.results, function(value, key){
            if(value.Page_x002d_Name == $scope.teamsArea){
                var tabObj = {
                    ID: value.ID,
                    Title : value.Title,
                    Description: value.Description,
                    TeamName: value.Team_x002d_Name
                }

                $scope.tabContentArr.push(tabObj);
            }
        });

        //console.log('tab arr teams', $scope.tabContentArr);   

        teamsData.getTeamsChartData().then(function(data){

            //console.log('team chart data', data.d.results);
            
            angular.forEach($scope.tabContentArr, function(value, key){
                $scope.teamsChartsArr = [];
                $scope.chartsOutterValue = value;
                angular.forEach(data.d.results, function(value, key){
                    if($scope.chartsOutterValue.TeamName == value.Team_x002d_Name){
                        var teamsChartObj = {
                            Title : value.Title,
                            // TeamsChartUrl : value.FieldValuesAsText.FileRef
                            TeamsChartUrl : value.ServerRedirectedEmbedUrl
                        }
                      $scope.teamsChartsArr.push(teamsChartObj);  
                    }

                    $scope.chartsOutterValue.teamsChartArr = $scope.teamsChartsArr;
                });           
                
            });

            //console.log('$scope.tabContentArr with teams docs ', $scope.tabContentArr);

        });

        teamsData.getTeamsDocsData().then(function(data){

            //console.log(' docs data', data.d.results);
            angular.forEach($scope.tabContentArr, function(value, key){
                $scope.teamsDocsArr = [];
                $scope.docsOutterValue = value;
                angular.forEach(data.d.results, function(value, key){
                    if($scope.docsOutterValue.TeamName == value.Team_x002d_Name){
                        var teamsDocObj = {
                            Title : value.Title,
                            TeamsDocUrl : value.FieldValuesAsText.FileRef,
                            TeamName: value.Team_x002d_Name,
                            DocType: value.Document_x002d_Type
                        }
                        $scope.teamsDocsArr.push(teamsDocObj); 
                        if(teamsDocObj.DocType == 'tools-resources'){
                            $scope.docsOutterValue.resources = true;
                        }; 
                        if(teamsDocObj.DocType == 'policies'){
                            $scope.docsOutterValue.policies = true;
                        };
                        if(teamsDocObj.DocType == 'month-end-close'){
                            $scope.docsOutterValue.monthend = true;
                        };  
                    }

                    $scope.docsOutterValue.teamsDocsArr = $scope.teamsDocsArr;

                });                  
            });

            //console.log('$scope.tabContentArr 333', $scope.tabContentArr);

        });

    });

});  

