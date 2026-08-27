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
function createProduct(name='',price,category='',quantity){
    name=name.trim();
    category=category.trim();
    if(name==''||price<=0||quantity<0)
        return 'error';
    else {
        products.push({
            Id:products.length+1,
            Name:name,
            Price:price,
            Category:category,
            Quantity:quantity
        })
        return products[products.length-1]

    }    
} 

function printProducts(list) {
    console.table(list)
}
function getAllProducts() {
    return printProducts(products)
}

function getProductById(id) {
   return  products.find((p)=>p.Id==id)||null;
}

function updateProduct(id,name,price,category,quantity) {
    var index = products.findIndex((p)=>p.Id==id)
    if(index==-1)
        return 'error'
    products[index].Name=name;
    products[index].Price=price;
    products[index].Category=category;
    products[index].Quantity=quantity;
    return products[index];
}


function deleteProduct(id) {
    var index = products.findIndex((p)=>p.Id==id)
    if(index==-1)
        return 'error'
    var delproduct = confirm('Are you sure you want to delete product ?')
    if(delproduct==true){
        var deleted = products.splice(index,1);
        return deleted[0];
    }
}
function filterProducts(keyword) {
    keyword=keyword.trim().toLowerCase();
    return products.filter((p)=>{
        return p.Name.trim().toLowerCase().includes(keyword)||p.Category.trim().toLowerCase().includes(keyword);
    })
}
console.log(filterProducts('Electronics'));

function startApp() {
    while (true) {
        var n =Number( prompt(`choose option 
            1:add product 
            2:show all products 
            3:show product by id
            4:update product
            5:delete product
            6:search/filter
            0:exit
            `))
        switch (n) {
            case 1:
                var name=prompt('write product name')
                var price=prompt('write price of product')
                var category=prompt('write category of product')
                var quantity=prompt('write quantity of product')
                console.log(createProduct(name,Number(price),category,Number(quantity)));
                break;
            case 2:
                console.log(getAllProducts());
                break;
            case 3:
                var id = prompt('write id of product')
                console.log(getProductById(Number(id)));
                break;
            case 4:
                var id = prompt('write id of product')
                var name=prompt('write product name')
                var price=prompt('write price of product')
                var category=prompt('write category of product')
                var quantity=prompt('write quantity of product')
                console.log(updateProduct(+id,name,+price,category,+quantity));
                break;
            case 5:
                var id = prompt('write id of product')
                console.log(deleteProduct(+id));
                break;
            case 6:
                var keyword = prompt('enter search keyword')
                console.log(filterProducts(keyword));
                break;
            case 0:
                return
            default:
                alert('invalid')
        }
    }
}
startApp();

function repeatname(name,price,category,quantity) {
    products.some((p)=>{
        var exist = p.Name.trim().toLowerCase()==name.trim().toLowerCase();
    })
    if(exist)
        return 'error product name exist'
    return createProduct(name,price,category,quantity)
    

}

function sortByPrice(order='asc') {
    if(order=='asc')
        return products.toSorted((a,b)=>a-b)
    return products.toSorted((a,b)=>b-a)
}
function getStorestatus() {
    var totalproduct = products.length;
    var totalvalue= products.reduce((total,product)=>{
        return total+product*price;
    },0)
    var avgprice=totalproduct/products.length;
    var numoutofstock=products.reduce((count,product)=>{
        if(product.quantity==0)
            return count++;
        return count;
    },0)
    var obj ={
        totalproduct:totalproduct,
        totalvalue:totalvalue,
        avgprice:avgprice.toFixed(2),
        numoutofstock:numoutofstock

    }
    return obj
}
function groupByCategory() {
    return products.reduce((groups,product)=>{
        var category=products.Category
        if(!groups[category])
            groups[category]=[];
        groups[category].push(product)
        return groups
    },{})
}
function filterByPriceRange(min,max) {
    return products.filter((p)=>{
        return products.Price>=min&&products.Price<=max;
    })
}
const instock =(list)=>{
    list.filter(p=>p.Quantity>0)
}
function withAfterAction(fn,callback) {
    var result = fn()
    callback('done')
    return result;

}
function addMany(...items) {
    products.push(...items);
    return products;
}
