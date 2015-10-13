
$(document).ready(function(){
	$("#button2").hide();
	$("#button3").hide();
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
		//adds color on click
		 $( "<p> Way to Go!, but wait, the sword still lacks color....let's color the sword! </p>", {
    "class": "new paragraph",
  }).appendTo( "p1" );

		 e.preventDefault();
	$("#fiora").attr('src', "http://i882.photobucket.com/albums/ac23/bgabot89/fiora3_zpsuavblmos.png"); 

	

});

});

