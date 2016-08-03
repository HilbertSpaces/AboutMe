$(document).ready(function() {
	var k=0;
	var r=0;
	$(".submit").click(function(){
		k+=1;
		var text=$('.item').val();
		$(".left").append("<li>"+text+"</li>");
		if (k>25) {
			$(".boxl").css({"height":k*22});
		}
		$(".item").val("");
	});
	$(".item").keypress(function(e){
		if(e.which==13){
			k+=1;
			var text=$('.item').val();
			$(".left").append("<li>"+text+"</li>");
			if (k>20 && k>r) {
				$(".boxl").css({"height":k*23});
				$(".boxr").css({"height":k*23});
			}
			else if (k<r){
				$(".boxl").css({"height":r*23});
				$(".boxr").css({"height":r*23});
			}
		$(".item").val("");	
		$("html").css({"background-size":"cover"});
		}
	});
	$("ol").on("click","li",function(){
		$(".right").append("<li>"+$(this).text()+"</li>");
		this.remove();
			if (k>20 && k>r) {
				$(".boxl").css({"height":k*23});
				$(".boxr").css({"height":k*23});
			}
			else if (k<r){
				$(".boxl").css({"height":r*23});
				$(".boxr").css({"height":r*23});
			}
		$("html").css({"background-size":"cover"});
		r+=1;
		k-=1;
	});
setTimeout(function (){	alert("Click on individual items within \"Things I need to Buy\" to add that item to your cart...Happy Shopping!");
}, 3000);
});
