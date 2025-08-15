let round = 1;
let playerScore = 0;
let computerScore = 0;
let playerMoney = 0;
const choices = ["Rock", "Paper", "Scissors"];

function startGame() {
    let startMoneyInput = document.getElementById("startingMoney").value;
    let amount = parseInt(startMoneyInput);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid starting money amount!");
        return;
    }

    playerMoney = amount;
    document.getElementById("money").innerText = playerMoney;

    // Reset game state
    round = 1;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("round").innerText = round;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("result").innerHTML = "";
    document.getElementById("finalResult").innerHTML = "";

    // Show game screen, hide start screen
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

function playRound(playerChoice) {
    if (round > 3) return;

    let bet = parseInt(document.getElementById("betAmount").value);
    if (isNaN(bet) || bet <= 0) {
        alert("Enter a valid bet amount!");
        return;
    }
    if (bet > playerMoney) {
        alert("You don't have enough money!");
        return;
    }

    let computerChoice;
    // 90% chance computer wins
    if (Math.random() < 0.0) {
        computerChoice = (playerChoice + 1) % 3;
    } else {
        computerChoice = Math.floor(Math.random() * 3);
    }

    let resultText = `You chose: ${choices[playerChoice]} | Computer chose: ${choices[computerChoice]}<br>`;

    if (playerChoice === computerChoice) {
        resultText += "It's a draw! No money change.";
    } else if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
    ) {
        resultText += "🎉 You win this round!";
        playerScore++;
        playerMoney += bet;
    } else {
        resultText += "💻 Computer wins this round!";
        computerScore++;
        playerMoney -= bet;
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("money").innerText = playerMoney;
    document.getElementById("round").innerText = round;

    round++;

    if (round > 3) {
        let finalMsg = "";
        if (playerScore > computerScore) {
            finalMsg = "🎉 Congratulations  You win the game!";
        } else if (playerScore < computerScore) {
            finalMsg = "💻 Computer wins the game!";
        } else {
            finalMsg = "🤝 It's a draw!";
        }
        document.getElementById("finalResult").innerHTML = finalMsg;
    }

}

