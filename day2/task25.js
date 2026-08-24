function factorial(n) {
    var f=1;
    for (let index = 1; index <= n; index++) {
        f*=index
        
    }
    console.log(f);
    return f;
}
var n =Number(prompt('num'))
if(n<0){
    console.log('error');
    
}
else{
    factorial(n)
    
}
var x=factorial(5);
alert(`5! = ${x}`)
console.log(`5! = ${x}`);
