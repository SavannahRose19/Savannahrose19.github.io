function validateUserInfo() 
{
    console.log("validateUserInfo function called");  // Debugging statement to check if the function is called

    // Gets the values of the input fields with IDs 'firstName', 'lastName', and 'zipCode' from the HTML
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let zipCode = document.getElementById("zipCode").value;

    // Combines first name and last name with a space in between to form fullName
    let fullName = firstName + " " + lastName;
    console.log("Full name is: " + fullName);  // Debugging statement to see the full name value

    // Checks if the full name is longer than 20 characters
    if (fullName.length > 20) 
    {
        alert("No tacos for you!");
        return false;  // Return false and stop execution if the full name is too long
    } 
    // Checks if the zip code is exactly 5 characters long
    else if (zipCode.length !== 5) 
    {
        alert("Still no tacos for you!");
        return false;  // Return false and stop execution if the zip code is not 5 digits
    } 
    // If all conditions are met, return true
    else 
    {
        return true;  // Return true if both the full name and zip code are valid
    }
}

function checkPalindrome() 
{
    console.log("checkPalindrome function called")
    //gets the value of the input field with the ID 'userInput' from the html and storing it in the variable input
    //let is interchangeable with using var and declares the variable inside the block where they're defined
    let input = document.getElementById('userInput').value;

    // uses regular expression to remove the white space in the string and converts to lowercase
    //the g in this expression stands for global which means to search all throughout the string instead of just removing one space
    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    //https://www.w3schools.com/jsref/jsref_regexp_global.asp
    let cleanString = input.replace(/\s/g, "").toLowerCase();

    //creates an empty string to compare the variable cleanedString to 
    let reversedString = "";

    //loops through the entire string backwards and creates a reversed string
    //the start point variable is defined by cleanString and begins from the last character of the string
    //i >=0: defines the condition for the loop to run (i must be great than or equal to 0)
    // i-- decrements the value each time the code block in the loop has been executed
    for (let i = cleanString.length - 1; i >= 0; i--) 
    {
        // concatenates to build a new string in reverse order of the original string
        //reversedString is a variable that holds the string being built inside the loop
        //+=Appends the string on the right to the string on the left
        //[i] is an index access operator that gets the character at position i in the string cleanString
        reversedString += cleanString[i];
    }

    //creates the conditional statement that if cleanString is of equal value and equal type of reversedString
    //proves true
    if (cleanString === reversedString) 
    {
       //document.getElementbyId accesses the element result from the html page
       //input + "is a palindrome!" creates a string with the users input through concatination to display the result 
        document.getElementById("paliResult").innerHTML = input + " is a palindrome!";
        return true;  // Return true to indicate the input is a palindrome
    } else 
    {
        document.getElementById("paliResult").innerHTML = input + " is not a palindrome!";
        return false;  // Return false to indicate the input is not a palindrome
    }
}

function validateAndSubmit() 
{
    console.log("validateAndSubmit function called")
    // First, validate user info
    let isUserInfoValid = validateUserInfo();

    // If user info is valid, check if the input is a palindrome
    if (isUserInfoValid) 
    {
        let isPalindrome = checkPalindrome();

        // Only show the secret message if both user info is valid and the input is a palindrome
        if (isPalindrome) 
        {
            //the .style.display ="block" makes the secret message visable
            document.getElementById("secretMessage").style.display = "block"; 
            
            // Redirect to a new page after a short delay (3 seconds)
            // syntax found here https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
            setTimeout(function() 
            {
                location.replace("congratulations.html");
            }, 3000);
        }
    }
}