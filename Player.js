class Player {
    constructor(r, c) {
        this.row = r
        this.col = c
        this.draw()
        this.increment = true
    }

    draw() {
        this.box = document.getElementById(`pos-${this.col}-${this.row}`)
        this.el = document.createElement('div')
        this.el.classList.add('person')
        this.box.appendChild(this.el)
    }


    move(value) {
        this.el.remove()
        for (let r = 0; r < value; r++) {
            if (this.increment) {
                this.col += 1

                if (this.col == 9 && this.row == 8) {
                    alert('you win')
                }

                if (this.row >= 8 && this.col >= 9) {
                    if (this.row >= 8 && this.col == 0) {
                        this.col += 1
                    }
                    this.col -= 1
                }

                if (this.col >= 9) {
                    this.increment = false
                    if (this.row == 8) {
                        this.increment = true
                        this.col += 1
                    }
                    this.row += 1
                }
            }
            else {
                this.col -= 1

                if (this.col <= 0 && this.row != 8) {
                    this.increment = true
                    this.row += 1
                }
            }
        }
        console.log(this.row, this.col)
        this.draw()
    }
}


export default Player