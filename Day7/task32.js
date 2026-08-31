const students=[
    {name:'omar',grade:80},
    {name:'mona',grade:90},
    {name:'ali',grade:70}
]
students.forEach(({name,grade})=>{
    console.log(`${name} scored ${grade}`);
    
})