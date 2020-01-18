const getPathParts = (filePath) => {
  return filePath.split('/')
  .filter( el => el !== '');
}


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
    
    isDirectory(path) {
      const arrPath = getPathParts(path);
      let current = '', parent = '';
      if (arrPath.length === 1) {
         current = arrPath[0];
         parent = this;
         console.log(current, parent);
      } else {
         current = arrPath.splice([-1]).join('');
         parent = this.getDeepChild(arrPath);
         console.log(current, parent);
      }
      return parent.hasChild(current);
    }



  }

 
 


tree = new Tree('/');
tree.addChild('var')
  .addChild('lib')
  .addChild('run');
tree.addChild('etc');
tree.addChild('home');


console.log(tree.isDirectory('//etc/')); // false




/* isDirectory(path)
isFile(path)
mkdirSync(path)

touchSync(path) - создает пустой файл. На самом деле, в реальной файловой системе, 
команда touch меняет время последнего обращения к файлу, а побочным эффектом этой 
команды является создание файла в случае его отсутствия. По этой причине данной 
командой часто пользуются для создания файлов.

Реализуйте функцию getPathParts, которая разбивает путь на массив имен. Без этой функции
 не будет работать метод findNode, осуществляющий глубокий поиск файла (каталога) внутри текущего каталога.
Для работы с путями используйте возможности встроенного в Node.js модуля Path. */





// своё

import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line

// BEGIN (write your solution here)
const getPathParts = (filePath) => {
    return filePath.split('/')
    .filter( el => el !== '');
  }
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  isDirectory(path) {
    const arrPath = getPathParts(path);
    let current = '', parent = '';
    if (arrPath.length === 1) {
        current = arrPath[0];
        parent = this.tree;
    } else {
        current = arrPath.splice([-1]).join('');
        parent = this.tree.getDeepChild(arrPath);
    }
    return parent.hasChild(current);
  }

  isFile(path) {
    const arrPath = getPathParts(path);
    let current = '', parent = '';
    if (arrPath.length === 1) {
        current = arrPath[0];
        parent = this.tree;
    } else {
        current = arrPath.splice([-1]).join('');
        parent = this.tree.getDeepChild(arrPath);
    }
    return parent.hasChild(current);
  }

  mkdirSync(path) {
    if (!this.isDirectory(path)) {
      const arrPath1 = getPathParts(path);
        let current = '', parent = '';
        if (arrPath1.length === 1) {
            current = arrPath1[0];
            parent = this.tree;
        } else {
            current = arrPath1.splice([-1]).join('');
            parent = this.tree.getDeepChild(arrPath1);
        }
      parent.addChild(current, { type: 'dir' });
    } else {
    return;
    }
  }

  touchSync(path) {
    if (!this.isDirectory(path)) {
      const arrPath1 = getPathParts(path);
        let current = '', parent = '';
        if (arrPath1.length === 1) {
            current = arrPath1[0];
            parent = this.tree;
        } else {
            current = arrPath1.splice([-1]).join('');
            parent = this.tree.getDeepChild(arrPath1);
        }
      parent.addChild(current, { type: 'file' });
    } else {
    return;
    }
  }

  // END
  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
















/*   files.isDirectory('/etc'); // false

files.mkdirSync('/etc');
files.isDirectory('/etc'); // true

files.mkdirSync('/etc/nginx');
files.isDirectory('/etc/nginx'); // true

files.isFile('/file.txt'); // false

files.touchSync('/file.txt');
files.isFile('/file.txt'); // true */



// учительское
// BEGIN
const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');
// END





// BEGIN
  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, { type: 'file' });
  }

  isFile(filepath) {
    // const parts = getPathParts(filepath);
    // const current = this.tree.getDeepChild(parts);
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'file';
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, { type: 'dir' });
  }

  isDirectory(filepath) {
    // const parts = getPathParts(filepath);
    // const current = this.tree.getDeepChild(parts);
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'dir';
  }
  // END
