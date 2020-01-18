const fact = n => {
   const iter = (counter, acc) => { 
    if (counter === 1) {
        return acc;
    }
 return iter(counter - 1, acc * counter);
}
return iter(n, 1);
}

export default  const UsyCounter = (z, o) => ( ((z-o) >= 2) ? 0 : ((z-o) === 1) ? 1 : (fact(o+1) / (fact(o-z+1) * fact(z)) )) ;
