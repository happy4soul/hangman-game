let result = new Hangman('saudi arabia', 6)
console.log(result.getPuzzleBack())

let result1 = new Hangman('abcd', 3)
console.log(result1.getPuzzleBack())





window.addEventListener('keydown', function (e) {
    let tukka = e.key//e.key records the key pressed from the keyword
    result.makeGuess(tukka)
    console.log(result.getPuzzleBack())
    console.log(result.gameDetails())
    console.log(result.gameStatus())

    result1.makeGuess(tukka)
    console.log(result1.getPuzzleBack())
    console.log(result1.gameDetails())
    console.log(result1.gameStatus())
})
