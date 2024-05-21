import Main from "./Main.js"
const gameScreen = document.querySelector('.game-screen')
const btnPlayGame = document.getElementById('play-game')
const btnInstrcution = document.querySelector("#instruction")
const platSnake = document.querySelector('.plat-snake')
const instructionScreen = document.querySelector(".instruction-screen")
const x = document.getElementById('x')
const countdowmScreen = document.querySelector('.countdown')

const startgame = () => {
    const main = new Main(10, 9)
}


btnPlayGame.addEventListener('click', () => {
    countdowmScreen.classList.remove('hide')
    gameScreen.classList.add('hide')

    let countText = document.querySelector('.count')
    let countdown = 3
    let interval = setInterval(() => {
        countdown--
        countText.innerHTML = countdown
        if (countdown <= 0) {
            clearInterval(interval)
            countdowmScreen.classList.add('hide')
            platSnake.classList.remove('hide')
        }
        console.log(countdown)
    }, 1000)
})


btnInstrcution.addEventListener('click', () => {
    instructionScreen.classList.toggle('hide')
})

x.addEventListener('click', () => {
    instructionScreen.classList.toggle('hide')
})


startgame()