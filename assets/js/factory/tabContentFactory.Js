/* Tab Content Factory
======================================================================================
======================================================================================
*/

siteApp.factory('tabContentData', function($http){
	return {
		getTabContentData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('Lst_FSP-Tab-Content')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});