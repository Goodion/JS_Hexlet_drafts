/* len = goods.length;
res = goods(goods.length-1);

push.goods(Компьютер); */

/* let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert( styles.shift() );
styles.unshift( 'Рэп', 'Рэгги' );
alert(styles); */

/* var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

alert( arr[rand] ); */

/* let num = 0;
const arr = [];
for (let i = 0; num !== '' && isNaN(num) !== true && num !== null; i++) {
num = prompt('Введи чё-нить', '0');
arr[i] = +num;
}


let sum = 0;
arr.pop();
for (let j = 0; j <= (arr.length - 1); j++) {
  sum = sum + arr[j];
} alert(sum); */

/* var numbers = [];

while (true) {

  var value = prompt("Введите число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert( sum ); */

/* const find = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    return i;
    } 
} return -1;
};


arr = ["test", 2, 1.5, false];

alert(find(arr, "test")); // 0

alert(find(arr, 2)); // 1

alert(find(arr, 1.5)); // 2

alert(find(arr, 0)); // -1 */

/* // функция возвращает массив с элементами с позиции a до b
const filterRange = (arr, a, b) => {
  let filtered = [];
  let j = 0; 
  for (let i = (a - 1); i <= (b - 1); i++) {
    console.log ('a=' + a + ' i=' + i + ' b=' + b);
    filtered[j] = arr[i];
    j++;
    console.log ('j=' + j);
  } return filtered;
};

var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);
alert(filtered); */



const filterRange = (arr, a, b) => {
  let filtered = [];
  let j = 0; 
  for (let i = 0; i <= arr.length; i++) {
    console.log ('a=' + a + ' i=' + i + ' b=' + b);
    if (arr[i] >= a && arr[i] <= b) {
    filtered[j] = arr[i];
    j++;
    } continue;
  } return filtered;
};

var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);
alert(filtered);
