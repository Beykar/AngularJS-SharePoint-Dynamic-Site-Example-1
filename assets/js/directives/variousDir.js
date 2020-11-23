/* clicked and hover Directive
 ===========================================================================================
 ===========================================================================================*/

siteApp.directive('tabClicked', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
            
            $('.site__area-tab-link').css({'font-size':'18px', 'font-family': 'EYInterstate-Light, sans-serif'});
            $('.site__area-tab-link').eq(0).css({'font-size':'20px', 'font-family': 'EYInterstate-Bold, sans-serif'});

            $('.site__area-tab-link').click(function(){
                $('.site__area-tab-link').css({'font-size':'18px', 'font-family': 'EYInterstate-Light, sans-serif'});
                $(this).css({'font-size':'20px', 'font-family': 'EYInterstate-Bold, sans-serif'});
            });

            $('.teams__tab').css({'font-size':'18px', 'font-family': 'EYInterstate-Light, sans-serif'});
            $('.teams__tab').eq(0).css({'font-size':'20px', 'font-family': 'EYInterstate-Bold, sans-serif'});

            $('.teams__tab').click(function(){
                $('.teams__tab').css({'font-size':'18px', 'font-family': 'EYInterstate-Light, sans-serif'});
                $(this).css({'font-size':'20px', 'font-family': 'EYInterstate-Bold, sans-serif'});
            });
        }	
	};
} ]);

siteApp.directive('iconHover', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
            
            $('.teams__area-home-link').hover(                
                function(){
                $bgColor = $('.teams__area-home-link').attr('data-bg');
                //console.log('$bgColor ', $bgColor);
                $('.teams__area-home-icon').addClass($bgColor);
                },
                function(){
                    $('.teams__area-home-icon').removeClass($bgColor);
                }
            );

            $('.site__area-home-link').hover(                
                function(){
                $bgColor = $('.site__area-home-link').attr('data-bg');
                //console.log('$bgColor ', $bgColor);
                $('.site__area-home-icon').addClass($bgColor);
                },
                function(){
                    $('.site__area-home-icon').removeClass($bgColor);
                }
            );

            $('.site-doc__area-home-link').hover(                
                function(){
                $bgColor = $('.site-doc__area-home-link').attr('data-bg');
                //console.log('$bgColor ', $bgColor);
                $('.site-doc__area-home-icon').addClass($bgColor);
                },
                function(){
                    $('.site-doc__area-home-icon').removeClass($bgColor);
                }
            );
           
        }	
	};
} ]);

siteApp.directive('showPane', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {

            $('.teams__area-tab-pane').removeClass('active');
            $('.teams__area-tab-pane').eq(0).addClass('active');
            $('.teams__tab').eq(0).css('font-family', 'EYInterstate-Bold, sans-serif');

            //$targetPane = $('.teams__area-tab-pane').eq(0);
            $paneHeight = 1100;
            //console.log('$paneHeight', $paneHeight);
            $('.teams__area-tab-left-cont').css({'min-height': $paneHeight+'px'});
           
            $('.teams__tab').click(function(){

                $('.teams__tab').css('font-family', 'EYInterstate-Light, sans-serif');
                $(this).css('font-family', 'EYInterstate-Bold, sans-serif');

                $paneID = $(this).attr('href');
                //console.log('$paneID', $paneID);
                
                    
                    $targetPane = $($paneID); 
                    //console.log('$targetPane ', $targetPane);               
                    $('.teams__area-tab-pane').removeClass('active');              
                    $('.teams__area-tab-content').removeClass('slide-left');

                    setTimeout(function(){
                        $('.teams__area-tab-content').addClass('slide-left');
                        $targetPane.addClass('active');
                    }, 500);
                

                    $paneHeight = $targetPane.height();
                    //console.log('$paneHeight', $paneHeight);
                    $('.teams__area-tab-left-cont').css({'min-height': $paneHeight+'px'});
    

            });

            $('.site__area-tab-pane').removeClass('active');
            $('.site__area-tab-pane').eq(0).addClass('active');
            $('.site__area-tab-link').eq(0).css('font-family', 'EYInterstate-Bold, sans-serif');           
            $('.site__area-tab-left-cont').css({'min-height': '700px'});
           
            $('.site__area-tab-link').click(function(){

                $('.site__area-tab-link').css('font-family', 'EYInterstate-Light, sans-serif');
                $(this).css('font-family', 'EYInterstate-Bold, sans-serif');

                $paneID = $(this).attr('href');
                //console.log('site $paneID', $paneID);
                $targetPane = $($paneID);
                $('.site__area-tab-pane').removeClass('active');

                setTimeout(function(){
                    $('.site__area-tab-content').addClass('slide-left');
                    $targetPane.addClass('active');
                }, 500);
            });
           
            setTimeout(function(){
                $('.site-doc__area-tab-content').addClass('slide-left');
                $('#documents').addClass('active');
            }, 500);
        }	
	};
} ]);

siteApp.directive('quickLinks', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
            
           $('.site__quick-links-trigger').click(function(e){
               e.preventDefault();
                $('.site__quick-links-cont').eq(0).toggleClass('open');                
           });
        }	
	};
} ]);