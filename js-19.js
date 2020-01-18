/* const fibBinet = (num) => {

  const sqr5 = Math.sqrt(5);
  const phi = (1 + sqr5) / 2;
  console.log ('sqr5 ' + sqr5 + ' phi ' + phi);
  let sum = Math.pow(phi,num) / sqr5;
  return Math.round(sum);


}

alert(fibBinet(77)); */

/* const ucFirst = (str) => {
  let i = str.length;
  str = str.charAt(0).toUpperCase() + str.slice(1,i);
  return str;
}
alert(ucFirst('proba')); */

/* const checkSpam = (str) => {
  let viagra = 'viagra';
  let xxx = 'XXX'.toLowerCase();
  str = str.toLowerCase();
  
  if (~str.indexOf(viagra) || ~str.indexOf(xxx)) {
   return true;
  } return false;
  } 

  alert(checkSpam('VIAGRA')); */


 /*  const truncate = (str, maxlength) => {
    let i = str.length;
    if (maxlength > i) {
      return str;
    } 
    return str.slice(0, maxlength -3) + '...';
  }
  alert(truncate('What I\'d like to tell on this topic is:', 20)); */


 /*  const extractCurrencyValue = (num) => {
    return +num.slice(1);
    
  }
  alert(extractCurrencyValue('$120')); */

  user = {}; // user = new Object();
  user.name = 'Вася';
  user.surname = 'Петров';
  user.name = 'Сергей';
  delete user.name;