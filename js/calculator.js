// TODO: your Calculator class definition goes here
// !!!!! NO CODE ABOVE THIS LINE !!!!!!
class Calculator {
  constructor (elId) {
    let el = document.getElementById(elId)
    if (!el) {
      console.log('Something went wrong, the calculator needs an ID string as an argument')
      return null
    }
    this._el = el
    this.isCalcUnluck = true
    this.numStr = ''
    this.acc = []
    this._renderCalculator()
    this._addListener(elId)
    this._updateScreen('0')
  }

  press (btnValue) {
    if (this.isCalcUnluck) {
      let input = btnValue.toString()
      if (input.length !== 1) return

      if (input === 'C') {
        this.clear()
      } else if (input === '+' || input === '-' || input === 'x' || input === '/' || input === '=') {
        this._updateOperation(input)
        // this._updateArray(input)
      } else {
        this._updateNumber(input)
      }
    }
  }

  pressButton (num) {
    this.press(num)
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
    console.log(this.acc)
    console.log('---> result:', result)
    return result
  }

  clear () {
    this.numStr = ''
    this.acc = []
    this._clearScreen()
  }

  lock () {
    this.isCalcUnluck = false
    console.info(this._el.id, 'lock')
  }

  unlock () {
    this.isCalcUnluck = true
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

  _updateOperation (input) {
    this._updateArray(input)
  }

  _updateNumber (input) {
    this.numStr += input
    this._updateScreen(this.numStr)
  }

  _updateArray (input) {
    let num = parseFloat(this.numStr, 10)
    if (num) this.acc.push(num)
    this.numStr = ''
    this.acc.push(input)
    this._updateScreen(input)
    if (input === '=') {
      this._updateScreen(this.value())
      this.acc = [] // TODO: needs work
    }
  }

  _clearScreen () {
    this._el.querySelector('.screen').innerHTML = '0'
  }

  _updateScreen (input) {
    this._el.querySelector('.screen').innerHTML = input
    // let screen = this._el.querySelector('.screen')
    // if (typeof input === 'string') screen.innerHTML = input
    // else screen.innerHTML = input.join(' ')
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

  _lockOperations () {

  }

  _buildHtml () {
    return `<div class="calculator">
              <div class="wrapper-btns">
                <div class="screen-wrapper">
                  <div class="screen top-left-border"></div>
                  <div class="column">
                    <button class="aperation" value="C" class="top-right-border" type="button" name="button">C</button>
                    <button class="aperation" value="/" type="button" name="button">/</button>
                  </div>
                </div>
                <div class="row">
                  <button class="num" value="7" type="button" name="button">7</button>
                  <button class="num" value="8" type="button" name="button">8</button>
                  <button class="num" value="9" type="button" name="button">9</button>
                  <button class="aperation" value="x" type="button" name="button">x</button>
                </div>
                <div class="row">
                  <button class="num" value="4" type="button" name="button">4</button>
                  <button class="num" value="5" type="button" name="button">5</button>
                  <button class="num" value="6" type="button" name="button">6</button>
                  <button class="aperation" value="-" type="button" name="button">-</button>
                </div>
                <div class="row">
                  <button class="num" value="1" type="button" name="button">1</button>
                  <button class="num" value="2" type="button" name="button">2</button>
                  <button class="num" value="3" type="button" name="button">3</button>
                  <button class="aperation" value="+" type="button" name="button">+</button>
                </div>
                <div class="row">
                  <button class="num bottom-left-border" value="0" type="button" name="button">0</button>
                  <button class="num" value="." type="button" name="button">.</button>
                  <button class="aperation flex2 bottom-right-border" value="=" type="button" name="button">=</button>
                </div>
              </div>
            </div>`
  }
}
// !!!!! NO CODE BELOW THIS LINE !!!!!!
