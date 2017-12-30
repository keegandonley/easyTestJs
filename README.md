# easyTestJs
I've spoken with quite a few people who are interested in learning to test their code, or use test-driven development, but feel overwhelmed setting up many of the available test suites/runners. 

This is not designed to replace any test runners, but instead is a super simple library to get a basic introduction to the joys of well-tested code.

Most of the heavy lifting is done by the developer (you) to keep the library as simple as possible to use.

### Set Up

Install the library:
```js
npm install easyTestJs --save-dev
```

Include up the library
```js
const easyTestJs = require('easyTestJs');
```
or, if you're using webpack:
```js
import easyTestJs from 'easyTestJs';
```

Set up your `test.js` file
```js
const tests = new easyTestJs();
```

### Running

Basic testing can check for equality:
```js
equal(1, 1, 'equal each other');
equal(1, 1, 'equal each other');
equal(1, 2, 'equal each other');

done();
```
Remember to call `done()` at the end of your tests to conclude the process and produce the results.

*Optionally, call `done()` as `done(false)` to disable the output.*

The output from the above example is as follows:
```
✅  did equal each other
✅  did equal each other
❌  did not equal each other

❌  2 of 3 tests passed. (67%)
```


For a full example of a possible implementation:

```js
import easyTestJs from 'easyTestJs';
const tests = new easyTestJs();

// Test retrieving session length
let target = 60000;
let result = getSessionLength();
lt(result, target, 'have valid session');

// Test logout
target = false;
result = logoutUser();
equal(result, target, 'log out the user');

// Make sure user stays logged out
target = 'loggedIn';
result = accountStatus();
notEqual(result, target, 'log out the user');

// Test login
target = true;
result = loginUser();
equal(result, target, 'log in the user');

done();
```

### Methods

```js
equal(1, 1, 'equal each other');
```
```js
notEqual(1, 2, 'not equal each other');
```
```js
lt(1, 2, 'have a value less than 2');
```
```js
gt(2, 1, 'have a value greater than 1');
```
```js
lte(1, 2, 'have a value less than or equal to 2');
```
```js
gte(2, 1, 'have a value greater than or equal to 1');
```