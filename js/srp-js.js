$(".sla-pass-rate").on("click",function(){
	$(".slidepanel-overlay").toggleClass("hide");
	$(".sla-pass").toggleClass("hide");
	$("body").css("overflow","hidden");
});
$(".slidepanel-close").on("click",function(){
	$(".slidepanel-overlay").toggleClass("hide");
	$(".sla-pass").toggleClass("hide");
	$("body").css("overflow","auto");
});
$( document ).ready(function(){
  $(".dropdown-button").dropdown();
});