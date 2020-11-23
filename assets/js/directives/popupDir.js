/* Menu Pop-up Directive
 ===========================================================================================
 ===========================================================================================*/

 siteApp.directive('popup', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
            $('.site-doc__repo-list--link').click(function(e){
                e.preventDefault();
                $('.site-doc__area-popup').css('display', 'block');
            });

            $('.site-doc__area-popup-link').click(function(e){
                e.preventDefault();
                $('.site-doc__area-popup').css('display', 'none');
            });
		}
	};
} ]);