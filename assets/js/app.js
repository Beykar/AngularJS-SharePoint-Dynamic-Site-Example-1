var siteApp = angular.module('siteApp', ['ngAnimate', 'ui.router', 'ngSanitize', 'ui.bootstrap', 'ngAnimate']);

var appCacheVersion = '25-08-20-1827';

//this is to allow the $location.search().q to work when entering a search term
siteApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false
      });    
  }]);
  
  siteApp.filter('trusted', ['$sce', function($sce){
      var div = document.createElement('div');
      return function(text) {
          div.innerHTML = text;
          return $sce.trustAsHtml(div.textContent);
      }
  }]);
  
  siteApp.filter('removeHTMLTags', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });
  
  siteApp.filter('limitHtml', function() {
    return function(text, limit) {
  
        var changedString = String(text).replace(/<[^>]+>/gm, '');
        var length = changedString.length;
  
        return length > limit ? changedString.substr(0, limit - 1)+ '....' : changedString;
    }
  });

  siteApp.run(function($rootScope, $window) {

    $rootScope.$on('$stateChangeSuccess', function () {
  
      var interval = setInterval(function(){
        if (document.readyState == 'complete') {
          $window.scrollTo(0, 0);
          clearInterval(interval);
        }
      }, 200);
  
    });
    
  });
  
  siteApp.config(function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.hashPrefix('');
    $stateProvider

    .state('/',{
        url: "/SitePages/Index.aspx",
        templateUrl: "https://sites.ey.com/sites/UKIsite/SiteAssets/site-refresh-assets/assets/js/partials/homePartial.html?c=" + appCacheVersion
    })
    .state('home', {
        url: "/SitePages/Index.aspx/home",
        templateUrl: "https://sites.ey.com/sites/UKIsite/SiteAssets/site-refresh-assets/assets/js/partials/homePartial.html?c=" + appCacheVersion
    })
    .state('site-area', {
      url: "/SitePages/Index.aspx/site-area/:siteArea",
      templateUrl: "https://sites.ey.com/sites/UKIsite/SiteAssets/site-refresh-assets/assets/js/partials/siteAreaPartial.html?c=" + appCacheVersion
    })
    .state('teams-area', {
      url: "/SitePages/Index.aspx/teams-area/:teamsArea",
      templateUrl: "https://sites.ey.com/sites/UKIsite/SiteAssets/site-refresh-assets/assets/js/partials/teamsAreaPartial.html?c=" + appCacheVersion
    })
    .state('site-ref-doc', {
      url: "/SitePages/Index.aspx/site-ref-doc/:refDoc",
      templateUrl: "https://sites.ey.com/sites/UKIsite/SiteAssets/site-refresh-assets/assets/js/partials/siteDocPartial.html?c=" + appCacheVersion
    })


    // $urlRouterProvider.otherwise("/SitePages/Index.aspx/home");
  
  });