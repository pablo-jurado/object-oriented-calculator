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
    this.id = elId
    this.acc = []
    this._renderCalculator(elId)
    this._addListener(elId)
  }

  press (input) {
    if (input.toString().length !== 1) return
    if (input === 'C') this.acc = []
    if (input === '=') this.value()

    this.acc.push(input)
  }

  pressButton (numStr) {
    this.press(numStr)
  }

  value () {
    let result = 0
    let num1 = parseInt(this.acc[0], 10)
    let num2 = parseInt(this.acc[2], 10)

    if (this.acc[1] === '+') result = num1 + num2
    if (this.acc[1] === '-') result = num1 - num2
    if (this.acc[1] === 'x') result = num1 * num2
    if (this.acc[1] === '/') result = num1 / num2

    return result
  }

  lock () {
    this._el.removeEventListener('click', this._btnHandlers)
    console.info(this.id, 'lock')
  }

  unlock () {
    this._el.addEventListener('click', this._btnHandlers)
    console.info(this.id, 'unlock')
  }

  sayHello () {
    this.acc = [0.7734]
  }

  toString () {
    let str = this.acc.join(' ')
    console.log(str)
    return str
  }

  destroy () {
    console.log(this.id, 'destroyed!')
    this._el.innerHTML = ''
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
