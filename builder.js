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

  const buildNode = (name, attributes, body = '', children = []) => {
    const singleTagsList = new Set(['hr', 'img', 'br']);
    
    if (singleTagsList.has(name)) {
      const tag = new SingleTag(name, attributes, body, children);
      console.log(tag.toString());
      return tag;
    }
    const tag = new PairedTag(name, attributes, body, children);
    console.log(tag.toString());
    return tag;
  }



  class SingleTag {

    constructor(name, attributes = {}, body = '', children = []) {
      this.name = name;
      this.attributes = attributes;
       
      }
        
      toString() {
        const attrsLine = Object.keys(this.attributes)
          .map(key => ` ${key}="${this.attributes[key]}"`).join('');
        return `<${this.name}${attrsLine}>`;
    }
    
    }



  class PairedTag {
  
    constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
   
  }
  
      
    toString() {
       const attrsLine = Object.keys(this.attributes)
        .map(key => ` ${key}="${this.attributes[key]}"`).join('');
    const content = this.children.length > 0 ? this.children.map(child => child.toString()).join('') : this.body;
      return `<${this.name}${attrsLine}>${content}</${this.name}>`;
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
    const expected = new PairedTag('html', {}, '', [
      new PairedTag('head', {}, '', [
        new PairedTag('title', {}, 'hello, hexlet!'),
      ]),
      new PairedTag('body', {}, '', [
        new PairedTag('h1', { class: 'header' }, 'html builder example'),
        new PairedTag('div', {}, '', [
          new PairedTag('span', {}, 'span text'),
          new SingleTag('hr'),
        ]),
      ]),
    ]);

    const ast2 = parse(data2)

console.log(ast2);








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
