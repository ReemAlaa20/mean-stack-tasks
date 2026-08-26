var students =[
    {name:'omar',grade:88},
    {name:'mona',grade:90},
    {name:'ali',grade:70}
]
for (var element of students) {
    console.log(`name :${element.name} , grade : ${element.grade}`);
    
}
var x = students.filter((v)=>{
    return v.grade>=80
})
console.log(students.map(()=>{
    return x;
     
}));

