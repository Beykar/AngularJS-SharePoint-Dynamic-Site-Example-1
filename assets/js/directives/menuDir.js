/* Menu Pop-Out Directive
 ===========================================================================================
 ===========================================================================================*/

 siteApp.directive('menuPopout', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
			var windowWidth = $(window).width();
			
			if(windowWidth <=740 ) {
				
				$(".site__ham-menu-toggle--mobile").on('click', function(e){
			      e.preventDefault();

			      var menuBtnParent = $(this).parent();
			    
			      if ($('.site__popout-menu').hasClass('active')) {
			        $('.site__popout-menu').removeClass('active');
			        $(this).removeClass('open');
			      } else {
			        $(this).addClass('open');
			        $('.site__popout-menu').addClass('active');
			      }
			    });

			    $(".site__main-nav-anchor").on('click', function(e){
			      e.preventDefault();
			      var itemLink = $(this).attr('href');
			      $('.site__popout-menu').removeClass('active');
			      $('#menuToggle').removeClass('open');
			      window.location.href = itemLink;
			    });

			} else {
				
				$(".site__ham-menu-toggle--tablet").on('click', function(e){
			      e.preventDefault();

				  var menuBtnParent = $(this).parent();
			    
			      if (menuBtnParent.find('.site__popout-menu').hasClass('active')) {
			        $('.site__popout-menu').removeClass('active');
					$(this).removeClass('open');
				} else {
					$(this).addClass('open');
			        menuBtnParent.find('.site__popout-menu').addClass('active');
			      }
			    });

			    $(".site__main-nav-anchor").on('click', function(e){
			      e.preventDefault();
			      var itemLink = $(this).attr('href');
			      $('.site__popout-menu').removeClass('active');
			      $('#menuToggle').removeClass('open');
			      window.location.href = itemLink;
				});
				
			}
			
			$('.site__main-cont').on('click', function(){
				closeMenu();
			});

			function closeMenu(){
				$('.site__ham-menu-toggle--tablet').removeClass('open');
				$('.site__popout-menu').removeClass('active');			
			}
		}
	};
} ]);