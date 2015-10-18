



//console.log(process.argv);
var somme =  0 ;

process.argv.forEach(function(val,index, array){
    
    if(index > 1){
        
        if (!isNaN(val)){
            
            somme += Number(val);
            
        }
        
        
    }
    
})

console.log(somme)