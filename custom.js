$(function(){
	$("#imgs").mouseover(function(){
		$(".img2").fadeIn("fast");
	});
	$("#imgs").mouseleave(function(){
		$(".img2").fadeOut("fast");
	});
	
	$(".img2").click(function(){
		$(".img3").show();
	});
	$(".img3").click(function(){
		$(".img3").hide();
	});
	
	$(".twitter img").mouseover(function(){
		$(this).attr("src","images/6.png");
	});
	$(".twitter img").mouseleave(function(){
		$(this).attr("src","images/8.png");
	});
});