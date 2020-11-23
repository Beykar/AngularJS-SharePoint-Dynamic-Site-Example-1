/* Financial Ref Doc Factory
======================================================================================
======================================================================================
*/

siteApp.factory('financialRefData', function($http){
	return {
		getFinancialRefData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('Lst_Financial-Reference-Documents')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});