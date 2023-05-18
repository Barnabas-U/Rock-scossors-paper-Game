let xBtn = document.querySelector('.r-div');
let pickedImaged = document.getElementById('userPickImage');
let housePickImage = document.getElementById('housePickImage');
let SCORE = 0;
let divImg = document.querySelector('.img-div');
//hide rules
function disappear() {
    xBtn.style.display = "none";
}

//display rules
function appear() {
    xBtn.style.display = "flex";
}

const pickUserHand = (pick) => {
    
    //hide the game choosing page
    let picker =  document.querySelector('.picker');
    picker.style.display = "none";
    //display the display the game playing page with the image chosen
    let game = document.querySelector('.game');
    game.style.display = "flex";

    //set the user pick
    if (pick == "rock") {
        pickedImaged.src = "styles/image/icon-rock.svg";
        pickedImaged.style.borderColor = "red";
    } else if (pick == "paper") {
        pickedImaged.src = "styles/image/icon-paper.svg";
        pickedImaged.style.borderColor = "blue";
    } else if (pick == "scissors") {
        pickedImaged.src = "styles/image/icon-scissors.svg";
        pickedImaged.style.borderColor = "yellow";
    }

    setTimeout(() => {
        document.querySelector('.result').style.display = "flex";
    }, 3000);

    let cpPicker = pickComputerHand();
    result(pick, cpPicker);
    
}

const pickComputerHand = () => {
    let picker = ["rock", "paper", "scissors"];
    let cpPicker = picker[Math.floor(Math.random() * 3)]

    setTimeout(() => {
        if (cpPicker == "rock") {
            housePickImage.src = "styles/image/icon-rock.svg";
            housePickImage.style.borderColor = "red";
        } else if (cpPicker == "paper") {
            housePickImage.src = "styles/image/icon-paper.svg";
            housePickImage.style.borderColor = "blue";
        } else if (cpPicker == "scissors") {
            housePickImage.src = "styles/image/icon-scissors.svg";
            housePickImage.style.borderColor = "yellow";
        }
    }, 1500);

    return cpPicker;
}

const result = (pick, cpPicker) => {
    if ( pick == "rock" && cpPicker == "paper") {
        setDecision("YOU LOSE!");
        setScore(SCORE - 1);
        divImg.style.borderColor
    }

    if (pick == "rock" && cpPicker == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1)
    }

    if (pick == "rock" && cpPicker == "rock") {
        setDecision("IT'S A TIE!");
    }

    if ( pick == "paper" && cpPicker == "scissors") {
        setDecision("YOU LOSE!");
        setScore(SCORE - 1);
    }

    if (pick == "paper" && cpPicker == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1)
    }

    if (pick == "paper" && cpPicker == "paper") {
        setDecision("IT'S A TIE!");
    }

    if ( pick == "scissors" && cpPicker == "rock") {
        setDecision("YOU LOSE!");
        setScore(SCORE - 1);
    }

    if (pick == "scissors" && cpPicker == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1)
    }

    if (pick == "scissors" && cpPicker == "scissors") {
        setDecision("IT'S A TIE!");
    }
}

const setDecision = (decision) => {
    document.querySelector('.result h1').innerHTML = decision;
}

const setScore = (score) => {
    SCORE = score;
    
    setTimeout(() => {
        document.querySelector('.score h1').innerHTML = score;
    }, 3000);
}

const restart = () => {
    document.querySelector('.picker').style.display = "flex";
    document.querySelector('.result').style.display = "none";
    document.querySelector('.game').style.display = "none";
    housePickImage.src = "";
    housePickImage.style.borderColor = "";

}