$("body").prepend('<img id="clown" src="files/clown.png" onclick="honk();"></img>');

function honk() 
{
	var audio = new Audio('files/clown/bikehorn.ogg');
	audio.volume = 0.05;
	audio.play();		
}

var music = new Audio("files/title2.ogg");
music.volume = 0.3;
music.play();

var theta = Math.random()*2;
var parallaxAnimator = setInterval(main, 10);


//new Audio("files/title2.ogg").play();

function main()
{
	var width = window.innerWidth;
	var height = window.innerHeight;
	theta = (theta + 0.0005) % 2;
	var x = (width / 2) * (1 + Math.cos(Math.PI * theta));
	var y = (height / 2) * (1 + Math.sin(Math.PI * theta));
	document.body.style.setProperty('--x', -x + "px");
	document.body.style.setProperty('--y', -y + "px");
	$("#clown").css('left', (width * 0.2) + (x * 0.6));
	$("#clown").css('top', (height * 0.1) + (y * 0.8));
	$("#clown").css( "transform", "rotate("+theta*540+"deg)" );


	


}
