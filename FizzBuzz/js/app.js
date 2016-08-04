$(document).ready(function() {
	alert("Click the page to enter a number");
	$("body").click(function(){
			x=Math.round(parseInt(prompt()));
			var i=0;
			var fizz="fizz";
			var buzz="buzz";
			while (i<=x){
				if (i%3==0 && i%5==0){
					$("body").append(fizz + " "+ buzz+"<br>");
				}
				else if(i%3==0){
					$("body").append(fizz+"<br>");
				}
				else if (i%5==0) {
					$("body").append(buzz+"<br>");
				}
				else {
					$("body").append(i+"<br>");
				}
			i+=1
			}
	});
});
