let Hangman = function (word, guess) {
    this.word = word.toLowerCase().split(''),
        this.guess = guess,
        this.storeGuessedLetters = []
}

Hangman.prototype.getPuzzleBack = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.storeGuessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        }
        else {
            puzzle += '*'
        }
    })

    return puzzle
}



let word1 = new Hangman('Sarada Uchiha', 5)



console.log(word1.getPuzzleBack())
console.log(word1.guess)

let word2 = new Hangman('Chad', 2)

console.log(word2.getPuzzleBack())
console.log(word2.guess)

window.addEventListener('keydown', function (e) {
    let guessedWord = e.key
    word2.makeGuess(guessedWord)
    console.log(word2.getPuzzleBack())
    console.log(word2.guess)


    word1.makeGuess(guessedWord)
    console.log(word1.getPuzzleBack())
    console.log(word1.guess)
})
