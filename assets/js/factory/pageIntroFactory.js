/* Page Intro Factory
======================================================================================
======================================================================================
*/

siteApp.factory('pageIntroData', function($http){
	return {
		getPageIntroData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('Lst_FSP-Intro')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});