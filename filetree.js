class Tree {
    constructor(key, meta, parent) {
      this.parent = parent;
      this.key = key;
      this.meta = meta;
      this.children = new Map();
    }
  
    getKey() {
      return this.key;
    }
  
    getMeta() {
      return this.meta;
    }
  
    addChild(key, meta) {
      const child = new Tree(key, meta, this);
      this.children.set(key, child);
  
      return child;
    }
  
    getChild(key) {
      return this.children.get(key);
    }
  
    // BEGIN (write your solution here)
    hasChildren() {
        return this.children.size !== 0;
    }

    hasChild(key) {
        return this.children.has(key);
    }

    getParent() {
        return this.parent;
    }

    removeChild(key) {
        return this.children.delete(key);
    }

    getChildren() {
        return Array.from(this.children).map( ([el, ...rest]) => rest[0]);
    }

    getDeepChild(keys) {
        const [key, ...rest] = keys;
        return this.getChildren().reduce( (acc, child) => (child.getKey() === key && rest.length !== 0) ? child.getDeepChild(rest) :
            (child.getKey() === key && rest.length === 0) ? child : acc
        , null);
    }
    // END
  }

 
  
 // getDeepChild(keys). Функция возвращает null если узел не найден или был передан пустой массив.





  tree = new Tree('/');
tree.addChild('var')
  .addChild('lib')
  .addChild('run');
tree.addChild('etc');
tree.addChild('home');

// example: getDeepChild
const subtree = tree.getDeepChild(['var', 'lib']);
console.log(subtree.getKey()); // lib 

console.log(tree.getDeepChild(['var', 'nobody'])); // null
/* 
 const parent = subtree.getParent();
parent.getKey(); // var 

console.log(tree.removeChild('home')); // true
console.log(tree.removeChild('nonexistentNode')); // false

console.log(tree.children);
console.log(tree.hasChildren()); // true 
const emptyTree = new Tree('/');
console.log(emptyTree.hasChildren());// false


 console.log(tree.hasChild('/'));// false
console.log(tree.hasChild('etc')); // true 




const subtree4 = tree.getChild('var');
console.log(subtree4); // 'var'

const subtree1 = tree.getChild('undefined');
console.log(subtree1); // undefined

const subtree2 = tree.getDeepChild(['var', 'lib']);
console.log(`${subtree2} && ${subtree2.getKey()}`); // 'lib'
const parent1 = subtree2 && subtree2.getParent();
console.log(`${parent1} && ${parent1.getKey()}`); // 'var'


const subtree3 = tree.getDeepChild(['var', 'lib', 'one', 'two']);
console.log(`${subtree3}`); // null
const subtree02 = tree.getDeepChild([]);
console.log(`${subtree02}`); // null 


const subtree5 = tree.getChild('var');
    if (subtree5) {
      subtree5.removeChild('lib');
    }
    console.log(subtree && !subtree.hasChildren());


    const dirs = tree.getChildren().map(child => child.getKey());
    console.log(dirs) // ['var', 'etc', 'home']);
   */






  Tree.js
  // BEGIN
  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  getDeepChild(keys) {
    if (keys.length === 0) {
      return null;
    }
    const [key, ...rest] = keys;
    const node = this.getChild(key);
    if (node === undefined) {
      return null;
    } else if (rest.length === 0) {
      return node;
    }
    return node.getDeepChild(rest);
  }

  getChildren() {
    return [...this.children.values()];
  }
  // END