
/* const sum = (a) => {
    
    return a, function (b) {
        return a+b;
    }
}


alert (sum(12)(6)); */


/* const makeBuffer = () => {
    let buffer = [];
    return function(a) {
        if (a === undefined) {
            return buffer.join('');
        } else {
            buffer.push(String(a));
        }
    }
};

let buffer = makeBuffer();

 // добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010' 

buffer(null);
  buffer(false);
  alert(buffer()); */


/*   const makeBuffer = () => {
    let masBuffer = [];
    
    function buffer(a) {
        if (a === undefined) {
            return masBuffer.join('');
        } else {
            masBuffer.push(String(a));
            return masBuffer;
        }
    }; 

    buffer.clear = function() {
        masBuffer = [];
    };
    return buffer;
}

let buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // "" */


/* function makeCounter() {
    var currentCount = 1;
  
    // возвращаемся к функции
    function counter() {
      return currentCount++;
    }
  
    // ...и добавляем ей методы!
    counter.set = function(value) {
      currentCount = value;
    };
  
    counter.reset = function() {
      currentCount = 1;
    };
  
    return counter;
  }
  
  var counter = makeCounter();
  
  alert( counter() ); // 1
  alert( counter() ); // 2
  
  counter.set(5);
  alert( counter() ); // 5 */


 /*  var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];


  const byField = (field) => {
    byField.field = field;
    users.sort (function (a, b) {
        return a[byField.field] > b[byField.field] ? 1 : -1;
    })
}


  users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя */








/* .. ваш код для filter, inBetween, inArray */

/* function inBetween (a, b) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
        return;
    }
    }
}


const filter = (arr, func) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(String(arr[i]));
        }
     
}   return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6 

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2  */ 



/* function filter (arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    filter.value = arr[i];
    if (func(filter.value)) {
        newArr.push(String(filter.value));
    }
} return newArr;
}


function inBetween (a, b) {
    inBetween.a = a;
    inBetween.b = b;
    return func = function () { 
        return ((filter.value >= inBetween.a && filter.value <= inBetween.b));        
    } 
}


function inArray(a) {
    inArray.a = a;
    return func = function () { 
        for (let j = 0; j < inArray.a.length; j++ ) {
        if (filter.value === inArray.a[j]) {
        return true;       
        } else { 
            continue;
        }
    }
    }
}





var arr = [1, 2, 3, 4, 5, 6, 7];

 alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6  

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6 

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2   */



/* function makeArmy() {

    var shooters = [];
    
    for (var i = 0; i < 10; i++) {
      
      var shooter = function() { // функция-стрелок
        alert( i ); // выводит свой номер
      };
      
      shooters.push(shooter);
    }
  
    return shooters;
  } */


/*   function makeArmy() {

    var shooters = [];
    
    for (var i = 0; i < 10; i++) {
      let j = +i;
      var shooter = function() { // функция-стрелок
        alert( j ); // выводит свой номер
      };
      
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  var army = makeArmy();
  
  army[0](); // стрелок выводит 10, а должен 0
  army[5](); // стрелок выводит 10...
  // .. все стрелки выводят 10 вместо 0,1,2...9 */