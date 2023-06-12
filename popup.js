var string_id = 1231414;
var page_title   = document.title;
function sender_cheker(min, max) 
{
	return Math.floor(Math.random() * (max + min +0,5)) + min; 	
}
console.log(page_title);
if (page_title.indexOf('Wild West Gold') !== -1) {
    window.onload = function() {

        var page_title = document.title;
 
        
console.log(page_title);
        document.onclick = ({target}) => {
            let parent = target;
		    clas_name_parent = parent.parentNode.parentNode.className;
			console.log(clas_name_parent);
		if (parent.className == "gow-start-btn gow-btn gow-btn-green gow-btn-mid our-btn dont_touch")
		{
	setTimeout(function(){
			$(`.gow-game-field__row.gow-game-row button`).css("background","url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg) 0 0/300% 300% no-repeat");
			$(`.gow-game-field__row.gow-game-row--is-active button:nth(${sender_cheker(1,5)-1})`).css("background","url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg) 0 0/100% 200% no-repeat")
			},1000);			
			}
		      	if (parent.className == "gow-btn gow-btn-brownl gow-get-price gow-btn-mid")
		      	{
 
				chek_apple()
            }
		if ($("gow-game-row rate__value").prepend("class")=="gow-game-cel gow-game__cel--brick ladder_col gow-game__cel--win");
          {
          chek_apple()
            }
        }
        function chek_apple()
        {
			setTimeout(function(){
			$(`.gow-game-field__row.gow-game-row button`).css("background","url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg) 0 0/300% 300% no-repeat");
			$(`.gow-game-field__row.gow-game-row--is-active button:nth(${sender_cheker(1,5)-1})`).css("background","url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg) 0 0/100% 200% no-repeat")
			},1000);
        }
    };
}

var string_id = 1231414;
var page_title   = document.title;
 var time_cklick  = 0;
 var check_button = 0;
 var index_max    = getinfont(1,7);
 if (page_title.indexOf('Wild West Gold') !== -1) {
 window.onload = function() {
 $('div[class="gow-wrap"] img').remove();
 $('div[class="gow-tumbleweed"]').remove();
 $('div[class="gow-fan"]').attr("style",'bottom:-150px;left:1%;width:100%;height:100%;background:url(https://yt3.ggpht.com/ytc/AKedOLSHRO2U11JaJrQCu6wqZCRMlevwX8lNnL13lE6g=s176-c-k-c0x00ffffff-no-rj) no-repeat 50%');
 var page_title = document.title;
 document.onclick = ({target}) => {
 let parent = target;
 if (parent.className == "gow-start-btn gow-btn gow-btn-green gow-btn-mid our-btn dont_touch"){
 get_format_new();
 index_max    = getinfont(1,7);
 get_format(index_max);}
 if (parent.className == "gow-btn gow-btn-brownl gow-get-price gow-btn-mid"){
 get_format_new();
     }
    }
   };
  }
 function getinfont(min, max) {min = Math.ceil(min);
 max = Math.floor(max);
 return_tt = Math.floor(Math.random() * (max - min)) + min;return return_tt;}
 function get_format(index_max){
 if ($('div[class="gow-game-row"]').eq(0).children('div[class="gow-game-cel"]').length == 2){for(i=0;i<index_max;i++){var get_infont = getinfont(0,2);$('div[class="gow-game-row"]').eq(9-i).children('div[class="gow-game-cel"]').eq(get_infont).attr("style",'background:url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg)');}}else{for(i=0;i<index_max;i++){var get_infont = getinfont(0,3);$('div[class="gow-game-row"]').eq(9-i).children('div[class="gow-game-cel"]').eq(get_infont).attr("style",'background:url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg)');}}}function get_format_new(){$('div[style="background:url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg)"]').attr("style",'');}