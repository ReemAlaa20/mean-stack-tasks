var arr =[16,21,17,19]
var x =arr.some((v,i)=>{
    return v>=18
})
var y =arr.every((v,i)=>{
    return v>=18
})
console.log(x , y);

