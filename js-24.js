/* var arr = ["Есть", "жизнь", "на", "Марсе"];

 var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
} 

let arrLength = arr.map(function(word) {
  return word.length
});


alert( arrLength ); // 4,5,2,5 */


let arrTemp = [];
let arrRes = [];

const getSums = (arr) => {
  let arrRes = [];
  let arrTemp = [];
  for (i = 0; i < arr.length; i++) {
  arrTemp[i] = arr[i];
  
    arrRes[i] = arrTemp.reduce(function(sum, current) {
    return sum + current;
  }, 0);
} return arrRes;
}


  


alert(getSums([1,2,3,4,5,6]));
alert(getSums([-2,-1,0,1]));

