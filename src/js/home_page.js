$(function(){
		var slideBox = $(".slideBox");
		var ul = slideBox.find("ul");
		var oneWidth = slideBox.find("ul li").eq(0).width();
		var number = slideBox.find(".spanBox span");
		var timer = null;
		var sw = 0;                    
		//每个span绑定click事件，
		number.on("click",function (){
		$(this).addClass("active").siblings("span").removeClass("active");
		sw=$(this).index();
		ul.animate({
			   "right":oneWidth*sw, 
				  });
		});
		//左右按钮
		$(".next").stop(true,true).click(function (){
			sw++;
			if(sw==number.length){sw=0};
			number.eq(sw).trigger("click");
			});
	   $(".prev").stop(true,true).click(function (){
		   sw--;
		   if(sw==number.length){sw=0};
		   number.eq(sw).trigger("click");
		   });
	   //定时器
	   timer = setInterval(function (){
		   sw++;
		   if(sw==number.length){sw=0};
		   number.eq(sw).trigger("click");
		   },500);
	   //hover事件完成悬停和左右图标的动画效果
	   slideBox.hover(function(){
		   $(".next,.prev").animate({
			   "opacity":1,
			   },200);
		   clearInterval(timer);
		   },function(){
			   $(".next,.prev").animate({
				   "opacity":0.5,
				   },500);
		   timer = setInterval(function (){
				sw++;
				if(sw==number.length){sw=0};
				number.eq(sw).trigger("click");
		   },3000);
			   })




	//    ajax获取信息
			$.getJSON("home_page.json",function(data){
				// console.log(data);
            $.each(data,function(index,value){
			//    console.log(data[index].type);
				let str = `
				<ul>
					<li><a href="#"><img src="${data[index].src}" alt=""></a></li>
					<li><a href="#">${data[index].type}</a></li>
					<li>${data[index].price}<span>总销量：${data[index].count}</span></li>
				</ul>
				`
				$('.shoes-xx-xx').append(str);
				$('.bags-xx-xx').append(str);
			})
        }
        
    );
 })



