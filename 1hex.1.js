
const withoutTwoZeros = (a, b) => {
    let digitsSum = a + b;
    let mas = [];
    let oneMas = [];
    let j = 0;
    let resMas = [];
    let obj = {};
    for (let i = 0; i < digitsSum; i++) {
        mas[i] = 0;
    }
    for (let i = 0; i < digitsSum; i++) {
        oneMas[i] = 1;
    }
    
    checkNext = function () {
        if (mas[j] == 1) {
            mas[j] = 0;
            j++;
            resMas.push(mas.join(''));
            checkNext()
        } mas[j] = 1;
        
    }

    while (mas.join('') !== oneMas.join('')) {
        let res = 0;
        for (j = 0; j < mas.length; j++) {
            if (mas[j] == 0) {
                resMas.push(mas.join(''));
                mas[j] = 1;
                resMas.push(mas.join(''));
                break;
            } else {
                checkNext();
                break;
            }
        }
    }

     
    let checkString;
     let i = 0;  
     let counter = 0; 
        for (let k = 0; k < resMas.length; k++) {
       checkString = String(resMas[k]);
       
       i = checkString.indexOf('00');
       if (i !== -1) {
        resMas.splice(k, 1);
        k--;
       }  
    }
    
    for (let k = 0; k < resMas.length; k++) {
        counter = 0;
        checkString = String(resMas[k]);
        for (let x = 0; x < checkString.length; x++) {
        
        if (checkString.charAt(x) == '0') {
            counter++;
        }
        }
        
        if (counter !== a) {
            resMas.splice(k, 1);
            k--;
      }
    }

    function unique() {
        
      
        for (var i = 0; i < resMas.length; i++) {
          var str = resMas[i];
          obj[str] = true; // запомнить строку в виде свойства объекта
        }
      
        return Object.keys(obj); // или собрать ключи перебором для IE8-
      }

      resMas = unique(resMas);
      
return resMas.length;
}



/* withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3) // 4
withoutTwoZeros(2, 4); // 10 */


