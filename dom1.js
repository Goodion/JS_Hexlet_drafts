  /*   const search = (doc, tag) => {
        const coll = [...doc.children];
        const initAcc = coll.filter(e => e.tagName.toLowerCase() === tag)
      
        return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
      }
    







document.documentElement.innerHTML = `
    <head>
      <title>Hello, World</title>
    </head>
    <body>
      New
      <div>
        <h1>Start</h1>
        <div>
          <h2>Continue</h2>
        </div>
      </div>
      <p>Paragraph</p>
      <table>
        <tr>
          <th>1</th>
          <th>2</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>li</li>
              <li>li</li>
              <li>li</li>
            </ul>
          </td>
          <td>
            <p>Paragraph 2</p>
          </td>
        </tr>
      </table>
      <ul>
        <li>li</li>
      </ul>
    </body>
  `;

  search(document, 'p') */





  document.documentElement.innerHTML = `
  <body>
  <p>Boom</p>
   text
   <div>Bam</div>
</body>
`;


/*     var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  console.log(treeWalker);

  const pEl = document.createElement('p');
  
  while(treeWalker.nextNode()) { 
      el = treeWalker.currentNode.innerHTML;      
      pEl.append(el);
  }
  console.log(treeWalker); */


  const prettify = (doc) => {

    const coll = [...doc.children];
    const initAcc = coll.filter(e => e.tagName.toLowerCase() === 'div');
  
    return coll.map( child => {
      
      const textNode = child.innerText;
      const pEl = child.createElement('p');
      
      return pEl.append(textNode);
    
    });
  
  }

  prettify(document);












  