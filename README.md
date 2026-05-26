# ✊✋✌️ Rock Paper Scissors

A simple command-line Rock Paper Scissors game built in JavaScript. The first player to reach **2 points** wins the match.

---

## How to Play

Run the script in any JavaScript environment that supports `prompt()` (e.g. a browser console or Node.js with a prompt library).

```bash
node game.js
```

When prompted, enter a number corresponding to your move:

| Input | Move     |
|-------|----------|
| `1`   | ✊ Stone   |
| `2`   | ✋ Paper   |
| `3`   | ✌️ Scissors |

The game plays rounds automatically until one side reaches **2 points**.

---

## Rules

- **Stone** beats Scissors
- **Paper** beats Stone
- **Scissors** beats Paper
- **Tie** → no point awarded, round replays

---

## Example Output

```
=== First to 2 wins! ===
You: Stone | Computer: Scissors
You won this round!
Score — You: 1 | Computer: 0

You: Paper | Computer: Paper
It's a tie!

You: Scissors | Computer: Stone
Computer won this round!
Score — You: 1 | Computer: 1

You: Stone | Computer: Paper
Computer won this round!
Score — You: 1 | Computer: 2

=== GAME OVER ===
💻 Computer won the game!
```

---

## Configuration

To change the winning score, update the `WINNING_SCORE` constant at the top of the file:

```js
const WINNING_SCORE = 2; // Change to 3, 5, etc.
```

---

## Project Structure

```
game.js   # All game logic in a single file
README.md # This file
```

---

## Requirements

- Node.js (with a `prompt` polyfill, e.g. `npm install prompt-sync`), **or**
- Any modern browser's developer console (which natively supports `prompt()`)
