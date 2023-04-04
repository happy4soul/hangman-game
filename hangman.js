class Hangman{
constructor(word, guess){
 this.word = word.toLowerCase().split(''),
        this.guess = guess,
        this.storeGuessedLetters = [],
        this.status = 'playing'
}
    
    getPuzzleBack() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.storeGuessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        }
        else {
            puzzle += '*'
        }
    })
    
    let displayPuzzle = document.createElement('p')
    displayPuzzle.textContent = puzzle
    document.querySelector('.division').appendChild(displayPuzzle)


    return puzzle
}

makeGuess(guessMade) {
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

gameDetails() {
    let finished = true
    this.word.forEach((letter) => {
        if (this.storeGuessedLetters.includes(letter) || letter === ' ') {

        }
        else {
            finished = false
        }
    })
    if (this.guess === 0) {
        this.status = 'failed'
    }
    else if (finished) {
        this.status = 'finished'
    }
    else {
        this.status = 'playing'
    }
    
    
    
}

gameStatus(){
    if(this.status === 'finished'){
        let finishedMsg = document.createElement('p')
        finishedMsg.textContent = `Congratulations, u guessed it!`
        document.querySelector('.division').appendChild(finishedMsg)
        return finishedMsg
    }

    else if(this.status === 'playing'){
        let playingMsg = document.createElement('p')
        if(this.guess > 1){
            playingMsg.textContent = `You have ${this.guess} attempts left`
        }
        else{
            playingMsg.textContent = `Careful, You have ${this.guess} attempt left`
        }

        document.querySelector('.division').appendChild(playingMsg)

        return playingMsg
        
    }
    else{
        let failedMsg = document.createElement('p')
        failedMsg.textContent = `You failed to guess it. The word was "${this.word.join('')}"`
        document.querySelector('.division').appendChild(failedMsg)

        return failedMsg
    }
}

} 












