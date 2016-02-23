var moment = require('moment');
var now = moment();

console.log(now.format());

// format is a string
console.log(now.format('X'));
console.log(now.format('x'));

// format is a number
console.log(now.valueOf());

console.log(now.format('MMM Do YYYY, h:mma'));

var timestamp = 1456260772279;
var timestampMoment = moment.utc(timestamp);
console.log('');
console.log(timestampMoment.format());
console.log(timestampMoment.local().format('h:mm a'));