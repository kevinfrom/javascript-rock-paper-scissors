/**
 * Rock, paper scissors
 */

class RockPaperScissors {
    private gameStates = {
        win: 'win',
        tie: 'tie',
        lose: 'lose'
    }

    private moveMap = {
        rock: {
            scissors: this.gameStates.win,
            rock: this.gameStates.tie,
            paper: this.gameStates.lose
        },
        scissors: {
            paper: this.gameStates.win,
            scissors: this.gameStates.tie,
            rock: this.gameStates.lose
        },
        paper: {
            rock: this.gameStates.win,
            paper: this.gameStates.tie,
            scissors: this.gameStates.lose
        }
    }

    public play(move1: 'rock' | 'paper' | 'scissors', move2: 'rock' | 'paper' | 'scissors') {
        return {
            [move1]: this.moveMap[move1][move2],
            [move2]: this.moveMap[move2][move1]
        }
    }
}


const game = new RockPaperScissors()
const test = game.play('scissors', 'paper')

console.log({test})
