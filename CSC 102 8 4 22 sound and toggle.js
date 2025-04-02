function Chief()
{
    mySound = new sound("hail_to_the_Chief.mp3");
    mySound.play();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled =  false;
}

//helper function
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {this.sound.play();}
}

function stopMusic()
{
    window.location.reload();
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}