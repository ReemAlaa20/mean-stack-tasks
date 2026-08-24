var first=prompt('first number')
var final=prompt('final number')
for (var index = first; index <= final; index++) {
    if(index%2==0){
        console.log(`${index} : express`);
        
    }
    else
        console.log(`${index} : normal`);
    
}