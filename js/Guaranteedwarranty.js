$(".nav-main").hide();
$(".nav-list").on("mouseenter",".nav-title",function(){
	$(".nav-main").show();
})
$(".nav-list").on("mouseleave",".nav-title",function(){
	$(".nav-main").hide();
})