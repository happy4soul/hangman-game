let word1 = new Hangman('Sarada Uchiha', 5)



console.log(word1.getPuzzleBack())
console.log(word1.guess)



window.addEventListener('keydown', function (e) {
    let guessedWord = e.key
    word1.makeGuess(guessedWord)
    console.log(word1.getPuzzleBack())
    console.log(word1.gameDetails())
    console.log(word1.gameStatus())
})
