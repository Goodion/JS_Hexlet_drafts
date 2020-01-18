import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, elements) => {

  const iter = (elements, acc) => {
    if (isEmpty(elements)) {
    console.log(listToString(reverse(acc)));
    return reverse(acc);
  }
    const current = head(elements);
    const tailElements = tail(elements);
    if (func(current)) {
      acc = cons(current, acc);
    }
    return iter(tailElements, acc );
  }
  
  return iter(elements, l() );
}





export const quotes = (html) => {

  const func1 = (tag) => {
    if (is('blockquote', tag)) {
    return true;
  }
  } 
  
const func2 = HTML => map((elem => value(elem)), HTML);


const newHtml = filter(func1, html); 


return func2(newHtml);
}

// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
