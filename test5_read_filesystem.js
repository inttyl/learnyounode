

var fs = require("fs");
var path = require("path");



fs.readdir(process.argv[2], function(err, dirContent){
    
    var filter;
    var newFilesList;
    
    filter = process.argv[3];
    
    if(err) throw err;
    
    //dirContent, array des fichiers du repertoire
    newFilesList = dirContent.filter(function(val,index, array){
        return path.extname(val) === '.'+filter;
    });
    
    newFilesList.forEach(function(val, index, array){
        console.log(val);
        
    })
    
})