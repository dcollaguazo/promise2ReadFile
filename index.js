const mdLinks = require('./copy');
const file = process.argv[2];

if (require.main === module){
    mdLinks.readFileData(file)
    .then(r=>{
        console.log(r);
    })
    .catch(err=>console.log("This is why this promise is failing: " + err))
}