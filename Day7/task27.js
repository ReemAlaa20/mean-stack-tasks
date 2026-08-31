const original={
    name:'mona',
    details:{
        city:"cairo"
    }
}
var copy={...original}
copy.name='aya'
copy.details.city='alex'
console.log(original);//city changed because nested object
console.log(copy);




