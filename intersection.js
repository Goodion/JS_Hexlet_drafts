/* const intersection = (first, second) => {
    const res = first.filter( fItem => {
       return second.some( sItem => {
        return sItem === fItem ? true : false;
      });
    });
    
    const iter = (mas, acc) => {
        if (mas.length === 0) {
            return acc.reverse();
        }

        const curr = mas.pop();
        
        if (mas.indexOf(curr) === -1) {
            acc.push(curr);
        }
            
        

        return iter(mas, acc);
    }

    return iter (res, []);
  }


  export default (array1, array2) => {
  const filtered = array1.filter(value => array2.includes(value));
  return [...new Set(filtered)];
};
  
  

  console.log(intersection([2, 1], [2, 3]));
// → [2]

console.log(intersection([3, 1, 3], [3, 3, 2]));
// → [3]

console.log(intersection(
      ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
      ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
    ));
// → ['kirill', 'rakhim', 'alex', 'dima'] */



/* const fromPairs = (mas) => {

    return mas.reduce( (acc, item) => {
      
      const key = item.shift();
      const value = item.shift();

      acc[key] = value;
      return acc; 
   
     }, {} );

    
   
   }


   export default pairs =>
  pairs.reduce((acc, [key, value]) => ({ [key]: value, ...acc }), {});

   fromPairs([['fred', 30], ['barney', 40]]);
// → { 'fred': 30, 'barney': 40 } */




/* const enlargeArrayImage = (arr) => {
    
  return arr.reduce( (acc, value) => {
        console.log(acc, value);


        const newElem = value.reduce( (acc, newValue) => [...acc, newValue, newValue], [] );
        console.log(newElem);

        return [...acc, newElem, newElem] 
    
  }, [] );
    
  }

  const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
  ];
  // ****
  // *  *
  // *  *
  // ****
  
  console.log(enlargeArrayImage(arr));
  // ********
  // ********
  // **    **
  // **    **
  // **    **
  // **    **
  // ********
  // ******** */


/* const dfs = (tree) => {
  const [element, children] = tree;
  console.log(element);
  if (!children) {
    return;
  }
  return children.map(dfs);
} */


/* const downcaseFileNames = (tree) => {
  // console.log(tree);
  
  const {name, type, meta, children} = tree;

  let resName = name;

  if (type === "file") {
    const pointPos = name.indexOf(".");
    if (pointPos !== -1) {
      resName = (`${name.slice(0, pointPos).toLowerCase()}${name.slice(pointPos)}`);
      // console.log(resFilename);
    } else {
      resName = name.toLowerCase();
      // console.log(resFilename);
    }
  } 

  
    
  // console.log(`NAME= ${name}, TYPE= ${type}, CHILD= ${children} newTree= ${newTree}`);

  
  if (!children) {
    const newTree = {
      "meta": meta,
      "name": resName,
      "type": type
    };
    return newTree;
  }
  const newTree = {
    "children": children.map(downcaseFileNames),
    "meta": meta,
    "name": resName,
    "type": type
  };
  return newTree;
}




  const tree = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'config.json', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'eTc',
        type: 'directory',
      },
      { meta: {}, name: 'hosts', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };


  const actual = downcaseFileNames(tree);
  console.log(actual); */

// !!!!!!!!!!!!!!!
/*   const downcaseFileNames = (node) => {
    if (node.type === 'directory') {
      return { ...node, children: node.children.map(downcaseFileNames) };
    }
    return { ...node, name: node.name.toLowerCase() };
  };

  // моё
  const downcaseFileNames = (tree) => {
  
    const {name, type, meta, children} = tree;
    const resName = (type === "file") ? name.toLowerCase() : name;
   
    if (!children) {
      const newTree = {
        "meta": meta,
        "name": resName,
        "type": type
      };
      return newTree;
    }
    const newTree = {
      "children": children.map(downcaseFileNames),
      "meta": meta,
      "name": resName,
      "type": type
    };
    return newTree;
  } */




/*   // BEGIN (write your solution here)
const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  if (node.type === 'directory') {
      return { ...node, children: node.children.map(elem => filter(f, elem)).filter(v => v) };
    }
  return node;
}
// END */



/* const map = (f, node) => {
    
    const newNode = f(node);
    console.log(newNode.name);
    
    if (node.type === 'directory') {
      return { ...newNode, children: node.children.map(elem => map(f, elem)) };
    }
       
    return newNode;
  }; 
  
  const filter = (f, tree) => {
  if (!f(tree)) {
    return null;
  }
  const [name, children] = tree;
  console.log(name)
  if (!children) {
    return tree;
  }
  return [name, children.map(c => filter(f, c)).filter(v => v)];
};


export default filter; */

/* const findFilesByName = (node, str) => {
    
  const iter = (node, acc, pathAcc) => {
    // console.log(`ACC === ${acc} NODENAME === ${node.name}`);
    
    const {name, type, meta, children} = node;

    if (type === 'file' && name.includes(str)) {
      const resAcc = pathAcc.concat(acc);
      return acc = path.join(resAcc);
    }
    
    if (type === 'directory') {
    return iter(children, acc, pathAcc.concat(name));
    }

    const newPath = pathAcc.concat(name);
    const child = children;
    return iter(child, acc, newPath);
    
    console.log(`pathACC === ${pathAcc} NODENAME === ${node.name}`);      
    // console.log(`ACC2 === ${acc} CHILDREN=== ${node.children}`);
  
  }      
return iter(node, [], [] );
}  */


