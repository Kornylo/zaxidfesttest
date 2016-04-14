var newHash     = '',
$mainContent = $('#content');

$('.isotope').delegate('a', 'click', function() {
	window.location.hash = $(this).attr('href');
	return false;
});

// Not all browsers support hashchange
// For older browser support: http://benalman.com/projects/jquery-hashchange-plugin/
$(window).bind('hashchange', function() {
	newHash = window.location.hash.substr(1);
	$mainContent.load(newHash + " #content > *");
});




//script for send buttom START

$("#go").click(function(){  
	$("#IconSend")  

	.css({'position' : 'absolute', 'z-index' : '100'})  
	.appendTo("#go")  
	.animate({marginTop: -300,   	marginLeft: 300,   width: 50, 
		height: 50 }, 1500, function() {  
			$(this).remove();  
		});  
});  
 //script for send buttom END

//script for show and hide visitorText START
$("#dis1").click(function(){
	$("#Block1").show();
	$("#Block2").hide();
	$("#Block3").hide();
	$(this).addClass('active');
	$('#dis2').removeClass('active');
	$('#dis3').removeClass('active');

});
$("#dis2").click(function(){
	$("#Block1").hide();
	$("#Block2").show();
	$("#Block3").hide();
	$(this).addClass('active');
	$('#dis1').removeClass('active');
	$('#dis3').removeClass('active');
});
$("#dis3").click(function(){
	$("#Block1").hide();
	$("#Block2").hide();
	$("#Block3").show();
	$(this).addClass('active');
	$('#dis2').removeClass('active');
	$('#dis1').removeClass('active');
});
//script for show and hide visitorText END