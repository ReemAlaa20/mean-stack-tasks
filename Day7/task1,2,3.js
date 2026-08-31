function fun1() {
    num1=5;
}
fun1();
console.log(num1);//5

function fun2() {
    "use strict";
    
    try{
        num2=5;
        
    }
    catch(error){
        console.error(error);
        
    }
    
}
fun2();
console.log(num2);//error num2 not defined

function fun3() {
    "use strict";
    var localvar ='test';
    try{
        // delete localvar;//error 
        
    }
    catch(error){
        console.error(error);
        
    }
    var obj={
        name:'ali'
    }
    delete obj.name;
    console.log(obj);
    
    
}
fun3();

