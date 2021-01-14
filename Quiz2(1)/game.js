const question = document.querySelector('#question');
const choice = Array.form(document.querySelectorAll('.choices-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Qual é a populção total da Noruega em Milhões?",
        choice1: "100",
        choice2: "50",
        choice3: "25",
        choice4: "5",
        answer: 5,
    },
    {
        question:"HTML é uma linguagem de marcação?",
        choice1: "Sim",
        choice2: "Não",
        choice3: "Depende",
        choice4: "Qualé, eu não sei",
        answer: Sim,
    },
    {
        question: "Qual é a cor resultante quando juntamos todas as cores?",
        choice1: "Preto",
        choice2: "Marrom",
        choice3: "Branco",
        choice4: "Escuriadão eterna de uma mente solitária",
        answer: Branco,
    },
    {
        question: "A Irlanda faz parte do Reino-Unido?",
        choice1: "Sim",
        choice2: "Potato",
        choice3: "BullShit",
        choice4: "Não",
        answer: Não,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        
        return window.location.assign('/')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsInndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsInndex]
    question.innerTextText = currentQuestion.question

    choice.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice + number']
    })

    availableQuestions.splice(questionsInndex, 1)

    acceptingAnswers = true
}

choice.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } 

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = function (num) {
    score += num;
    scoreText.innerText = score;
}

startGame()