//crystal collector javascript

$(document).ready(function() {
    console.log("ready!");

    //global variables - each crystal gets assigned a random number 
    //use array vs. individual vars put crystals in array as objects
    var crystals = {
        "crystal1": 0, //var crystal1 = 0; //#crystal1
        "crystal2": 0, //var crystal2 = 0; //#crystal1
        "crystal3": 0, //var crystal3 = 0; //#crystal1
        "crystal4": 0 //var crystal4 = 0; //#crystal1
    };

    //keeping score - wins/loses/score/ this var is where the total for each variable is stored
    var wins = 0; //#win - stores wins
    var losses = 0; //#lose- stores losses 
    var score = 0;
    //#score - stores player score

    // function adds wins/losses/score 
    function render() {
        $('#win').text(wins);
        $('#loss').text(losses);
        $('#score').text(score);
        $('#number-to-guess').text(targetNumber);

    }

    console.log("score", $('#score'));



    function crystalRandomNum() {
        for (var i = 1; i <= 4; i++) { //assign "i" bc running crystal 1 at this time
            var randNum = Math.floor(Math.random() * 10 + 1); //assign crystal with randNum and attach to "crystal"
            crystals["crystal" + i] = randNum;

        }
    }
    //console.log(crystalRandomNum)
    function reset() {
        score = 0;
        crystalRandomNum();
        targetNumber = Math.floor(Math.random() * 102 + 19);
    }
    //Start game//reset game? 
    //document.getElementbyId("").reset();

    //start game by clicking on a crystal
    //$('.start') on('click', function() {
    //start();
    //})
    reset();
    render();


    // on first click assign a random number to the targetNumber variable.
    //This is the number the player has to guess. "#number-to-guess"



    //"#number to guess" = targetNumber
    console.log(targetNumber)


    $("#c1").on("click", function() {
        console.log('CRYSTAL1 CLICKED')
        score += crystals.crystal1;
        console.log(score);
        if (score === targetNumber) {
            wins++; //add to wins calculate and log you win
            alert("You win!")
            reset();

        } else if (score > targetNumber) {
            losses++; //add to losses calculate and log you lose
            alert("You lose!");
            reset();
        }
        render();
    });



    $("#c2").on("click", function() {
        console.log('CRYSTAL2 CLICKED')
        score += crystals.crystal2
        console.log(score);
        if (score === targetNumber) {
            wins++; //add to wins calculate and log you win
            alert("You win!");
            reset();

        } else if (score > targetNumber) {
            losses++;
            alert("You lose!")
            reset();

        }
        render();
    });

    $("#c3").on("click", function() {
        console.log('CRYSTAL3 CLICKED')

        score += crystals.crystal3
        console.log(score);
        if (score === targetNumber) {
            wins++; //add to wins calculate and log you win
            alert("You win!")
            reset();


        } else if (score > targetNumber) {
            losses++;
            alert("You lose!")
            reset();

        }
        render();
    });

    $("#c4").on("click", function() {
        console.log('CRYSTAL4 CLICKED')

        score += crystals.crystal4
        console.log(score);
        if (score === targetNumber) {
            wins++; //add to wins calculate and log you win
            alert("You win!");
            reset();


        } else if (score > targetNumber) {
            losses++;
            alert("You lose!")
            reset();
        }
        render();
    });
});
