// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (name, value) => cons(name, value);

export const name = (node) => car(node);
export const value = (node) => cdr(node);

export const append = (dom, tag) => cons(tag, dom);

export const toString = (html) => {
  const iter = ( items, str ) => {
    if (isEmpty(items) === true) {
    console.log(`1str = ${str} listToString(str) = ${listToString(str)}` );
    return str;
  }
  str = `<${name(head(items))}>${value(head(items))}</${name(head(items))}>${str}`;
  console.log(`2str = ${str} listToString(str) = ${listToString(str)}` );
  return iter( tail(items), str);
  }
return iter( html, l() );
} 


// END






















// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const has = (list, x) => {
  if (isEmpty(list) === true) {
    return false;
  } else if (head(list) === x) {
    return true;
  } else {
    list = tail(list);
    return has(list, x);
  }
}

export const reverse = (list) => {
  
  const iter = (list, revList) => {
  if (isEmpty(list) === true) {
    return revList;
  }
  revList = cons(head(list), revList);
  return iter(tail(list), revList);
}
return iter( list, l() );
}


export const concat = (l1, l2) => {
if ( isEmpty(l1) === true ) {
    return l2;
  } 
  return l2 = cons(head(l1), concat(tail(l1), l2)); 
} 


// END
// BEGIN
export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }

  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) =>
    (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};
// END