// write your tests here


QUnit.test('There should be a function convertToRoman', function(assert) {
  assert.equal(convertToRoman(1), 'I');
});

QUnit.test('2 should return II', function(assert) {
  assert.equal(convertToRoman(2), 'II');
});

QUnit.test('3 should return III', function(assert) {
  assert.equal(convertToRoman(3), 'III');
});

QUnit.test('4 should return IV', function(assert) {
  assert.equal(convertToRoman(4), 'IV');
});

QUnit.test('5 should return V', function(assert) {
  assert.equal(convertToRoman(5), 'V');
});

QUnit.test('6 should return VI', function(assert) {
  assert.equal(convertToRoman(6), 'VI');
});

QUnit.test('9 should return IX', function(assert) {
  assert.equal(convertToRoman(9), 'IX');
});

QUnit.test('10 should return X', function(assert) {
  assert.equal(convertToRoman(10), 'X');
});

QUnit.test('20 should return X', function(assert) {
  assert.equal(convertToRoman(20), 'XX');
});

QUnit.test('10 should return X', function(assert) {
  assert.equal(convertToRoman(59), 'LIX');
});

QUnit.test('88 should return LXXXVIII', function(assert) {
  assert.equal(convertToRoman(88), 'LXXXVIII');
});

QUnit.test('2367 should return MMCCCLXVII', function(assert) {
  assert.equal(convertToRoman(2367), 'MMCCCLXVII');
});

QUnit.test('Hello should return Not a number', function(assert) {
  assert.equal(convertToRoman('Hello'), 'Not a number');
});

QUnit.test('There is no 0 in roman numerals', function(assert) {
  assert.equal(convertToRoman(0), 'No 0 in roman numerals');
});

QUnit.test('It does not return a roman number for numbers greater than 3888', function(assert) {
  assert.equal(convertToRoman(3889), 'Cannot take number greater than 3888');
});
