let fifteenArray = [];
function* myGenerator() {
    yield* insideGenerator1();
}   
function* insideGenerator1() {   
        for (let x = 1; x <= 5; x++) {
          fifteenArray.push(x);
        }
        yield insideGenerator3();
      }
function* insideGenerator2() {
    for(x = 10; x <= 15; x++) {
        fifteenArray.push(x);
    }
    yield myGenerator();
}
function* insideGenerator3() {
    for(x = 6; x <= 9; x++) {
        fifteenArray.push(x);
   }
   yield insideGenerator2();
}
var iterator = myGenerator();

fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
fifteenArray.push((iterator.next().value+"#"));
console.log(fifteenArray);
module.exports = { fifteenArray, myGenerator };