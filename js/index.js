$(function(){

	// 图片放大
	var img=$(".banner img");
	var div=$('.banner img-box')
	div.hover(function(){
        img.eq(div.index(this)).animate({right:30},300)
	},function(){
		img.eq(div.index(this)).animate({right:14},300)
	})
	
	
	// 图片左移
	var imgs=$('.list-right li img');
	var list=$('.list-right li');
	list.hover(function(){
        imgs.eq(list.index(this)).animate({right:30},300)
	},function(){
		imgs.eq(list.index(this)).animate({right:14},300)
	})




})