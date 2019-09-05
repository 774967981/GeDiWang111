$(function(){
	// const $slide = $('.slide-show');
	// // 左右按钮
	 var lefts = $('.slide-show-left');
	 var rights = $('.slide-show-right');
	// // 下标
	 var index = 0;
	// // 所有的li
	// const $lis = $('.slide-show-buttom li');
	// // 所有的图片
	// const $uls = $('.slide-show-top a');
	// const $num = $uls.length;
	// // 获取大图ul
	// const $ul = $('slide-show-top');
	// // 左按钮事件
	lefts.click(function(){
		index--;
		if(index == -1){
			index = $().length -1;
		}
		$('.slide-show > .slide-show-top > li').eq(index).animate({left : -1920},100);
	})
	rights.click(function(){
		index++;
		if(index == $('.slide-show > .slide-show-top > li').length){
			index = 0;
		}
		$('.slide-show > .slide-show-top > li').eq(index).animate({left : 1920},100);
	})





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



