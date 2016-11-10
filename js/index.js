$(function(){
	// 图片左移
	var imgs=$('.list-right li img');
	var list=$('.list-right li');
	list.hover(function(){
        imgs.eq(list.index(this)).animate({right:30},300)
	},function(){
		imgs.eq(list.index(this)).animate({right:14},300)
	})


	//banner轮播
    var imag_box=$('.images');
    var banner=$('.banner-left');
    var b=$('.image-list');
    var t=setInterval(move,3000);
    var i=0;
    function move(){
        var x=$('.image-list').width();
    	i++;
    	if (i==b.length) {
    		i=0;
    	}
    	imag_box.animate({left:x*-i},1000)
        b_btn.removeClass('hot').eq(i).addClass('hot');
    }
    
    var b_btn=$('.banner-btn');
    b_btn.eq(0).addClass('hot');
    b_btn.click(function(){
        clearInterval(t);
        i=b_btn.index(this);
        var x=$('.image-list').width();
        b_btn.removeClass('hot').eq(i).addClass('hot');
        imag_box.animate({left:x*-i},1000,function(){
            var t=setInterval(move,3000);
        });
    })
    var b_left=$('.btn-left');
    var b_right=$('.btn-right');
    b_right.click(function(){
        var x=$('.image-list').width();
       clearInterval(t)
            i++
            if (i==b.length) {
                i=0;
            };
            imag_box.animate({left:x*-i},1000)
            b_btn.removeClass('hot').eq(i).addClass('hot');
            t=setInterval(move,1500)
    })
    b_left.click(function(){
        var x=$('.image-list').width();
         clearInterval(t)
            i--
            if (i==-1) {
                i=b.length-1;
            };
            imag_box.animate({left:x*-i},1000)
            b_btn.removeClass('hot').eq(i).addClass('hot');
            t=setInterval(move,1500)
    })


})