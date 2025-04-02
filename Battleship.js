//Generates a random number between 1 and 16
const hitNumber = Math.floor(Math.random() * 16) + 1;
//defines the function 
function checkHit(buttonNumber) 
{
    //const button creates a variable called button 
    //document.getElementbyId is how the element is found on the page by the Id
    //(`b${buttonNumber}Push`) creates what's called a template string  which is for string interpolation. 
    //Interoplation is the process of inserting something into another thing
    //Template Strings are created using the backtick ` and eliminate the need for concatition which is used by +""
    //The ${} syntax creates the expression to interpolate the variable into the string
    //https://www.w3schools.com/js/js_string_templates.asp < Found syntax here
    const button = document.getElementById(`b${buttonNumber}Push`);
    //Checks if the button number matches the randomly generated hit number and proceeds to generate the alert
    if (buttonNumber === hitNumber) 
    {
        alert("You Win! Free Tacos for Life!");
        button.style.backgroundColor = "red";
        button.innerHTML = "Hit!";
        //if the button click doesn't match the randomly generated number, the alert "miss" is generated
    } else 
    {
        alert("miss!");
        //changes background color as well as displays the text "miss" inside the button
        button.style.backgroundColor = "lightblue";
        button.innerHTML = "Miss!";
    }
}
//defines the function as b1 and calls the action to checkhit
function b1() 
{
    checkHit(1);
}
function b2() 
{
    checkHit(2);
}
function b3() 
{
    checkHit(3);
}
function b4() 
{
    checkHit(4);
}
function b5() 
{
    checkHit(5);
}
function b6() 
{
    checkHit(6);
}
function b7() {
    checkHit(7);
}
function b8() 
{
    checkHit(8);
}
function b9() 
{
    checkHit(9);
}
function b10() 
{
    checkHit(10);
}
function b11() 
{
    checkHit(11);
}
function b12() 
{
    checkHit(12);
}
function b13() 
{
    checkHit(13);
}
function b14() 
{
    checkHit(14);
}
function b15() 
{
    checkHit(15);
}
function b16() 
{
    checkHit(16);
}

function restartButton() 
{
    // Generate a new random number between 1 and 16 for the new game
   const hitNumber = Math.floor(Math.random() * 16) + 1;

    // Loop through all button IDs from b1Push to b16Push
    for (let i = 1; i <= 16; i++) {
    const button = document.getElementById(`b${i}Push`);
        
        // Reset the background color to white
        button.style.backgroundColor = "white";
        
        // Clear the innerHTML text
        button.innerHTML = "";
      
    }

    alert("The game has been restarted, try again!");
}