
/* let calculator = {
    read: function() {
        this.a = prompt('a?', 0);
        this.b = prompt('b?', 0);
    
    },
    sum: function() {
         return +this.a + +this.b;
    },
    mul: function() {
         return this.a * this.b;
    }


  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() ); */


/*   var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
      this.step++;
      return this
    },
    down: function() { // вниз по лестнице
      this.step--;
      return this
    },
    showStep: function() { // вывести текущую ступеньку
      alert( this.step );
    }
  };

  ladder.up().up().down().up().down().showStep(); // 1 */



/* let res = {
  counter: 0
}

  
  
  const sum = (a) => {
    return function(b) {
      this.counter ; 
      }
    }
  } */


  /* const sum = (x) => {
    
    return function(y){      
      return x + y;
      
    }  
  } */

 /*  const sum = (a) => {
    
  let currentSum = a;

   function f(b) {
    currentSum += b;
    return f;
  }  
    
    f.toString = function() {
      return currentSum;
    };
  
    return f;

  }  
  

  


// alert(sum(1)(2) == 3); // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15  */



/* function Calculator() {
  this.read = function() {
      a = prompt('a?', 0);
      b = prompt('b?', 0);
  
  },
  this.sum = function() {
       return +a + +b;
  },
  this.mul = function() {
       return a * b;
  }
}


var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() ); */



/* function Accumulator (startingValue) {
  this.value = +startingValue;
  this.read = function () {
    this.value += +prompt('сколько прибавить', 0);
    
  }
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение */






function Calculator () {
  
    this.methods = {
    '+': function (a, b) {
      return a + b;
    },
    '-': function (a, b) {
      return a - b;
    },
    }

    this.addMethod = function (name, func) {
      this.methods[name] = func;
    }  
  
    
  this.calculate = function(str) {
    let testNums = str.split(' ');
    function isNumeric(x) {
      return !isNaN(parseFloat(x)) && isFinite(x);
    }
    if (isNumeric(testNums[0]) && isNumeric(testNums[2])) {
      a = +testNums[0]; 
      b = +testNums[2]; 
      sign = testNums[1];
      return this.methods[sign](a, b);
    
    } else return alert ('Ошибка ввода!');
  }
}






 var calc = new Calculator;
alert( calc.calculate("5 - 7") ); // 10 

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

