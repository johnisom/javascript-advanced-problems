class Calculator {
  constructor() {
    this.history = '';
    this.currentValue = '0';
    this.previousValue = null;
    this.operator = null;
    this.previousOperator = null;
    this.replaceCurrentValue = true;
    this.hasDecimalPoint = false;
  }

  negate() {
    if (this.currentValue === '0') return;
    this.currentValue = '-' + this.currentValue;
  }

  clear() {
    this.currentValue = '0';
    this.replaceCurrentValue = true;
    this.hasDecimalPoint = false;
  }

  clearEverything() {
    this.clear();
    this.history = '';
    this.previousValue = null;
    this.operator = null;
    this.previousOperator = null;
  }

  operate(operator) {
    this.operator = operator;
    this.eval();
    this.previousOperator = operator;
  }

  eval() {
    const currentValueNumber = parseFloat(this.currentValue, 10);

    this.hasDecimalPoint = false;
    this.replaceCurrentValue = true;
    this.history += ` ${this.currentValue} ${this.operator}`;

    if (this.previousOperator === null) {
      this.previousValue = currentValueNumber;
      return;
    }

    switch (this.previousOperator) {
    case '+':
      this.previousValue += currentValueNumber;
      break;
    case '-':
      this.previousValue -= currentValueNumber;
      break;
    case '*':
    case 'x':
    case '×':
      this.previousValue *= currentValueNumber;
      break;
    case '/':
    case '÷':
      this.previousValue /= currentValueNumber;
      break;
    case '%':
      this.previousValue %= currentValueNumber;
      break;
    }

    this.currentValue = this.previousValue.toString();
  }

  equals() {
    this.eval();
    this.currentValue = this.previousValue;
    this.history = '';
    this.previousValue = null;
    this.operator = null;
    this.replaceCurrentValue = true;
    this.hasDecimalPoint = false;
  }

  addDecimalPoint() {
    if (this.hasDecimalPoint || this.value === '0') return;
    this.hasDecimalPoint = true;
    this.replaceCurrentValue = false;
    this.currentValue += '.';
  }

  addDigit(digit) {
    if (this.replaceCurrentValue) this.currentValue = '';
    this.replaceCurrentValue = false;
    this.currentValue += digit;
  }
}

const digitKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorKeys = ['+', '-', '/', '*', 'x', '%'];
const specialKeys = ['=', '.', 'Backspace', 'Delete', 'Enter'];

$(() => {
  const $operationWindow = $('#operation-window');
  const $entryWindow = $('#entry-window');
  const $buttons = $('#buttons');
  const $showHideTips = $('#show-hide-tips');
  const $keyboardTips = $('#keyboard-tips');
  const calc = new Calculator;

  const updateScreen = function updateScreen() {
    $operationWindow.text(calc.history);
    $entryWindow.text(calc.currentValue);
  };

  $showHideTips.on('click', (e) => {
    e.preventDefault();
    if ($showHideTips.text() === '(Show)') {
      $showHideTips.text('(Hide)');
      $keyboardTips.slideDown();
    } else {
      $showHideTips.text('(Show)');
      $keyboardTips.slideUp();
    }
  });

  $(document).on('keydown', (e) => {
    if (digitKeys.includes(e.key)) {
      calc.addDigit(e.key);
      updateScreen();
    } else if (operatorKeys.includes(e.key)) {
      e.altKey ? calc.negate() : calc.operate(e.key);
      updateScreen();
    } else if (specialKeys.includes(e.key)) {
      switch (e.key) {
      case '.':
        calc.addDecimalPoint();
        break;
      case '=':
      case 'Enter':
        calc.equals();
        break;
      case 'Backspace':
      case 'Delete':
        e.altKey ? calc.clearEverything() : calc.clear();
      }
      updateScreen();
    }
  });

  $buttons.on('click', 'button.digit', function() {
    calc.addDigit($(this).text());
    updateScreen();
  });

  $buttons.on('click', 'button.operator', function() {
    calc.operate($(this).text());
    updateScreen();
  });

  $buttons.on('click', '#btn-ce', () => {
    calc.clearEverything();
    updateScreen();
  });

  $buttons.on('click', '#btn-c', () => {
    calc.clear();
    updateScreen();
  });

  $buttons.on('click', '#btn-neg', () => {
    calc.negate();
    updateScreen();
  });

  $buttons.on('click', '#btn-decimal', () => {
    calc.addDecimalPoint();
    updateScreen();
  });

  $buttons.on('click', '#btn-equal', () => {
    calc.equals();
    updateScreen();
  });

  updateScreen();
  $keyboardTips.hide();
});
