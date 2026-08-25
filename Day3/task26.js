var studends=['ahmed','sara','omar','laila','hassan'];
var x =[]
var count =0;
for (var i = 0; i < studends.length; i++) {
    x.push(studends[i].toUpperCase());
    if(x[i].startsWith('A')||x[i].startsWith('S')){
        console.log(x[i]);
        count++;
    }
        
}
console.log(count);

