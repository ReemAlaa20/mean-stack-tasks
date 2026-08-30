var nameproduct=document.getElementById('nameproduct')
var price=document.getElementById('price')
var category=document.getElementById('category')
var quantity=document.getElementById('quantity')
var productbody=document.getElementById('productbody')
var producttable=document.getElementById('producttable')
var showproduct=document.getElementById('showproduct')
var addproduct=document.getElementById('addproduct')
var formadd=document.getElementById('formadd')
var formupdate=document.getElementById('formupdate')
var updatebut=document.getElementById('updatebut')

var products=[
    {
        Id:1,
        Name:'Laptop',
        Price:18500,
        Category:'Electronics',
        Quantity:4

    },
    {
        Id:2,
        Name:'Mouse',
        Price:180,
        Category:'Electronics',
        Quantity:25

    },
    {
        Id:3,
        Name:'Notebook',
        Price:35,
        Category:'Stationery',
        Quantity:100

    },
    {
        Id:4,
        Name:'Desk Lamp',
        Price:420,
        Category:'Home',
        Quantity:0

    }
  
]
function printProducts(list) {
   productbody.innerHTML=''
    list.forEach(product => {
        var row=document.createElement('tr')
        row.innerHTML=`
        <td>${product.Id}</td>
        <td>${product.Name}</td>
        <td>${product.Price}</td>
        <td>${product.Category}</td>
        <td>${product.Quantity}</td>
        <td><button onclick="deleteProduct(${product.Id})">Delete</button>&nbsp;&nbsp;<button onclick="updateProduct(${product.Id})">Update</button></td>
       
        `;
        productbody.appendChild(row)
    });
}
showproduct.addEventListener('click',()=>{
    producttable.style.display='table';
    printProducts(products)
})
formadd.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameproduct.value==''||Number(price.value)<=0||quantity.value<0)
        alert('error')
    else {
        products.push({
            Id:products.length+1,
            Name:nameproduct.value,
            Price:Number(price.value),
            Category:category.value,
            Quantity:Number(quantity.value)
        })
        printProducts(products)
        formadd.reset()

    }    
})
var updateid;
function updateProduct(id) {
    var index = products.findIndex((p)=>p.Id==id)
    updateid=index;
    formupdate.style.display='block';
    document.getElementById('updatename').value=products[index].Name;
    document.getElementById('updateprice').value=products[index].Price;
    document.getElementById('updatecategory').value=products[index].Category;
    document.getElementById('updatequantity').value=products[index].Quantity;
}
formupdate.addEventListener('submit',(e)=>{
    e.preventDefault();
    products[updateid].Name=document.getElementById('updatename').value;
    products[updateid].Price=Number(document.getElementById('updateprice').value);
    products[updateid].Category=document.getElementById('updatecategory').value;
    products[updateid].Quantity=Number(document.getElementById('updatequantity').value);
    printProducts(products)
    formupdate.style.display='none';

})

function deleteProduct(id) {
    var index = products.findIndex((p)=>p.Id==id)
    var deleted = products.splice(index,1);
    printProducts(products)
}
