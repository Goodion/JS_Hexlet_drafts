var animals = 'ant\nbison\ncamel\nduck\nelephant\n';

const lines1 = animals.split('\n').slice(0, -1);
console.log([...lines1]);
