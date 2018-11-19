const _ = require('lodash');

var array1 = [1,2,3,4,5];
var array2 = [6,7];

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

//concat
console.log('concat');
var concat_result = _.concat(array1,array2);
console.log(concat_result);

//difference
console.log('difference');
var difference_result = _.difference(array1,array2);
console.log(difference_result);

//find
console.log('find');
var find_results = _.find(users, { 'age': 1, 'active': true });
console.log(find_results);

//flatten
console.log('flatten');
var array3 = [[1,2,3],[4,5,6],[7,8,9]];
var flatten_result = _.flatten(array3);
console.log(flatten_result);

//join
console.log('join');
var join_result = _.join(array1,'!');
console.log(join_result);

//sortBy
console.log('sortBy');
var sort_result = _.sortBy(users,'age');
console.log(sort_result);

//uniq
console.log('uniq');
var arr = [1,2,3,1,2];
var uniq_result = _.uniq(arr);
console.log(uniq_result);

//map
console.log('map');
var map_results = _.map(users,'user');
console.log(map_results);

//filter
console.log('filter');
var filter_results = _.filter(users, 'active');
console.log(filter_results);

//trim
console.log('trim');
var str = '--Varsha Kasar--';
var trim_result = _.trim(str,'-');
console.log(trim_result);

//assign
console.log('assign');
var assign_result = _.assign({a:1},{b:2},{a:3});
console.log(assign_result);

//includes
console.log('includes');
var includes_result = _.includes([1,2,3,5,6,4,21,36],37);
console.log(includes_result);