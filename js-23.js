/* const camelize = (str) => {
  let newStr;
  let arr = str.split('-');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '') {
      arr.splice(i, 1);
      i--;
    } else {
      newStr = arr[i].slice(1);
      arr[i] = arr[i].charAt(0).toUpperCase() + newStr;
    }
  } return arr.join('');
} */

/* function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("---webkit---transition-style-image--")); */


/* const removeClass = (obj, cls) => {
  let arr = obj.className.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == cls) {
      arr.splice(i, 1);
      i--;
    }
  } return obj.className = arr.join(' ');
}

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my' */

/* const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  } return arr;
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1] */


/* var arr = ["HTML", "JavaScript", "CSS"];
let arrSorted = [];

for (let i = 0; i < arr.length; i++) {
  arrSorted[i] = arr[i];
}
arrSorted.sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */

/* var arr = [5, 2, 1, -10, 8];
const compareNumericReverse = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
}

arr.sort(compareNumericReverse);
alert(arr); */



/* var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

const compareAge = (a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
}

people.sort(compareAge);

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6 */


/* var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

alert( arrSorted );
alert( arr ); */


/* var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

const printList = (list) => {
  let next = 'next';
  for ( let i = 0; ; i++ ) {
    alert(list.value);
    list = list.next;
    if (list == undefined) {
      break;
    }
  }
} */

/* const printList = (list) => {
  if (list !== undefined) {
  alert (list.value);
  list = list.next;
  printList(list);
  } return; 
} 
 */

/* const printReverseList = (list) => {
  if (list !== undefined) {
    printReverseList(list.next); 
    alert(list.value);
  } 
} 
printList(list);*/
/* 

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];


const aclean = (arr) => {
  let word;
  let word2;
  let arrSorted = [];
  for (let i = 0; i < arr.length; i++) {
    word = arr[i];
    word = word.toLowerCase();
    word = word.split('');
    word = word.sort();
    word = word.join('');
    console.log('word ' + word);
    for (let j = (i + 1); j < arr.length; j++) {
      word2 = arr[j];
      word2 = word2.toLowerCase();
      word2 = word2.split('');
      word2 = word2.sort();
      word2 = word2.join('');
      console.log('word2 ' + word2);
      if (word == word2) {
        arr.splice(j, 1);
        j--;
      }
    }
} return arr;
}

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор" */


   
  





