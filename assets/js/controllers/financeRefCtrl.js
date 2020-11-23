/* Financial Ref Controller
====================================================================================================
==================================================================================================*/

siteApp.controller('siteRefCtrl', function (pageIntroData, tabContentData, financialRefData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.siteRefDocArr = [];
   
    //console.log('state params 33', $stateParams);
   
    $scope.refDoc = $stateParams.refDoc;

    pageIntroData.getPageIntroData().then(function(data){

        $scope.pageData = $filter('filter')(data.d.results, {'State_x002d_Name' : $scope.refDoc})[0];

        //console.log('$scope.pageData ', $scope.pageData);
    });

    tabContentData.getTabContentData().then(function(response){
        //console.log('tab data ', response.d.results);
        angular.forEach(response.d.results, function(value, key){
            if(value.Page_x002d_Name == $scope.refDoc){
                  $scope.tabContentArr = value;
                }   
        });

        //console.log('tab arr ', $scope.tabContentArr);
    });

    financialRefData.getFinancialRefData().then(function(data){
        //console.log('fin ref doc ', data.d.results);

        angular.forEach(data.d.results, function(value, key){
            var finRefObj = {
                ID: value.ID,
                Title: value.Title,
                Description: value.Description,
                MainContent: value.Main_x002d_Content,
                Link: value.Doc_x002d_Link? value.Doc_x002d_Link.Url : null
            }

            $scope.siteRefDocArr.push(finRefObj);
        });

        $scope.getPopupInfo = function(id){
            $scope.popupInfo = $filter('filter')($scope.siteRefDocArr, {'ID': id})[0];
        }
    });

});  

