import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
export const map = (f, elem) => {
  
  const iter = (elem, acc) => {
    if (isEmpty(elem)) {
      return reverse(acc);
    }
    const newElement = f(head(elem));
    acc = cons(newElement, acc);
    return iter( tail(elem), acc);
  } 

  return iter( elem, l() );
};


 export const mirror = HTML => map((elem => node(name(elem), reverseStr(value(elem)))), HTML);
   
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};











export const mirror = HTML => {
    const func = elem => {
      let newElem = node(name(elem), reverseStr(value(elem)));
      return newElem;
   }
   return map(func, HTML);
  }





















