
function sumall(...numbers) {
    return numbers.reduce((sum,num)=>sum+num,0)
    
}
console.log(sumall(1,2,3));
console.log(sumall(10,20,30,40));
