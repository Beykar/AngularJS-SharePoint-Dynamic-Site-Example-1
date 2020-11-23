/* Teams Org/Docs Factory
======================================================================================
======================================================================================
*/

siteApp.factory('teamsData', function($http){
	return {
		getTeamsChartData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('UKI-site-Teams-Charts-Library')/items?$top=1000&$select=*,Title,Modified,FileLeafRef,FieldValuesAsText/FileRef,FieldValuesAsText/FileRef/Title&$expand=FieldValuesAsText", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		},
		getTeamsDocsData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('UKI-site-Teams-Documents-Library')/items?$top=1000&$select=*,Title,Modified,FileLeafRef,FieldValuesAsText/FileRef,FieldValuesAsText/FileRef/Title&$expand=FieldValuesAsText", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}				
	}
	
});