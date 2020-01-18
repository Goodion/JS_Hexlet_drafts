import { reduce } from 'hexlet-immutable-fs-trees';

// BEGIN (write your solution here)
const du = (dir) => {
  
  const calculateFilesWeight = curNode =>
    reduce( (acc, node) => {
        if (node.type === 'file') {
          return acc + node.meta.size; 
        }
        else {
          return acc; 
        }
    }, curNode, 0);

    
  
  

 const result = dir.children.map(n => {
    
    if (n.type === 'file') { 
      let file = [n.name, n.meta.size];
      console.log(`file = ${file}`);
      return file;

    } else {
      
      let directory = [n.name, calculateFilesWeight(n)];
      console.log(`directory = ${directory}`);
      return directory;
    }
  });  


const final = result.sort( function (a, b) {
    console.log(`A = ${a[1]} b = ${b[1]}`);
    return b[1]-a[1];
  }); 

return final;

}



export default du;
// END
