$(document).ready(function(){
	$(".headerSection").hide();
	console.log("CONNECTED");
})

function hideShow(){

if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20){
	$(".headerSection").fadeIn(500);
	console.log("SHOW");

} else {
	$(".headerSection").fadeOut(500);
	console.log("HIDE");
	
}
}
