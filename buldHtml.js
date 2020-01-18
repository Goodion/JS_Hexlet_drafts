// BEGIN (write your solution here)

const buildHtml = (data) => {

  const iter = (data, resultArr) => {
    const [tag, ...rest] = data;
    const nodeChildren = [...rest.filter(el => el instanceof Array)];
    const nodeContent = rest.filter(el => typeof el === 'string');
    const nodeClasses = rest.filter(el => (el instanceof Object && !(el instanceof Array)));

    const strContent = nodeContent.join('');
    const arrClasses = [];

    for(let key in nodeClasses[0]) {
      arrClasses.push(` ${key}="${nodeClasses[0][key]}"`);
    }

    const strClass = arrClasses.join('');
      
    const child = nodeChildren[0] ? nodeChildren[0].map(n => iter(n, resultArr)) : resultArr;
    const strChild = child.join('');
    
    resultArr = `<${tag}${strClass}>${strContent}${strChild}</${tag}>`;
    
    return resultArr;

    /* if (!nodeChildren[0]) {
      resultArr = `<${tag}${strClass}>${strContent}</${tag}>`;
      
      return resultArr;
    } else {
      childResult = `<${tag}${strClass}>${nodeChildren[0].map( n => iter(n, resultArr))}</${tag}>`;
      
      return childResult;
    } */
  }

return iter(data, []);
}


// END


const data = ['html', [
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
    <html><body><h2 class="header">first header</h2><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>

console.log(buildHtml(data));
console.log(buildHtml(data1));
console.log(buildHtml(data2));


{/* <html>
  <meta><title>hello, hexlet!</title></meta>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html> */}


/* const buildHtml = (data) => {

  const iter = (data, resultArr) => {
    const [tag, ...rest] = data;
    const nodeChildren = [...rest.filter(el => el instanceof Array)];
    const nodeContent = rest.filter(el => typeof el === 'string');
    const nodeClasses = rest.filter(el => (el instanceof Object && !(el instanceof Array)));

    const strContent = nodeContent.join('');
    const arrClasses = [];

    for(let key in nodeClasses[0]) {
      arrClasses.push(` ${key}="${nodeClasses[0][key]}"`);
    }

    const strClass = arrClasses.join('');
      
    const child = nodeChildren[0] ? nodeChildren[0].map(n => iter(n, resultArr)) : resultArr;
    const strChild = child.join('');
    
    resultArr = `<${tag}${strClass}>${strContent}${strChild}</${tag}>`;
    
    return resultArr;
  }
return iter(data, []);
}

export default buildHtml; */



// учительское

// BEGIN
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

const buildHtml = (data) => {
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

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

export default buildHtml;
// END