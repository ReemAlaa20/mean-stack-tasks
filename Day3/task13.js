var min =51 ;
var max =0;
var sum=0;
for (let index = 1; index < 6; index++) {

    var n = Math.random()*50
    console.log(n);
    sum+=n;
    if(n<min)
        min=n;
        
    if(n>max)
        max=n;
}
console.log(`min:${min}`);
console.log(`min:${max}`);
console.log(`avarage:${(sum/5).toFixed(2)}`);
