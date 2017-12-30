const easyTestJs = require('./index.js');
const tests = new easyTestJs();

equal(1, 1, 'equal each other');
equal(1, 1, 'equal each other');
notEqual(1, 2, 'not equal each other');
gt(2, 1, 'have a greater value than 1');
gt(1, 1, 'have a greater value than 1');
lt(1, 2, 'have a lesser value than 2');
lt(3, 2, 'have a lesser value than 2');



done();