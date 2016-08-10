$(document).ready(function() {
	var k=1;
	var Key={1:"f(x)=2x-3", 2:"f(x)=x^2", 3:"f(x)=|x|",4:"f(x)=x^3",5:"f(x)=ln(x)"}
	var h3=$("h3").text();
	count=0;
	c=count+1;
	function hideImage(){
		var x=$(event.target).text();
		if (k==5){
			if(x==Key[k]){
				alert("correct!");
				count+=1;
			}
			alert(count+" out of "+  5 +" correct!");
			location.reload();
		}
		else if(k==4){
			$(".four").hide();
			$(".five").show();
			if(x==Key[k]){
				alert("correct!");
				count+=1;
			}
			k+=1;
			$("h4").text(count+ " for "+4 + " correct");
			$("h3").text("Question 5 of 5");
		}
		else if(k==3){
			$(".three").hide();
			$(".four").show();
			if(x==Key[k]){
				alert("correct!");
				count+=1;
			}
			k+=1;
			$("h4").text(count+ " for "+3 + " correct");
			$("h3").text("Question 4 of 5");
		}
		else if(k==2){
			$(".two").hide();
			$(".three").show();
			if(x==Key[k]){
				alert("correct!");
				count+=1;
			}
			k+=1;
			$("h4").text(count+ " for "+2 + " correct");
			$("h3").text("Question 3 of 5");
		}
		else if(k==1){
			$(".one").hide();
			$(".two").show();
			if(x==Key[k]){
				alert("correct!");
				count+=1;
			}
			k+=1;
			$("h4").text(count+ " for "+1 + " correct");
			$("h3").text("Question 2 of 5");
		}
	}
	$("p").click(function(event) {
		hideImage();
	});
});
