var fs = require("fs");
var path = require("path");


module.exports = filterDir;

function filterDir(chemin, fileFilter, callback){
    

    
    
    fs.readdir(chemin, function(err, dirContent){
    
        var newFilesList;
        
        if(err) return callback(err);
        
        //dirContent, array des fichiers du repertoire
        newFilesList = dirContent.filter(function(val,index, array){
            return path.extname(val) === '.'+fileFilter;
        });

        callback(null, newFilesList);
    })
    


}