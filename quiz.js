window.onload = function welcome() {
    confirm("Welcome Quizly Bear!  You are about to begin the quiz");
    confirm("If you answer a questions incorrectly, you cannot advance to the next...");
    
    var retVal = prompt("Do you want to continue?");
    if (retVal == "yes") {
        alert("Good, question 1...");
    } else {
        alert("Well you're a grumpy bear");
    }

    var retVal = prompt("My given name is Samuel, only 1 person calls me it.  Can you guess who?");
    if (retVal == "mum") {
        alert("Grr, you're good, next question...");
    } else {
        alert("FALSE. Please try again. HINT: she gave me to this world...");
    }

    var retVal = prompt("Can you guess how old I am?  I may have mentioned it in passing on group chat...");
    if (retVal == "37") {
        alert("Dang, pretty impressive. NEXT");
    } else {
        alert("NOPE. HINT: Quarter of a century + 20 - 8");
    }

    var retVal = prompt("What is my dogs name?");
    if (retVal == "eli") {
        alert("Very good indeed...");
    } else {
        alert("WRONG. HINT: Same number of characters as my name, the biblical name refers to 'my god'");
    }

    var retVal = prompt("Which football team remained in the Championship for the longest period?");
    if (retVal == "ipswich") {
        alert("More like BALLER...");
    } else {
        alert("Really? Come on. HINT: they are based in Suffolk");
    }

    var retVal = prompt("In which country would you find the Hoover Dam?");
    if (retVal == "usa") {
        alert("DING DING WINNER WINNER");
    } else {
        alert("INCORRECT. HINT: the good ol'...");
    }
    }

    var retVal = prompt("This is your prize. Will you accept?");
    if (retVal == "yes") {
        alert("Good. Comence prizing.");
    } else {
        alert("Why you no want prize?");
    }
