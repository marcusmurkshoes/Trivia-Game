
// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

$(document).ready(function() {

	var correctGuesses = 0;

	correctGuesses = true;

	var count=60;


	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second



function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timerCountdown").innerHTML=count + " secs"; // watch for spelling
}

$("#true").click(function() {

	correctGuesses++;

	correctGuesses = false, correctGuesses++;

		console.log(correctGuesses);


});



	console.log("were ready bois");


});