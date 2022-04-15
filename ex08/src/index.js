let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let intersection = new Set([...one].filter((e) => two.indexOf(e) > -1));
let unionSet = new Set([...one],[...two]);
let differenceSet = new Set([...one].filter(x => two.indexOf(x)===-1));
module.exports = { unionSet, intersectionSet, differenceSet };
