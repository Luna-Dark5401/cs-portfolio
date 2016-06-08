// these are the variables for the inputs and for the alerts//
var alerting = document.getElementById("alerting");
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');

//this variable is for the answer.//
var answer = 3;

var guess = prompt("What's Your guess?");
var display = document.getElementById('display');

//if someone guesses correctly, the alert will say you guessed correctly//
for(i=0;i<10;i++){
    if(answer == guess){
        alert("You guess correctly");
        break;
      // if you guess wrong, it will say please try again//  
    }else {
        guess = prompt("Try Again");
    }
}

<P><A hr
<p><script LANGUAGE="JavaScript">

/*Use HTML comment tag to prevent Javascript from being displayed.*/

document.write("Welcome to the guessing game. I'll pick a number<BR>");
document.write("between 1 and 50 and you try to guess what it is.<BR>");
document.write("You get 7 tries.<BR>");


// Generate a random number between 1 and 50.
number = Math.round((Math.random() * 50))%50 + 1;


// Do this loop for each guess. Leave the loop when the guess is
// correct or when 7 incorrect guesses have been made.

counter = 0;
do
	{
	counter++;

	guess = prompt("Plug in the Number you believe is TRUE");
	document.write("Guess #"+counter+" was "+guess+"<BR>");

	if (guess == number) {
		document.write("You guessed it!<BR>");
		}
	else  {
		if (guess < number)  {
			document.write("guess again.<BR>");
			}
		else  {
			document.write("guess again.<BR>");
			}
		}

		
	} while (counter <7 && guess != number);

if (guess != number) {
		document.write("I fooled you 7 times - the number was " + number+".<BR>");
		}



</script> </p>
</body>
</html>
