document.addEventListener("DOMContentLoaded", function() {
    your_function();
  }); {
    confirm("Welcome Quizly Bear!  You are about to begin the quiz...");
    confirm("If you answer a questions incorrectly, you cannot advance to the next.  Please answer in 'yes' or 'no'...");
    
    var retVal = prompt("Do you want to continue?");
    if (retVal == "yes") {
        alert("Good, question 1...");
    } else {
        alert("Well you're a grumpy bear");
    }

    var retVal = prompt("My given name is Samuel, only 1 person calls me it.  Will you?");
    if (retVal == "no") {
        alert("Grr, you're good, next question...");
    } else {
        alert("Hmm, not sure you will!");
    }

    var retVal = prompt("Do I have any pets?");
    if (retVal == "yes") {
        alert("Dang, pretty impressive. NEXT");
    } else {
        alert("WRONG!");
    }

    var retVal = prompt("Have I worked in a bakery before?");
    if (retVal == "yes") {
        alert("Very good indeed...");
    } else {
        alert("WRONG dude");
    }

    var retVal = prompt("Do I live in Peterborough currently?");
    if (retVal == "yes") {
        alert("More like BALLER...");
    } else {
        alert("Really? Come on. HINT: ");
    }

    var retVal = prompt("This is your prize. Will you accept?");
    if (retVal == "yes") {
        alert("Good. Comence prizing.");
    } else {
        alert("Why you no want prize?");
    }
}
