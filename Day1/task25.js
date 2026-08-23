var name=prompt('product name')
var brand=prompt('brand')
var price=Number(prompt('price'))
var category=prompt('category')
var c = confirm("Is this product in stock")
var productinfo ={
    n:name,
    b:brand,
    p:price,
    c:category,
    cc:c
}
var total = name + '   '+ brand +'   ' + price +'   ' + category +'   ' + c
console.log(`${total}`)
var x = document.getElementById('maintitle')
var y = document.getElementById('result')
x.innerText=total;
y.innerText=total;
console.log(name[0])