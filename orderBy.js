/* class Enumerable {
    constructor(collection) {
      this.collection = collection;
    }
  
    // BEGIN (write your solution here)
    select(fn) {
      this.collection = this.collection.map(fn);
      return this;
    }
    // END
  
    // BEGIN (write your solution here)
    orderBy(fn, direction = 'asc') {
      this.collection = this.collection.sort(function (a, b)  {
        
        console.log(`${a} ${b}  ${direction}`);
        if (direction === 'asc') {
        console.log(`${fn(a)}`);
        if (fn(a) > fn(b)) {
          return 1;
        }
        if (fn(a) < fn(b)) {
         return -1;
        }
        return 0;
        } else if (direction === 'desc') {
          if (fn(a) > fn(b)) {
          return -1;
        }
        if (fn(a) < fn(b)) {
         return 1;
        }
        return 0;
        }
  } , direction);
        return this;
    }
    // END
  
    where(fn) {
      this.collection = this.collection.filter(fn);
      return this;
    }
  
    toArray() {
      return this.collection.slice();
    }
  }
  
  const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
  ];
  coll = new Enumerable(cars);
  
  const result = coll.orderBy(car => car.year, 'desc')
    .where(car => car.brand === 'bmw')
    .select(car => car.model);
  
  
  
   */










/* class Enumerable {
    // BEGIN (write your solution here)
  constructor(collection, operations) {
      this.collection = collection;
      this.operations = operations || [];
      console.log(`collection = ${this.collection}, operations = ${this.operations}`);
    }
  
  select(fn) { 
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);  
  }  
  
  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }
  
  orderBy(fn, direction = 'asc') {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.slice().sort( function (a, b) {
      let item1;
        let item2;
        
        if (direction === 'asc') {
        item1 = fn(a);
        item2 = fn(b);
        } else if (direction === 'desc') {
          item1 = fn(b);
          item2 = fn(a);
        }
        if (item1 > item2) {
          return 1;
        }
        if (item2 > item1) {
          return -1
        }
        return 0;
      }, direction));
    return new Enumerable(this.collection.slice(), newOps);  
  }
  
  toArray() { 
    let newColl = this.collection.slice();
    this.operations.forEach(function(func) {
      newColl = func(newColl).slice();
       
    })
    return newColl;
  }
}



const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

// [car] => [model]
const result = coll.orderBy(car => car.year, 'desc')
    .where(car => car.brand === 'bmw')
    .select(car => car.model);
console.log(`${result.toArray()}`); */











/* class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }
build(fn) {
  return new Enumerable(this.collection.slice(), this.operations.concat(fn));
}

// BEGIN (write your solution here)
where(...theArgs) {
  const newOps = this.operations.slice();
  const newColl = this.collection.slice();
  theArgs.forEach(function(fn) {
    
    if (typeof fn === 'function') {
      newOps.push(coll => coll.filter(fn));
    } else {
      newOps.push(coll => {
        return coll.filter(item => {
          let a = Object.keys(fn);
          function isInNewColl(elem) {
            return fn[elem] === item[elem];
          }
            console.log(`ВОЗВРАЩАЕМ ${a.every(isInNewColl)}`);
            if (a.every(isInNewColl)) {
              return true;
            }
        });
      });
    }  
  });
  return new Enumerable(this.collection.slice(), newOps);
}
// END

get length() {
  return this.toArray().length;
}

toArray() {
  if (!this.memo) {
    this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
  }

  return this.memo;
}
}
 */


const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

const result = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);
  result.toArray();
  console.log(`${result.toArray()}`);
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const result2 = coll.where({ brand: 'bmw' });
result2.toArray();
console.log(`${result2.toArray()}`);
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

const result3 = coll.where({ brand: 'kia', model: 'sorento' });
result3.toArray();
console.log(`${result3.toArray()}`);
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result4 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
result4.toArray();
console.log(`${result4.toArray()}`);
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result5 = coll.where({ brand: 'kia' }, car => car.year < 2013);
result5.toArray();
console.log(`${result5.toArray()}`);
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]









class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
 where(...theArgs) {
  const newOps = this.operations.slice();
  theArgs.forEach(function(fn) {
    
    if (typeof fn === 'function') {
      newOps.push(coll => coll.filter(fn));
    } else {
      newOps.push(coll => {
        return coll.filter(item => 
           Object.keys(fn).every(elem => fn[elem] === item[elem]) 
        );
      });
    }  
  });
  return new Enumerable(this.collection.slice(), newOps);
}
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;

