


const data = ['h1', { class: 'header' }, 'html builder example', ['tesrt'] ];

const [tag, ...rest] = data;
const getNodeContent = rest.filter(el => typeof el === 'string');
const getNodeChild = rest.filter(el => el instanceof Array);
const getNodeClass = rest.filter(el => (el instanceof Object && !(el instanceof Array)));

console.log( `tag= ${tag} content= ${getNodeContent} child= ${getNodeChild} class= ${getNodeClass}`);


