function start()
{
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    intervalStop();
}

function stop()
{
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
}

function intervalStart()
{
    var image = document.getElementById(""); 
    var change = 100;
    intervalID = setInterval(function()
    {
        image.style.left = change+ "px";
        image.style.top = change+ "px";
        change +=5;


}, 500);
}

function intervalStop()
{
    clearInterval(intervalID);
    clearInterval
}