var city =['cairo','giza','alex','aswan']
var x = city.find((v,i)=>{
    return v.startsWith('a')

})
console.log(x);
console.log(city.findIndex((v,i)=>{
    return v.startsWith('a')

}));

