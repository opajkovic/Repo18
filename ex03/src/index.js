let generatorArray = [];
function* generator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments;
}
const iterator = generator(6, 7, 8);
generatorArray.push(iterator.next().value);
for (i=0; i<generatorArray.length; i++) {
    console.log(generatorArray[i]);
}
module.exports = { generatorArray, myGenerator };
