class calculator {
    constructor(number1 = 0, number2 = 0) {
        this.number1 = number1;
        this.number2 = number2;
    }
    add() {
        return this.number1 + this.number2;
    }
    subtract() {
        return this.number1 - this.number2;
    }
    multiply() {
        if (this.number1 === 0 || this.number2 === 0) {
            return 0;
        } else {
          return this.number1 * this.number2;
        }
    }
    divide() {
      if(this.number2 === 0) {
        return 'It is not possible to divide by zero';
      } else {
        return this.number1 / this.number2;
      } 
    }
}
module.exports = calculator;