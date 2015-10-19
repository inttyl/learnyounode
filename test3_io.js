


var fs= require("fs");
var fileContentArr;


//PREMIER ESSAI 
// process.argv.forEach(function(val, index, array){
//     if (index > 1){
//         fileContentArr = fs.readFileSync(val).toString().split("\n");
//     }
// })

fileContentArr = fs.readFileSync(process.argv[2], "utf-8").split("\n");

console.log(fileContentArr.length-1);

