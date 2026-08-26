var product =[
    {name:'milk',price:50},
    {name:'honey',price:100},
    {name:'rice',price:40}
]
var x = product.reduce((total,value)=>{
    return total+value.price
    
},0)
console.log(x);

