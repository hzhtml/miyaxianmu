var Ulist=document.getElementById("uu").children;
var index = 0;
var timer=setInterval(function(){
	
	index++;
	if(index==Ulist.length){
		index=0;
	}
//	console.log(index);
	$("#uu li").eq(index).addClass("current").siblings().removeClass("current");
	$("#box li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
},2000)




 
