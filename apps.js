console.log("name")
    let username = prompt("Hello!  What is your name? ");
    console.log("name")
    let usernameElement = document.getElementById("name");
    usernameElement.innerText = username

    let y = Math.floor(Math.random() * 10 + 1);
 let guess = 1;

    document.getElementById("submitguess").onclick = function () {

    
        let x = document.getElementById("guessField").value;

        if (x == y) {
            alert("YOU ARE A GENIUS OF LEVELS WE HAVEN'T SEEN BEFORE, YOU GUESSED IT IN..."
                + guess + " GUESSES ");
        }

        
        else if (x > y) {
            guess++;
            alert("SORRY! TRY A SMALLER NUMBER");
        }
        else {
            guess++;
            alert("SORRY!! TRY A GREATER NUMBER")
        }
    }