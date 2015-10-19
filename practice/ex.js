
$(document).ready(function(){
	$("#button2").hide();
	$("#button3").hide();
	$("#button4").hide();
	$("#button1").on("click",function(e){
		$(this).fadeOut("fast");
		$("#button2").show("fast");
		//adds color on click
		 $( "<p> Great! But this picture is still lacking... Why don't we add some shades! Click on the shade button below! </p>", {
    "class": "new paragraph",
  }).appendTo( "p1" );

		 e.preventDefault();
   $("#fiora").attr('src',"http://i882.photobucket.com/albums/ac23/bgabot89/fiora2_zpsljlbsmsv.png");
   });
	//second function; adds a 2nd button
$("#button2").on("click",function(e){
	$(this).fadeOut("fast");
		$("#button3").show("fast");
		$("p").fadeOut("fast");
		//adds shades on click
		 $( "<p> Way to Go!, but wait, the sword still lacks color....let's color the sword! </p>", {
    "class": "new paragraph",
  }).appendTo( "p1" );

		 e.preventDefault();
	$("#fiora").attr('src', "http://i882.photobucket.com/albums/ac23/bgabot89/fiora3_zpsuavblmos.png"); 
$("#button3").on("click",function(e){
	$(this).fadeOut("fast");
	//shows play again button
	$("#button4").show("fast");
	$("p").fadeOut("fast");
	//colors sword on click
	 $( "<p> Yeah way to Go! </p>", {
    "class": "new paragraph",
  }).appendTo( "p1" );
	$("#fiora").attr('src', "http://i882.photobucket.com/albums/ac23/bgabot89/fiorasword_zpssxwfut2j.png");
	//resets back to beginning
	$("#button4").on("click",function(e){
	$(this).fadeOut("fast");
	$("#button1").show("fast");
	$("p").fadeOut("fast");
	$("#fiora").attr('src', "http://i882.photobucket.com/albums/ac23/bgabot89/fiora_zpsh1fntqlj.png");
});

	



	

});

});

});

