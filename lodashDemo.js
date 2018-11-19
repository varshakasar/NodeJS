const _ = require('lodash');

const ver = _.VERSION;
console.log(ver);

var arr1=[1,2,3,4,5];

//chunk
var c = _.chunk(arr1, 2);
console.log(c);

//compact
var cm = _.compact([0, 1, false, 2, '', 3]);
console.log(cm);

//concat
var con = _.concat(arr1,6,7,8,9);
console.log(con);

//difference
var d = _.difference([2, 1], [2, 3]);
console.log(d);

//drop
var dr = _.drop([1, 2, 3]);
console.log(dr);

var dr1 = _.drop([1, 2, 3], 2);
console.log(dr1);

var dr2 = _.drop([1, 2, 3], 5);
console.log(dr2);

var dr3 = _.drop([1, 2, 3], 0);
console.log(dr3);

//dropRight
var dR = _.dropRight([1,2,3]);
console.log(dR);

var dR1 = _.dropRight([1, 2, 3], 2);
console.log(dR1);

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

//findindex

var f = _.findIndex(users, { 'user': 'fred', 'active': false });
console.log(f);//1

var f1 = _.findIndex(users, ['active', false]);
console.log(f1);//0

var f2 = _.findIndex(users, 'active');
console.log(f2);//2

//remove

var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);//[1, 3]
console.log(evens);//[2, 4]

//map

function square(n) {
  return n * n;
}

var nm = _.map([4, 8], square);
console.log(nm);