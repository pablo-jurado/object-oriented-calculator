// TODO: your Calculator class definition goes here
// !!!!! NO CODE ABOVE THIS LINE !!!!!!
class Calculator {
  constructor (elId) {
    let el = document.getElementById(elId)
    if (!el) {
      console.log('TODO: error message here')
      return null
    }
    this._el = el
    this.numStr = ''
    this.acc = []
    // this.result = 0
    this._renderCalculator()
    this._addListener(elId)
  }

  press (btnValue) {
    let input = btnValue.toString()
    if (input.length !== 1) return

    if (input === 'C') {
      this.clear()
    } else if (input === '+' || input === '-' || input === 'x' || input === '/' || input === '=') {
      this._updateArray(input)
    } else {
      this.numStr += input
      this._updateScreen(this.numStr)
    }
  }

  pressButton (numStr) {
    this.press(numStr)
  }

  value () {
    if (this.acc.length <= 2) return null
    let result
    let opp = this.acc[1]
    let num1 = this.acc[0]
    let num2 = this.acc[2]

    if (opp === '+') result = num1 + num2
    if (opp === '-') result = num1 - num2
    if (opp === 'x') result = num1 * num2
    if (opp === '/') result = num1 / num2

    this.numStr = result
    return result
  }

  clear () {
    this.numStr = ''
    this.acc = []
    this._clearScreen()
  }

  lock () {
    this._el.removeEventListener('click', this._btnHandlers)
    console.info(this._el.id, 'lock')
  }

  unlock () {
    this._el.addEventListener('click', this._btnHandlers)
    console.info(this._el.id, 'unlock')
  }

  sayHello () {
    this.clear()
    this.numStr = '0.7734'
  }

  toString () {
    let str = this.acc.join(' ')
    return str
  }

  destroy () {
    console.log(this._el.id, 'destroyed!')
    this._el.innerHTML = ''
  }

  _updateArray (input) {
    let num = parseFloat(this.numStr, 10)
    if (num) this.acc.push(num)
    this.numStr = ''
    this.acc.push(input)
    this._updateScreen(this.acc)
    if (input === '=') {
      this._el.querySelector('.screen').innerHTML += ' ' + this.value()
      // this.clear()
    }
    console.log(this.acc)
  }

  _clearScreen () {
    this._el.querySelector('.screen').innerHTML = '0'
  }

  _updateScreen (input) {
    let screen = this._el.querySelector('.screen')
    if (typeof input === 'string') screen.innerHTML = input
    else screen.innerHTML = input.join(' ')
  }

  _addListener (id) {
    var that = this
    this._el.addEventListener('click', function (evt) {
      let btnValue = evt.target.value
      if (btnValue !== undefined) {
        that.press(btnValue)
      }
    })
  }

  _renderCalculator () {
    this._el.innerHTML = this._buildHtml()
  }

  _buildHtml () {
    return `<div class="calculator">
              <div class="wrapper-btns">
                <div class="screen-wrapper">
                  <div class="screen top-left-border"></div>
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
