/* const reverse = (str) => {
  let i = str.length - 1;
  let res = '';
  while (i >= 0) {
   res = res + str[i];
   i = --i;
  // alert(res);
  // alert (i);
  }
 return res; 
}
alert(reverse('cat'));
 */



const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for ( let i = 2; i < num; i++) {
    
    if (num % i == 0) {
      return false;
      
    }  
    
  } 
  return true; 
} 
alert (isPrime(73));