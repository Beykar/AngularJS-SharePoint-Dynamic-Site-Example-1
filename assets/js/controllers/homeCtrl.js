/* Home Controller
====================================================================================================
==================================================================================================*/

siteApp.controller('homeCtrl', function (pageIntroData, quickLinksData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.quickLinksArr = [];

    pageIntroData.getPageIntroData().then(function(data){
        //console.log('intro data ', data.d.results);
        $scope.introArr = data.d.results;
    });

    quickLinksData.getQuickLinksData().then(function(data){
        //console.log('quick links ', data.d.results);

        angular.forEach(data.d.results, function(value, key){
            var qlObj = {
                Name: value.Title,
                Link: value.Quick_x002d_Link_x002d_Url
            }

            $scope.quickLinksArr.push(qlObj);
        });
    });
   
   
});  

