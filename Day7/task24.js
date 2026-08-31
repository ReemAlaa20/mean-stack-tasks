const user={
    name:'sara',
    age:22
}
const concat={
    email:'sara@nti.com',
    age:23
}
const merged={...user,...concat};
console.log(merged);
