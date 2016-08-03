$(document).ready(function() {
	var k=0;
	$(".submit").click(function(){
		k+=1;
		var text=$('.item').val();
		$(".left").append(k,")  ",text,"<br>");
		if (k>25) {
			$(".boxl").css({"height":k*22});
		}
		$(".item").val("");
	});
	$(".item").keypress(function(e){
		if(e.which==13){
			k+=1;
			var text=$('.item').val();
			$(".left").append(k,")  ",text,"<br>");
			if (k>25) {
				$(".boxl").css({"height":k*22});
			}
		$(".item").val("");	
		}
	});
	$(".left").click(function(){
		$(".left").remove();
	});
});
