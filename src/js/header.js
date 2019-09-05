
$(function(){
	$(window).scrollTop(0);
	// 顶部隐藏
	$('.side-navigation img:first').click(function(){
		$(this).css("display" , "none");
		$('.first-lin').css('display','none')
	})
	$('.side-navigation img').eq(1).click(function(){
		$(this).css("display" , "block");
		$('.first-lin').css('display','block');
		$('.side-navigation img:first').css('display','block');
	})
	// 顶部导航
	$('.navigation .navigation-top-t .navigation-top a').hover(function(){
		$(this).css('color','#cd842d')
	},function(){
		$(this).css('color','black')
	})
	//登陆注册按钮
	$('.navigation .navigation-top-t .navigation-top a').eq(1).click(function(){
		location.href = 'register.html';
	})
	$('.navigation .navigation-top-t .navigation-top a').eq(0).click(function(){
		location.href = 'login.html';
	})
	// 微信商城
	$('.navigation .navigation-top-t .navigation-top a').eq(3).hover(
			function(){
				$('.navigation-code').slideDown(200)},
			function(){
				$('.navigation-code').slideUp(200)}
		)
	// 列表导航
	$('.navigation-bottom .navigation-bottom-ul > li').each(function(index,value){
		$(value).hover(function(){
			$(this).children('ul').css('visibility','visible')
		},function(){
			$(this).children('ul').css('visibility','hidden')
		});
	})
	$('.navigation-bottom .navigation-bottom-ul > li > ul a').each(function(index,value){
		$(value).hover(function(){
			$(this).css('text-decoration','underline')
		},function(){
			$(this).css('text-decoration','none')
		});
	})
	// 侧边导航栏
	$('.side-navigation i').hover(function(){
		$(this).css({'background':'url(img/logo2017.png) no-repeat -79px -1px','background-color':'#ed145b'})
		
	},function(){
		$(this).css({'background':'url(img/logo2017.png) no-repeat 0px -1px','background-color':'#444851'})
	})
	$('.side-navigation-cart').hover(function(){
		$(this).css({'background-color':'#ed145b'})
		
	},function(){
		$(this).css({'background-color':'#444851'})
	})
	$('.side-navigation-cart').hover(function(){
		$('.side-navigation-cart b').css({'background':'url(img/logo2017.png) no-repeat -79px -40px'})
		
	},function(){
		$('.side-navigation-cart b').css({'background':'url(img/logo2017.png) no-repeat 0px -40px'})
	})
	//我的资产我的足迹我的收藏
	
	 $('.side-navigation ul li a').eq(0).hover(
	 	function(){
	 		$(this).css('background','url(img/logo2017.png) no-repeat -79px -114px')
	 	},function(){
	 		$(this).css('background','url(img/logo2017.png) no-repeat 0 -114px')
	 });
	$('.side-navigation ul li a').eq(1).hover(
		function(){
			$(this).css('background','url(img/logo2017.png) no-repeat -79px -77px')
		},function(){
			$(this).css('background','url(img/logo2017.png) no-repeat 0 -77px')
	});
	$('.side-navigation ul li a').eq(2).hover(
		function(){
			$(this).css('background','url(img/logo2017.png) no-repeat -79px -150px')
		},function(){
			$(this).css('background','url(img/logo2017.png) no-repeat 0 -150px')
	});
	$('.side-navigation ul li a').eq(3).hover(
		function(){
			$(this).css('background','url(img/kefu.gif) no-repeat -40px 0px')
		},function(){
			$(this).css('background','url(img/kefu.gif) no-repeat 0 0')
	});
	
	$('.side-navigation ul li').each(function(index,value){
		$(value).hover(function(){
			$(this).css('background-color','#ed145b')
		},function(){
			$(this).css('background-color','#444851')
		});
	})
	$('.side-navigation ul li').each(function(index,value){
		$(value).hover(function(){
			$(this).children('span').css('display','block');
			$(this).children('span').animate({left : -92},500);
		},function(){
			$(this).children('span').animate({left : -140},100);
			$(this).children('span').css('display','none')
		});
	})
	$('.side-navigation ul li').eq(3).hover(
	function(){
		$(this).children('u').css('display','block')
	},function(){
		$(this).children('u').css('display','none')
	});
	//底部二维码
	$('.side-navigation .ewm').hover(function(){
		$(this).css('background' , '#ed145b')
		$(this).children('.ewm-ewm').css('display' , 'block')
		$(this).children('em').css('display' , 'block')
	},function(){
		$(this).css('background' , '#444851')
		$(this).children('.ewm-ewm').css('display' , 'none')
		$(this).children('em').css('display' , 'none')
	})
	
	//底部TOP
	$(window).scroll(function(){
		var scrolls = parseInt($(window).scrollTop());
		// console.log(scrolls);
		if(scrolls >=500){
			$('.ewm').css('bottom','40px');
			$('strong').css('display','block');

		}else{
			$('.ewm').css('bottom','0');
			$('strong').css('display','none');
		}
		
		$('strong').click(function(){
			$(window).scrollTop(0);
		})
	})
	// 后期点击事件
	$('.navigation-bottom .navigation-bottom-ul > li').eq(1).click(function(){
		location.href = 'detail_page.html';
	})
})
	