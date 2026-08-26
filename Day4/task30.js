var arr =[
    {id:1,title:'pen',price:10},
    {id:2,title:'book',price:50},
    {id:3,title:'bag',price:25}
]
var titles =arr.map((p)=>{
    return p.title.toUpperCase();
    
    
})
console.log(titles);
var x=arr.filter((p)=>{return p.price<30})
console.log(x);

var total = arr.reduce((sum,item)=>{
    return sum+item.price;
},0)
console.log(total);


