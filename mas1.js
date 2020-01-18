// BEGIN (write your solution here)
/* const uniq = (arr) => {
    const newArr = arr.reduce(
      (acc, value) => {
      
      if (acc.includes(value) === false) {
        return acc = acc.concat(value);
      } else {
        return acc;
      }
      console.log(`acc.includes == ${acc.includes(value)},`);
      console.log(`arr == ${arr}, acc == ${acc},`);
  }, 
  []);
  console.log(`newArr == ${newArr}`);
  return newArr; 
  } */


  
  /* console.log(uniq([2, 1, 2, 3])); */
  // END










const wordsCount = (list, stopList) => {

    const lowCaseList = list.map(word.toLowerCase());
     
    const filteredList = lowCaseList.filter(word => stopList.includes(word) === false);
    
    const groupList = filteredList.reduce(
      (map, word) => {
        
        if (map.has(word)) {
            return map.set(word, map.get(word) + 1)
        } else {
            return map.set(word, 1);
        }    
      },
      new Map());

    return groupList;
}

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
console.log(wordsCount(words, stopWords)); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]
