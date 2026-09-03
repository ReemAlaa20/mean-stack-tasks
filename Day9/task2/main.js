var getproduct=document.getElementById('getproduct')
var addbtn=document.getElementById('addbtn')
var updatebtn=document.getElementById('updatebtn')
var getbtn=document.getElementById('getbtn')
var deletebtn=document.getElementById('deletebtn')

getbtn.addEventListener('click',()=>{
    const url='https://jsonplaceholder.typicode.com/posts'
    const xhr=new XMLHttpRequest()

    xhr.open("GET",url)

    xhr.addEventListener("load",()=>{
        if(xhr.status>=200&&xhr.status<300){
            var data=JSON.parse(xhr.responseText)
            
            
            getproduct.innerHTML=""
            data.slice(0,10).forEach((product) => {
                getproduct.innerHTML+=`
                <div>
                <h3>${product.title}</h3>
                <p>${product.body}</p>
                </div>
                 `
            });
        }
            
        
    
    })
    xhr.send()
})

addbtn.addEventListener('click',()=>{
    var namep=document.getElementById('nameproduct').value;
    var idp=document.getElementById('idproduct').value;
    const url='https://jsonplaceholder.typicode.com/posts'
    var xhr=new XMLHttpRequest()
    xhr.open("post",url)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.addEventListener('load',()=>{
        if(xhr.status>=200&&xhr.status<300){
            var data=JSON.parse(xhr.responseText)
            console.log(data);}
        
    })
    var product={namep,idp}
    xhr.send(JSON.stringify(product))
})

updatebtn.addEventListener('click',()=>{
    var updatename=document.getElementById('updatename').value;
    var updateid=document.getElementById('updateid').value;
    const url=`https://jsonplaceholder.typicode.com/posts/${updateid}`
    var xhr=new XMLHttpRequest();
    xhr.open("put",url)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.addEventListener('load',()=>{
        if(xhr.status>=200&&xhr.status<300){
            var data=JSON.parse(xhr.responseText)
            console.log(data);}
        
    })
    var product={updatename,updateid}
    xhr.send(JSON.stringify(product))

    
})

deletebtn.addEventListener('click',()=>{
    var deleteid=document.getElementById('deleteid').value;
    
    const url=`https://jsonplaceholder.typicode.com/posts/${deleteid}`
    var xhr=new XMLHttpRequest();
    xhr.open("delete",url)
    xhr.addEventListener('load',()=>{
        if(xhr.status>=200&&xhr.status<300)
           alert('product deleted')
            
        
    })
   
    xhr.send()

    
})
