function Taco()
mySound = new sound("raining-tacos.mp3");
// Creates a new sound object using the 'sound' helper function 

mySound.play();
{
// Calls the 'play' method on the mySound object to start playing the audio.
}


//helper function 
function sound(src)
{
// This helper function creates a new audio element with a specified source.

this.sound = document.createElement("audio");
// Creates a new audio element and assigns it to the 'sound' property of the object.

this.sound.src = src;
// Sets the 'src' attribute of the audio element to the passed-in 'src' parameter, which is the path to the audio file.

this.play = function() {this.sound.play();}
// Defines a method 'play' that, when called, plays the audio file using the audio element's 'play' method.
}

function stopMusic()
{
// This function named 'stopMusic' stops the currently playing music by reloading the webpage.

window.location.reload();
// Reloads the current webpage
}