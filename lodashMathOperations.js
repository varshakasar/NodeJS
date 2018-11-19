const _ = require('lodash');

//add
console.log('add');
var add_result = _.add(4,5);
console.log(add_result);

//ceil(rounded up number)
console.log('ceil');
var ceil_result = _.ceil(4.006);
console.log(ceil_result);

//divide
console.log('divide');
var divide_result = _.divide(50,10);
console.log(divide_result);

//floor(rounded down number)
console.log('floor');
var floor_result = _.floor(4.006);
console.log(floor_result);

//max
console.log('max');
var max_result = _.max([1,2,5,96,45,63]);
console.log(max_result);

//maxBy
var objects = [{ 'n': 1 }, { 'n': 2 },{'n':3},{'n':4},{'n':5}];
console.log('maxBy');
var maxBy_result = _.maxBy(objects,'n');
console.log(maxBy_result);

//mean
console.log('mean');
var mean_result = _.mean([1,3,5,6,8]);
console.log(mean_result);

//meanBy
console.log('meanBy');
var meanBy_result = _.meanBy(objects, 'n');
console.log(meanBy_result);

//min
console.log('min');
var min_result = _.min([1,5,4,85,23]);
console.log(min_result);

//minBy
console.log('minBy');
var minBy_result = _.minBy(objects, 'n');
console.log(minBy_result);

//multiply
console.log('multiply');
var multiply_result = _.multiply(10,4);
console.log(multiply_result);

//round
console.log('round');
var round_result = _.round(4.60);
console.log(round_result);

//subtract
console.log('subtract');
var subtract_result = _.subtract(10,3);
console.log(subtract_result);

//sum
console.log('sum');
var sum_result = _.sum([1,2,5,6,3,15,96]);
console.log(sum_result);

//sumBy
console.log('sumBy');
var sumBy_result = _.sumBy(objects, 'n');
console.log(sumBy_result);