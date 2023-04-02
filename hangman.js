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

Hangman.prototype.makeGuess = function (guessMade) {
    guessMade = guessMade.toLowerCase()
    let isUniqueGuess = !this.storeGuessedLetters.includes(guessMade)
    let isBadGuess = !this.word.includes(guessMade)

    if (isUniqueGuess) {
        this.storeGuessedLetters.push(guessMade)
    }
    if (isUniqueGuess && isBadGuess) {
        this.guess--//or guessmade = guessmade - 1
    }
}



let word1 = new Hangman('Sarada Uchiha', 5)



console.log(word1.getPuzzleBack())
console.log(word1.guess)



window.addEventListener('keydown', function (e) {
    let guessedWord = e.key
    word1.makeGuess(guessedWord)
    console.log(word1.getPuzzleBack())
    console.log(word1.guess)
})
