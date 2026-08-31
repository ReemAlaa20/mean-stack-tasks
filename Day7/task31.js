function createcard(title,price=0,...tags) {
    return {
        title:title,
        price:price,
        tags:tags,
        label:`${title} - ${price} EGP`
    }
}

console.log(createcard('laptop',60000,'electronic','gaming'));
console.log(createcard('notebook',40,'stationnery'));


