jQuery(document).ready(function($) {
	$mask = $('#mask');
	$mask_con = $('#mask_con');
	$button = $('#button');
    $c1 = $('#c1')[0];
    $c2 = $('#c2')[0];
    $c3 = $('#c3')[0];
    $c4 = $('#c4')[0];
    $c5 = $('#c5')[0];
    $c6 = $('#c6')[0];
    $c7 = $('#c7')[0];
    $masks = $('#mask')[0];

      $con_left_one_bottom.click(function(event) {
         $mask.fadeIn(400);
            
         	tan($c1,1,-3);
         	tan($c2,-1,-2);
         	tan($c3,3,-2);
         	tan($c4,-3,2);
         	tan($c5,2,1);
         	tan($c6,2,2);
         	tan($c7,1,3);

         	var time = null;
         	var time1 = null;
            function tan($c,num,num1){
            	            time = setTimeout(function(){
            	            	time1 = setInterval(move, 20);
            	            },1000);
            	            var h = $c;
            		 	    var w = $masks;
            		 	    console.log(h);
            		 	    var oleft = h.offsetLeft;
            		 	    var otop = h.offsetTop;
            		 	    var  maxWidth = w.clientWidth - h.clientWidth;
            		 	    var  maxHeight = w.clientHeight - h.clientHeight;
            	            
            		 	    var directionX = true;
            		 	    var directionY = true;
            		 	    
            		 	    function move(){
            		 	        if(directionX){
            		 	            oleft+=num;
            		 	        }else {
            		 	            oleft-=num;
            		 	        }
            		 	        if(directionY){
            		 	            otop+=num1;
            		 	        }else{
            		 	            otop-=num1;
            		 	        }
            		 	        if(oleft<0 || oleft>maxWidth){
            		 	            // console.log()
            		 	            directionX =!directionX;
            		 	        }
            		 	        if(otop<0 || otop>maxHeight){
            		 	            directionY =! directionY;
            		 	        }
            		 	        h.style.left=oleft+'px';
            		 	        h.style.top=otop+"px";
            		 	    }
            }


      });
      		 	    $button.click(function(event) {
      		// clearTimeout(time1);
      		// tim1=null;
      		// $mask.fadeOut(400);
      	location.reload();
      });
});