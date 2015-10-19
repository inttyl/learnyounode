
var mymodule = require("./test6_module");


mymodule(process.argv[2], process.argv[3], function(err, data){
    
    if (err)  throw err;
    
    data.forEach(function(val, index, array){
        
        console.log(val);
        
    });
    
})