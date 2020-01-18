// функция поиска целого числителя через итерации 
const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
 
   var test = num; 


  const iter = (test, div) => {
    if (test < div) {
      return 1;
    }  

  if ((test % div) == 0) {
   return div;
 }
   return iter(test, ++div);
 }
 return iter (num, 2)
    
    // END
  };
  
  console.log(smallestDivisor(77));
  
  
 
 // export default smallestDivisor;
  