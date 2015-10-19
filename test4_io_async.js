


var fs = require("fs");
var fileContentBuff;

fileContentBuff = fs.readFile(process.argv[2], "utf-8", function(error, data){
    
    if(error){
        throw error;
    }
        
   console.log(data.split('\n').length - 1);     
    
    
});
