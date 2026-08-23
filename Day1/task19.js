var name = prompt('client name')
var price = prompt('price')
var c = confirm("has payment been made ?")
Number(price)
var r = name +'  '+ price +'  '+ c
console.log(name , price , c)
alert(`${name} , ${price} ,${c} `)
var x = document.getElementById('result')
x.innerText= r