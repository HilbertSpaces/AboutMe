$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			1000,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			}
			);
	});
	$('.ryu').mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$('body').keydown(function(x){
		if(x.which==88){
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	});
	$('body').keyup(function(x){
		if(x.which==88) {
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume=.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
