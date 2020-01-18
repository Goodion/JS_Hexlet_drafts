// Функция проверки на все положительные или отрицательные
const signCount = (arr) => {
	let posNum = 0;
	let negNum = 0;
	let largestString = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] > 0) {
			posNum += 1;
		} else {
			negNum += 1;
    } 
  }
  
  if (posNum == 0) {
		largestString = 0;
	} else if (posNum > 0 && negNum == 0) {
		for (i = 0; i <= arr.length - 1; i++) {
			largestString = largestString + arr[i]; 
  } 
  } else { largestString = arr; } 
return largestString; 
};

// Функция-комбинатор соседних положительных и отрицательных
const Combiner = (arr) => {
let arrCombined = [0];
let j = 0;
let currentSign, defaultSign;
let zeroCounter;

// отрезаем начальные нули. Ставим курсор на первое ненулевое
for (zeroCounter = 0; zeroCounter < arr.length; zeroCounter++) {
if (arr[zeroCounter] == 0) {
  continue;
}
else if (arr[zeroCounter] > 0) {
  defaultSign = 'pos';
  break;
} else if (arr[zeroCounter] < 0) {
  defaultSign = 'neg';
  break;
}
}

for (let i = zeroCounter; i <= arr.length - 1; i++) {
	if (arr[i] > 0) {
		currentSign = 'pos';
	} else if (arr[i] < 0) {
		currentSign = 'neg';
	}
  
if (defaultSign == currentSign) {
    arrCombined[j] = arrCombined[j] + arr[i];
	} else {
		arrCombined[++j] = arr[i];
		defaultSign = currentSign;
  }
}
return arrCombined;
};

// Функция обрезания крайних отрицательных
const cutEdgeNeg = (arrCombined) => {
  if (arrCombined[0] < 0) {
    arrCombined.shift(); 
  }
  if (arrCombined[arrCombined.length - 1] < 0) {
    arrCombined.pop();
  } 
return arrCombined;
}


// Функция поиска наибольших строк в массив и выбор наибольшей из них
const findLargestString = (arrCombined) => {
  let a = 0, b = 0, sum = arrCombined[0];
  let largestStringMas = [];
  let j = 0; 
  let largestString = 0;

  for (let i = 0; i < arrCombined.length - 1; ) {
    a = arrCombined[i];
    b = arrCombined[i + 2];
    sum = sum + arrCombined[i + 1] + arrCombined[i + 2];
      if (a < sum && sum <= b ||
         a == sum && sum <= b) {
          largestStringMas[j] = b;
          i = i + 2;
          sum = arrCombined[i];
          j++;
        } else if (a <= sum && sum > b) {
          largestStringMas[j] = sum;
          i = i + 2;
          j++;
        } else if (a > sum && sum >= b) {
          largestStringMas[j] = a;
          i = i + 2;
          sum = arrCombined[i];
          j++;
        } else if (a > sum && sum < b) {
            if (a > b) {
            largestStringMas[j] = a;
            i = i + 2;
            sum = arrCombined[i];
            j++;
          } else {
            largestStringMas[j] = b;
            i = i + 2;
            sum = arrCombined[i];
            j++;
          }
        } 

  }

// Выбор наибольшего из массива
for (i = 0; i < largestStringMas.length; i++) {
  if (largestString < largestStringMas[i]) {
    largestString = largestStringMas[i];
  }
}


return largestString;
};


/* let arr = [0,0,-22,-16,11,-5,6,-36,0,0,-6,-7,5,-4,29,-23,150,-222,145,-45,2,-15,66,-34,-765,3453]; */

let arr = [0,0,0,-5233,-7746,572,6460,3278,-3592,4131,-5344,-5471,2589,-6157,-7409,-1013,-5608,0,9933,-3481,-8620,8225,1704,7666,6138,-3832,8701,-1297,9485,6657,-6512,0,-6503,8708,4777,4651,-7299,6909,1672,3790,6837,-4679,-3407,-8865,-6085,8365,-9434,-5450,-7096,0,8128,2353,-5550,5025,190,-9614,581,19,-7490,-76,9069,-841,5351,4258,-4851,6739,0,0,1668,2154,7139,-9010,-4262,8663,1661,8713,-7587,-2846,5900,5222,4632,218,6638,1690,-2592,-2484,-5450,-6876,1440,-4170,7891,3644,-7166,3875,5116,-8825,0,0,0,0];

alert('Наш массив: ' + arr);
alert('Проверка на все положительные/отрицательные: ' + signCount(arr));
alert('Комбинируем соседние полож/отр и убираем нули: ' + Combiner(arr));
alert('Обрезаем отрицательные по краям: ' + cutEdgeNeg(Combiner(arr)));
alert('НАИБОЛЬШАЯ СТРОКА!!!: ' + findLargestString(cutEdgeNeg(Combiner(arr))));




