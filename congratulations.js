function Taco()
 {
    // This function named 'Taco' is triggered to play a specific sound when called.

    mySound = new sound("mexican_hat_dance-2.mp3");
    // Creates a new sound object using the 'sound' constructor function and sets its source to "mexican_hat_dance-2.mp3".

    mySound.play();
    // Calls the 'play' method on the mySound object to start playing the audio.
}


// Helper function 
function sound(src) 
{
    // This helper function serves as a constructor for creating new sound objects with an audio element.

    this.sound = document.createElement("audio");
    // Creates a new audio element dynamically in the DOM and assigns it to the 'sound' property of the object.

    this.sound.src = src;
    // Sets the 'src' attribute of the audio element to the provided 'src' parameter, which is the path to the audio file.

    this.play = function() {
        this.sound.play();
    };
    // Defines a 'play' method for the sound object that, when called, plays the audio file using the audio element's 'play' method.
}

function stopMusic() 
{
    // This function named 'stopMusic' is used to stop the currently playing music by reloading the webpage.

    window.location.reload();
    // Reloads the current webpage
}
