const propertyActions = [
    {
      name: 'body',
      check: arg => typeof arg === 'string',
      process: _.identity,
    },
    {
      name: 'children',
      check: arg => arg instanceof Array,
      process: (children, f) => children.map(f),
    },
    {
      name: 'attributes',
      check: arg => arg instanceof Object,
      process: _.identity,
    },
  ];
  
  const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));
  
  const parse = (data) => {
    const [first, ...rest] = data;
    const root = {
      name: first,
      attributes: {},
      body: '',
      children: [],
    };
    const args = rest.reduce((acc, arg) => {
      const { name, process } = getPropertyAction(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, root);
    return buildNode(args.name, args.attributes, args.body, args.children);
  };

  const singleTagsList = new Set(['hr', 'br', 'img']);
  const buildNode = (name, ...args) => {
    const C = singleTagsList.has(name) ? SingleTag : PairedTag;
    return new C(name, ...args);
  };

  
  
  
 

  function getName() {
    return this.name;
  }
  
  function getAttributes() {
    return this.attributes;
  }
  
 function Node (name, attributes = {}) {
      this.name = name;
      this.attributes = attributes;
      this.getName = getName();
      this.getAttributes = getAttributes();
  }





function PairedTag(name, attributes = {}, body = '', children = []) {
 Node.apply(this, [name, ]);
 Node.apply(this, [attributes]);
 this.body = body;
 this.children = children;
 
 function toString() {
  const attrsLine = Object.keys(this.attributes)
   .map(key => ` ${key}="${this.attributes[key]}"`).join('');
const content = this.children.length > 0 ? this.children.map(child => child.toString()).join('') : this.body;
 return `<${this.name}${attrsLine}>${content}</${this.name}>`;
}
}




function SingleTag() {

  function   toString() {
    const attrsLine = Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`).join('');
    return `<${this.name}${attrsLine}>`;
    }
}

    const data = ['html', [
    ['head', [
      ['title', 'hello, hexlet!'],
    ]],
    ['body', [
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['span', 'span text'],
        ['hr'],
      ]],
    ]],
  ]];

  const data2 = ['html', [
    ['head', [
      ['title', 'hello, hexlet!'],
    ]],
    ['body', [
      ['div', { class: 'separator' }],
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['img', { class: 'image', href: '#' }],
        ['span', 'span text2'],
      ]],
    ]],
  ]];


  const ast = parse(data);
    const expected = new buildNode('html', {}, '', [
      new buildNode('head', {}, '', [
        new buildNode('title', {}, 'hello, hexlet!'),
      ]),
      new buildNode('body', {}, '', [
        new buildNode('h1', { class: 'header' }, 'html builder example'),
        new buildNode('div', {}, '', [
          new buildNode('span', {}, 'span text'),
          new buildNode('hr'),
        ]),
      ]),
    ]);

    const ast2 = parse(data2)

console.log(ast2);
// `<html><head><title>hello, hexlet!</title></head><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>`;






/* 

// Учительское

PairedTag.js
// BEGIN
export default class {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ? this.children.join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END


SingleTag.js
// BEGIN
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END


buildNode.js
// BEGIN
const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};
// END
 */




/* 



 // учительское по подклассам

 Node.js
// BEGIN
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END

PairedTag.js
// BEGIN
import Node from './Node';

export default class extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ?
      this.children.map(child => child.toString()).join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }
}
// END


SingleTag.js
// BEGIN
import Node from './Node';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}
// END */







// УЧИТЕЛЬСКОЕ ПО ФУНКЦИЯМ

Node.js
// BEGIN
function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) =>
    `${acc} ${key}="${this.attributes[key]}"`, '');
}

export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;

  this.getAttributesAsLine = getAttributesAsLine;
}
// END


PairedTag.js
// BEGIN
import Node from './Node';

function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
// END



SingleTag.js
// BEGIN
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleNode(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}
// END






// ПРОТОТИПЫ

PairedTag.js
// BEGIN
import Node from './Node';

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};
// END



SingleTag.js
// BEGIN
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
// END




// цепочки прототипов
Node.js
// BEGIN
export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) =>
    `${acc} ${key}="${this.attributes[key]}"`, '');
};
// END


PairedTag.js
// BEGIN
PairedTag.prototype = Object.create(Node.prototype);
// END



SingleTag.js
// BEGIN
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
// END