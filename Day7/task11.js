const student={
    name:'ali',
    age:15,
    city:'cairo'

}
student.age=20;
console.log(student);
student.grade=98;
console.log(student);
delete student.city;
console.log(student);
try{
    student={
        name:'ahmed'
    }
}
catch(err){
    console.log(err);
    
}

