function fun() {
    if(true){
        let x=5;
        const y=10;
    }
        
    
    console.log(x);//error let or const block scope
    console.log(y);
}
fun()//x,y not defined
