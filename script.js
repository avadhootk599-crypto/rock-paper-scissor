function get_computer_choice() {
    return Math.floor(Math.random() * 3); // 0=Stone, 1=Paper, 2=Scissors
}

function get_human_choice() {
    let choice = parseInt(prompt("Enter 1 (Stone), 2 (Paper), or 3 (Scissors):"));
    if (isNaN(choice) || choice < 1 || choice > 3) {
        console.log("Invalid choice!");
        return null;
    }
    return choice - 1;
}

let human_score = 0;
let comp_score = 0;
const WINNING_SCORE = 2;
const names = ["Stone", "Paper", "Scissors"];
const wins_against = { 0: 2, 1: 0, 2: 1 };

function play_round(human_choice, comp_choice) {
    if (human_choice === null) return;

    console.log(`You: ${names[human_choice]} | Computer: ${names[comp_choice]}`);

    if (human_choice === comp_choice) {
        console.log("It's a tie!");
        return;
    }

    if (wins_against[human_choice] === comp_choice) {
        human_score += 1;
        console.log("You won this round!");
    } else {
        comp_score += 1;
        console.log("Computer won this round!");
    }

    console.log(`Score — You: ${human_score} | Computer: ${comp_score}`);
}

function play_game() {
    console.log(`=== First to score ${WINNING_SCORE} wins! ===`);

    while (human_score < WINNING_SCORE && comp_score < WINNING_SCORE) {
        const human_choice = get_human_choice();
        const comp_choice = get_computer_choice();
        play_round(human_choice, comp_choice);
    }

    console.log("=== GAME OVER ===");
    if (human_score === WINNING_SCORE) {
        console.log("🎉 You won the game!");
    } else {
        console.log("💻 Computer won the game!");
    }
}

play_game();