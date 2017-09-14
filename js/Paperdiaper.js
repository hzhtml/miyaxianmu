var index=0;
var timer=setInterval(function(){
	index++;
	if(index==$("#up li").length){
		index=0;
	}
	$("#up li").eq(index).addClass("current").siblings().removeClass("current");
	$("#box li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
},2000)

$(".nav-main").hide();
$(".nav-list").on("mouseenter",".nav-title",function(){
	$(".nav-main").show();
})
$(".nav-list").on("mouseleave",".nav-title",function(){
	$(".nav-main").hide();
})
