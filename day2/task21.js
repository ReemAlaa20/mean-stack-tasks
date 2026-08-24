var sum=0;
var x=[prompt('num1'),prompt('num2'),prompt('num3'),prompt('num4'),prompt('num5')]
for (var i = 0 ; i <5  ; i++) {
    sum+=Number(x[i]);

    
}
var avarage=(sum/5);
console.log(`sum :${sum}`);
console.log(`avarage :${avarage}`);
