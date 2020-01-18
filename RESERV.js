import path from 'path';
import Tree from 'hexlet-trees';
import { Dir, File } from 'hexlet-fs';


const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    /* console.log(`FILEPATH MKDIR ${filepath}`); */
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    /* console.log(`PARENT MKDIR ${parent}`); */
    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new Dir(base));
    return true;
  }

  // BEGIN (write your solution here)
  
  mkdirpSync(filepath) {
    const pathDir = getPathParts(filepath);
    /* console.log(pathDir); */
           
     const res = pathDir.reduce( (iAcc, n) => {
      if (!iAcc) {
        return false;
      }

      const current = iAcc.getChild(n);
      if (!current) {
        return iAcc.addChild(n, new Dir(n));
      }
      
      if (current.getMeta().isFile()) {
        return false;
      }
      
      return current;
        
        /* iAcc = `${iAcc}/${n}`;  */
        /* console.log(`PARENT = ${parent}, n = ${n}, FindNode N = ${this.findNode(n)} IACC === ${iAcc}`); */
        /* return iAcc; */
      
    }, this.tree);

    return !!res;
  }


  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    
    const [...pathDir] = getPathParts(dir);
    /* console.log(pathDir); */
    const parent = this.findNode(dir);
      if (!parent || parent.getMeta().isFile()) {
        return false;
      }
        
    /* console.log(`parent = ${parent} BASE = ${base}`); */

    if (parent === undefined || !parent) {
      /* console.log(`!PARENT`); */
      return false;
    } 
      
    parent.addChild(base, new File(base, ''));
    
    return true;
  }

  readdirSync(filepath) {
   /*  if (filepath === '/') {
      return '/'.getChildren();
    } */

    const parent = this.findNode(filepath);
    console.log(`parent = ${parent}`);

    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
   
    return parent.getChildren().map(child => child.getKey());
  }

  rmdirSync(filepath) {
    
  }

  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
