var userdata={
    name:'ahmed',
    age:26,
    city:'alex'
}
localStorage.setItem('userdata',JSON.stringify(userdata))

var read=JSON.parse(localStorage.getItem('userdata'))
console.log(typeof read);
console.log(read);

localStorage.removeItem('userdata')
