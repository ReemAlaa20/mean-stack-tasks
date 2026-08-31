const original={
    name:'mona',
    details:{
        city:"cairo"
    }
}
var copy2=structuredClone(original)
copy2.details.city='aswan'
console.log(copy2);
console.log(original);