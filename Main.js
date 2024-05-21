import Dice from "./Dice.js"
import Player from "./Player.js"


const diceNum = document.getElementById('dice-number')
const gameSceren = document.querySelector('.plat-snake')
class Main {
    constructor(c, r) {
        this.row = r
        this.col = c
        this.w = 170
        this.h = 170
        this.value = 0
        this.elDice = document.getElementById('dice')
        this.dice = new Dice
        this.draw()
        this.event()
    }

    draw() {
        window.addEventListener('load', () => {
            const player = new Player(0, 0)
            this.player = player
        })

        for (let r = 0; r < this.row; r++) {
            this.flex = document.createElement('div')
            this.flex.classList.add('container')
            gameSceren.appendChild(this.flex)
            for (let c = 0; c < this.col; c++) {
                this.el = document.createElement('div')
                this.el.classList.add('box')
                this.el.id = `pos-${c}-${r}`
                this.el.addEventListener('click', () => {
                    console.log(c, r)
                });

                this.flex.appendChild(this.el)
                this.el.style.width = this.w + 'px'
                this.el.style.height = this.h + 'px'
                this.el.style.backgroundColor = "black"
                this.el.style.display = 'flex'
                this.el.style.alignItems = "center"
                this.el.style.justifyContent = "center"
                if (c % 2 == 0 && r % 2 == 0 || c % 2 !== 0 && r % 2 !== 0) {
                    this.flex.appendChild(this.el)
                    this.el.style.width = this.w + 'px'
                    this.el.style.height = this.h + 'px'
                    this.el.style.backgroundColor = "red"
                }
            }
        }

    }

    event() {
        this.elDice.addEventListener('click', () => {
            this.value = this.dice.roll()
            diceNum.innerHTML = this.value
            this.player.move(this.value)
        });
    }

}

export default Main