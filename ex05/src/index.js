let shoppingList = new Map([
    ["Banana",3],
    ["Pineapple",5],
    ["Pear",2],
    ["Carrot",10],
    ["Apple",1.5]
]);
let arrKey=[];
let arrValue=[];
for(let key of shoppingList.entries()) {
    arrKey.push(key);
};
for(let value of shoppingList.entries()) {
    arrValue.push(value);
};
for(i=0; i<arrKey.length; i++) {
    console.log(`groceries: ${arrKey[i]}\n`);
};
for(i=0; i<arrValue.length; i++) {
    console.log(`amount: ${arrValue[i]}\n`);
};
for(let e of shoppingList.entries()) {
    console.log(`${e[0]}: ${e[1]}`);
};
module.exports = { shoppingList, arrKey, arrValue };