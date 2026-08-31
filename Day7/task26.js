let person1={
    name:'ali',
    child:{
        age:5
    }
}
let person2=person1;
person2.name='omar';
console.log(person1.name);//omar: person2 refernce to same object as person1
