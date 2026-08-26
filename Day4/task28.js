var arr =['js','html','css','js','react','js']
var count = arr.reduce((acc,value)=>{
    if(value=='js')
        acc++
    return acc
},0)
console.log(count);
