/* Home Controller
====================================================================================================
==================================================================================================*/

siteApp.controller('siteAreaCtrl', function (pageIntroData, tabContentData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.tabContentArr = [];
    $scope.aboutsite = false;
   
    //console.log('state params 33', $stateParams);

    $scope.siteArea = $stateParams.siteArea;

    pageIntroData.getPageIntroData().then(function(data){

        $scope.pageData = $filter('filter')(data.d.results, {'State_x002d_Name' : $scope.siteArea})[0];

        //console.log('$scope.pageData ', $scope.pageData);
    });


    tabContentData.getTabContentData().then(function(response){
        //console.log('tab data ', response.d.results);
        angular.forEach(response.d.results, function(value, key){
            if(value.Page_x002d_Name == $scope.siteArea){
                var tabObj = {
                    ID: value.ID,
                    Title : value.Title,
                    Description: value.Description
                }

                $scope.tabContentArr.push(tabObj);
            }
            if(value.ID == 8 || value.ID == 9){
                $scope.aboutsite = true;
                $scope.tabContentArr = $scope.tabContentArr.reverse();
            }
        });

        //console.log('tab arr ', $scope.tabContentArr);
    });
   
});  

