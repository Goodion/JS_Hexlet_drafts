const length = str => str.length;
const toUpperCase = str => str.toUpperCase();


const solution = str => {
  const target = ' ';
  let pos = 0;
  let res = '';
  let foundPosStart;
  let foundPosEnd;
  while (true) {
    foundPosEnd = str.indexOf(target, pos);
    foundPosStart = pos;
    res = res + toUpperCase(str[foundPosStart]) + str.slice(foundPosStart + 1 , foundPosEnd + 1);
    if (foundPosEnd == -1) {
    res = res + str.slice(foundPosStart + 1 , length(str) + 1);
    break;
    }
    pos = foundPosEnd + 1;
  } 
  return res;
}; 

export default solution(str);

alert(solution('аргумент end отсутствует, то идет до'));
