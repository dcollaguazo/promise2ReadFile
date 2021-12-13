const fs = require('fs');
const fetch = require('node-fetch');
const p = require('path');


const readFileData = (fileToRead) => {
  return new Promise((resolve, reject)=>{
    const ext = p.extname(fileToRead);
    if(ext==='.md'){
      fs.readFile(fileToRead,'utf8', (err, data)=>{
        resolve(data);
        reject(err);
      });
    }
  })
}

module.exports = {
  readFileData,
}