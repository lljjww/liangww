jQuery(document).ready(function($) {
	$.F_SIZE(960);

	$banner_bg_inner = $('#banner_bg_inner');
	$banner_bg = $('#banner_bg');
	$banner_left = $('#banner_left');
	$banner_right = $('#banner_right');
	$banner_buttom = $('#banner_buttom');

	$banner_buttom.children().eq(0).css('background', 'blue');
	$banner_buttom.children().eq(1).css('background', 'red');
	$banner_buttom.children().eq(2).css('background', 'green');
	$banner_buttom.children().eq(3).css('background', 'purple');
	$banner_buttom.children().eq(4).css('background', 'white');

	var banner_bg = document.getElementById('banner_bg');
	var banner_buttom = document.getElementById('banner_buttom');
	var spans = banner_buttom.getElementsByTagName('div');
	var time=null;
	var time2=null;
	var auto = 0;

	important();
	function important(){
		time = setInterval(add, 1500)
	}

	function add(){
		auto++;
		if(auto==$banner_bg_inner.children('img').length){
			auto=1;
			$banner_bg.scrollLeft(0);
		}
		color(auto);
		change();
		move($banner_bg.scrollLeft(),auto*$banner_bg_inner.children().eq(0).width());
	}

	function move(start,end){
		var start=start;
		var end = end;
		var step = 0;
		var maxstep = 10;
		var change = (end-start)/maxstep;

		if(time2){
			clearInterval(time2);
			time2=null;
		}

		function movego(){
			step++;
			banner_bg.scrollLeft+=change;
			if(step==maxstep){
				clearInterval(time2);
				time2=null;
			}
		}

		time2 = setInterval(movego, 20);
	}

	$banner_left.click(function(event) {
		clearInterval(time);
				clearInterval(time2);
				auto-=2;
				if(auto==-2){
					auto=$banner_bg_inner.children().length-3;
				}
				add();
				important();
	});

	$banner_right.click(function(event) {
			clearInterval(time);
			clearInterval(time2);
			add();
			important();
	});

	function color(numspan){
			$banner_buttom.children().each(function(index, el) {
				$(this).css('opacity', '0.3');	
				// $(this).css('background', 'blue');
			});
			if(numspan==5){
				numspan=0
			}
			$banner_buttom.children().eq(numspan).css('opacity', '1');
	}


	function change(){
		for(var i=0;i<spans.length;i++){
					spans[i].index = i;
					spans[i].onclick = function(){
						clearInterval(time);
						clearInterval(time2);
						auto=this.index-1;
						add();
						important();
					}
		}
	}


});