/* const findFilesByName = (node, acc = []) => {
  
  

  if (node.type === 'file') {
    const filePath = [...acc, node.name];
    acc = [...acc, node.name];
    return acc;
    
}

  if (node.children) {
    if (node.children.length === 0) {
      return acc;
    }

    let newAcc = [...acc, node.name]; 
    
    node.children.reduce( (iAcc, n) => findFilesByName(n, iAcc), newAcc);
    return acc;
  } 

   
}  */


// самый близкий
const findFilesByName = (node) => {
  
  const iter = (node, acc) => {
    
    if (node.children) {
      newAcc = [...acc, node.name]; 
      node.children.reduce( (iAcc, n) => iter(n, iAcc), newAcc);
      return acc;
    } 
    
    if (node.type === 'file') {
      newAcc = [...acc, node.name];
    }
    return newAcc;

  }
  return iter(node, []);
}



/* const findFilesByName = (tree, result = []) => {
  const iter = (node, acc, newAcc) => {
    
    if (node.type === 'directory' && node.children.length === 0) {
      return acc;
    }
    
    if (node.children) {
      newAcc = [...acc, node.name]; 
      return node.children.reduce( (iAcc, n) => iter(n, iAcc), newAcc);
      
    } 
    if (node.type === 'file') {
      const resStr = [...acc, node.name].join('/');
      result.push(resStr);
      console.log(result);
      return result;
    }
  }
  return iter(tree, [], []);
}
 */





  /* if (node.type === 'file') {
    const filePath = [...acc, node.name];
    acc = [...acc, node.name];
    return acc;
    
}

  if (node.children) {
    if (node.children.length === 0) {
      return acc;
    }

    let newAcc = [...acc, node.name]; 
    
    node.children.reduce( (iAcc, n) => findFilesByName(n, iAcc), newAcc);
    return acc;
  } 

   
} */





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
          children: [
             {
              children: [{ meta: {}, name: 'deepfile.php', type: 'file' }],
              meta: {},
              name: 'deepest',
              type: 'directory',
             } 
          ],
          meta: {},
          name: 'NouProb',
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

console.log(findFilesByName(tree));


// ИТОГОВАЯ
const findFilesByName = (tree, str) => {
  

  const iter = (node, currentPath, acc) => {
    
    if (node.type === 'file' && node.name.includes(str)) {
      let nFilePath = [...currentPath, node.name];
      nFilePath[0] = '';
      nFilePath = nFilePath.join('/');
      return [...acc, nFilePath]; 
    }
    
    if (node.type === 'directory' && node.children.length !== 0) {
        currentPath = [...currentPath, node.name];
        return node.children.reduce((iAcc, n) => iter(n, currentPath, iAcc), acc);
    }
  
    return acc;
   
  };
  return iter(tree, [], []);
};

