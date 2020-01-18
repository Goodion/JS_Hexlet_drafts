/* const findFiles = (tree, str, filePath = []) => {
  

  const iter = (node, currentPath, acc) => {
    if (node.type === 'file' && node.name.includes(str)) {
      let nfilePath = [...currentPath, node.name];
      nfilePath[0] = '';
      nfilePath = nfilePath.join('/');
      return [...acc, nfilePath]; 
    }
    
    if (node.type === 'directory' && node.children.length !== 0) {
        currentPath = [...currentPath, node.name];
        return node.children.reduce((iAcc, n) => iter(n, currentPath, iAcc), acc);
    }
  
    return acc;
   
  };
  return iter(tree, [], []);
}; */

const findFiles = (tree, str) => {
  

  const iter = (node, currentPath, acc) => {
    if (node.type === 'file' && node.name.includes(str)) {
      let nfilePath = [...currentPath, node.name];
      nfilePath[0] = '';
      nfilePath = nfilePath.join('/');
      return [...acc, nfilePath]; 
    }
    
    if (node.type === 'directory' && node.children.length !== 0) {
        currentPath = [...currentPath, node.name];
        return node.children.reduce((iAcc, n) => iter(n, currentPath, iAcc), acc);
    }
  
    return acc;
   
  };
  return iter(tree, [], []);
};

//учительское
const findFilesByName = (root, substr) => {
  const iter = (n, ancestry, acc) => {
    const newAncestry = path.join(ancestry, n.name);
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, newAncestry] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;


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
  
  console.log(findFiles(tree, 'fi'));