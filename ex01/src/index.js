let myArr = [];
function* multiplication(x) {
    for (i = 1; i <= x; i++) {
        x = x * 2;
        yield x;
        myArr.push(x);
    }
   
}
var num = multiplication(3);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
module.exports = multiplication;
