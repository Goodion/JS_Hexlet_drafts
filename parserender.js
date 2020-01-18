const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const parse = (data) => {
  const [first, ...rest] = data;
  
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  
  const tag = rest
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: arg };
    }, root);

   return { 
     name: tag.name, 
     attributes: tag.attributes,
     body: tag.body,
     children: tag.children.map(parse),
   };
}

const render = (data) => {

   return singleTagsList.has(data.name) ? 
   [`<${data.name}${buildAttrString(data.attributes)}>`,
    `${data.body}${data.children.map(render).join('')}`,
  ].join('') :
        [`<${data.name}${buildAttrString(data.attributes)}>`,
        `${data.body}${data.children.map(render).join('')}`,
        `</${data.name}>`,
        ].join('');

};









const data3 = ['html', [
    ['meta', [
      ['title', 'hello, hexlet!'],
    ]],
    ['body', { class: 'container' }, [
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['span', 'span text2'],
        ['span', 'span text3'],
      ]],
    ]],
  ]];
  
  const data1 = ['html', [
    ['head', [
      ['title', 'hello, hexlet!'],
    ]],
    ['body', { class: 'container' }, [
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['span'],
        ['span', { class: 'text', id: 'uniq-key' }],
      ]],
    ]],
  ]];
  // <html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></body></html>`;
     
  const data2 = ['html', [
    ['body', [
      ['h2', { class: 'header' }, 'first header'],
      ['div', [
        ['p', 'hello, world'],
        ['p', 'good bye, world'],
        ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
      ]],
    ]],
  ]];
  // `<html><body><h2 class="header">first header</h2><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>`
   
  
  const data = ['html', [
    ['meta', { id: 'uniq-key' }, [
      ['title', 'hello, hexlet!'],
    ]],
    ['body', [
      ['br'],
    ]],
  ]];
  
  const ast = parse(data);
  
/*   { name: 'html', attributes: {}, body: '', children: [
    { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
      { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
    ]},
    { name: 'body', attributes: {}, body: '', children: [
      { name: 'br', attributes: {}, body: '', children: [] },
    ]},
  ]} */




  console.log(ast);
  console.log(render(ast));
  /* console.log(parse(data2)); */





  // УЧИТЕЛЬСКОЕ

// BEGIN
export const render = (data) => {
    const {
      name,
      attributes,
      body,
      children,
    } = data;
    const attrsLine = Object.keys(attributes)
      .map(key => ` ${key}="${attributes[key]}"`).join('');
    const content = children.length > 0 ? children.map(render).join('') : body;
  
    if (singleTagsList.has(name)) {
      return `<${name}${attrsLine}>`;
    }
  
    return `<${name}${attrsLine}>${content}</${name}>`;
  };
  
  const propertyActions = [
    {
      name: 'body',
      check: arg => typeof arg === 'string',
      process: identity,
    },
    {
      name: 'children',
      check: arg => arg instanceof Array,
      process: (children, f) => children.map(f),
    },
    {
      name: 'attributes',
      check: arg => arg instanceof Object,
      process: identity,
    },
  ];
  
  const getPropertyAction = arg => find(propertyActions, ({ check }) => check(arg));
  
  export const parse = (data) => {
    const [first, ...rest] = data;
    const root = {
      name: first,
      attributes: {},
      body: '',
      children: [],
    };
    return rest.reduce((acc, arg) => {
      const { name, process } = getPropertyAction(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, root);
  };
  // END