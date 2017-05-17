// TODO: your Calculator class definition goes here
// !!!!! NO CODE ABOVE THIS LINE !!!!!!
class Calculator {
  constructor (id) {
    this.id = id
    this.acc = []
    this._renderCalculator(id)
    this._addListener(id)
  }

  press (input) {
    if (input.toString().length !== 1) return
    if (input === 'C') this.acc = []
    if (input === '=') this.value()

    // this.acc.push(num)
    // let num = input.parse(10)
  }

  pressButton (numStr) {
    this.press(numStr)
  }

  value () {
    let result = 0
    if (this.acc[1] === '+') result = this.acc[0] + this.acc[1]
    if (this.acc[1] === '-') result = this.acc[0] - this.acc[1]
    if (this.acc[1] === 'x') result = this.acc[0] * this.acc[1]
    if (this.acc[1] === '/') result = this.acc[0] / this.acc[1]
    return result
  }

  lock () {
    document.getElementById(this.id).removeEventListener('click', this._btnHandlers)
    console.info(this.id, 'lock')
    // A calculator can be in a "locked" state.
    // Button presses should have no effect if the calculator is locked.
    // The "locked" state should look visually disabled.
  }

  unlock () {
    document.getElementById(this.id).addEventListener('click', this._btnHandlers)
    console.info(this.id, 'unlock')
  }

  sayHello () {
    // there should be an Easter Egg method called .sayHello() that clears whatever
    // is on the screen and sets it to "0.7734" (hello upside down)
    this.acc = [0.7734]
  }

  toString () {
    let str = this.acc.join(' ')
    console.log(str)
    return str
  }

  destroy () {
    console.info(this.id, 'destroyed!')
    // calculators can be completely removed from the DOM after calling the .destroy()
  }

  _addListener (id) {
    document.getElementById(id).addEventListener('click', this._btnHandlers)
  }

  _btnHandlers (e) {
    let value = e.target.value
    if (value !== undefined) {
      console.info(this.id, value)
    }
  }

  _renderCalculator (id) {
    document.getElementById(id).innerHTML = this._buildHtml()
  }

  _buildHtml () {
    return `<div class="calculator">
              <div class="wrapper-btns">
                <div class="screen-wrapper">
                  <div class="screen top-left-border">
                    <div class="top"></div>
                    <div class="bottom"></div>
                  </div>
                  <div class="column">
                    <button value="C" class="top-right-border" type="button" name="button">C</button>
                    <button value="/" type="button" name="button">/</button>
                  </div>
                </div>
                <div class="row">
                  <button value="7" type="button" name="button">7</button>
                  <button value="8" type="button" name="button">8</button>
                  <button value="9" type="button" name="button">9</button>
                  <button value="x" type="button" name="button">x</button>
                </div>
                <div class="row">
                  <button value="4" type="button" name="button">4</button>
                  <button value="5" type="button" name="button">5</button>
                  <button value="6" type="button" name="button">6</button>
                  <button value="-" type="button" name="button">-</button>
                </div>
                <div class="row">
                  <button value="1" type="button" name="button">1</button>
                  <button value="2" type="button" name="button">2</button>
                  <button value="3" type="button" name="button">3</button>
                  <button value="+" type="button" name="button">+</button>
                </div>
                <div class="row">
                  <button value="0" class="bottom-left-border" type="button" name="button">0</button>
                  <button value="." type="button" name="button">.</button>
                  <button value="=" class="flex2 bottom-right-border" type="button" name="button">=</button>
                </div>
              </div>
            </div>`
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
