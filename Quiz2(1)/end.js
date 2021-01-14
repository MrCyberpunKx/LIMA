const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScore = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_QUESTIONS = 5

finalScore.innerText = mostRecentScore

username.addEventListener('Keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDeFault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score)

    highScore.sort((a,b) => {
        return b.score - a.score
    })

    highScore.splice(5)

    localStorage.setItem('highscores', JSON.stringify(highScore))
    window.location.assign('/')
}