/* const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);
  console.log(f, node, acc, newAcc);
  if (node.type === "file") {
    return newAcc;
  }
  console.log(` node.CHILDREN === ${node.children}`);
  return node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
}

const findFilesByName = (node, str) => {
    
  const iter = reduce(node, acc, pathAcc) => {
    // console.log(`ACC === ${acc} NODENAME === ${node.name}`);
    
    if (type === 'file' && name.includes(str)) {
      const resAcc = pathAcc.concat(acc);
      return acc = path.join(resAcc);
    }
    
    if (type === 'directory') {
    return iter(children, acc, pathAcc.concat(name));
    }

    const newPath = pathAcc.concat(name);
    const child = children;
    return iter(child, acc, newPath);
    
    console.log(`pathACC === ${pathAcc} NODENAME === ${node.name}`);      
    // console.log(`ACC2 === ${acc} CHILDREN=== ${node.children}`);
  
  }      
return iter(node, [], [] );
}   */

/* const findFilesByName = (node, str, acc = [], pathAcc = []) => {
  // console.log(acc);
  if (node.type === 'file' && node.name.includes(str)) {
    pathAcc.push(node.name);
    acc.push(pathAcc.join('/'));
  return acc;
  }
  // console.log(acc);
  if ((node.type === 'file' && node.name.includes(str) === false)) {
    // console.log(acc);
    return;
  }
  // console.log(acc);
  pathAcc.push(node.name);
  return node.children.reduce( (pathAcc, n) => findFilesByName(n, str, acc, pathAcc), acc, pathAcc);

} */

/* const findFilesByName = (node, str, pathAcc = []) => {
  // console.log(acc);
  if (node.type === 'file' && node.name.includes(str)) {
    pathAcc.push(node.name);
  return pathAcc.join('/');
  }
  // console.log(acc);
  if ((node.type === 'file' && node.name.includes(str) === false)) {
    // console.log(acc);
  return pathAcc;
  }
  // console.log(acc);
  pathAcc.push(node.name);
  return node.children.reduce( (bPathAcc, n) => findFilesByName(n, str, bPathAcc), pathAcc);

} */


const findFilesByName = (node, str, pathAcc = [], resAcc = []) => {
  
  if (node.type === 'directory' && node.children.length !== 0) {
    const newPathAcc = [...pathAcc, node.name];
    return node.children.reduce( (bPathAcc, n) => findFilesByName(n, str, bPathAcc, resAcc), node, newPathAcc);
  } else if (node.type === 'directory' && node.children.length === 0) {
    return pathAcc;
  } else if (node.type === 'file') {
    let filePath = [...pathAcc, node.name];
    filePath = filePath.join('/');
    resAcc = [...resAcc, filePath];
    return resAcc;
  }
  
}
  
  
  
  
  
  
  
  
  /* if (node.type === 'directory' && node.children.length === 0) {
    return fileAcc;
  }
  
  if (node.type === 'directory' && node.children.length !== 0) {
    acc = [...acc, node.name];
    return node.children.reduce( (iAcc, n) => findFilesByName(n, str, iAcc, fileAcc), acc );
  }
  
  if (node.type === 'file') {
    fileAcc = [...acc, node.name];
    return fileAcc;
   
  }

  
} */








  /* if (node.type === 'directory' && node.children.length !== 0) {
    const newPathAcc = [...newPathAcc, node.name];
    return node.children.reduce( (bPathAcc, n) => findFilesByName(n, str, bPathAcc, resAcc), node, newPathAcc);
  } else if (node.type === 'directory' && node.children.length === 0) {
    return pathAcc;
  } else if (node.type === 'file') {
    let filePath = [...pathAcc, node.name];
    filePath = filePath.join('/');
    resAcc = [...resAcc, filePath];
    return resAcc;
  } */

/* 

    if (node.children.length === 0) {
      return pathAcc;
    } else {
      return node.children.reduce( (bPathAcc, n) => findFilesByName(n, str, bPathAcc), newPathAcc, resAcc);
      
    }
  }
    
  if (node.type === 'file') {
    let filePath = [...pathAcc, node.name];
    filePath = filePath.join('/');
    resAcc = [...resAcc, filePath];
    return resAcc;
  }

 
  
  
  
  
  return node.children.reduce( (bPathAcc, n) => findFilesByName(n, str, bPathAcc), pathAcc, resAcc); */


  


/* const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);
  console.log(f, node, acc, newAcc);
  if (node.type === "file") {
    return newAcc;
  }
  console.log(` node.CHILDREN === ${node.children}`);
  return node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
}*/

const tree = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'NgiNx',
          type: 'directory',
        },
        {
          children: [{ meta: {}, name: 'confiag.json', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'eTc',
      type: 'directory',
    },
    { meta: {}, name: 'marcon.js', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};

console.log(findFilesByName(tree, 'con'));









