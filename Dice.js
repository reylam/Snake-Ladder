const diceNum = document.getElementById('dice-number')
class Dice {
    constructor() {
        this.dice = document.getElementById('dice')
        this.value
        this.min = 1
        this.max = 6
        console.log('helo')
    }

    roll() {
        this.value = Math.floor(Math.random() * (this.max - this.min + 1) + 1)
        return this.value
    }
}
export default Dice