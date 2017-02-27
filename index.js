'use strict';

function convertToRoman(n) {

  var romanNumbers = {
    'M': 1000,
    'CM': 900,
    'D':  500,
    'CD': 400,
    'C':  100,
    'XC':  90,
    'L':   50,
    'XL':  40,
    'X':   10,
    'IX':   9,
    'V':    5,
    'IV':   4,
    'I':    1
  };

  var result = '';

  if (isNaN(n)) {
    return 'Not a number';
  }

  if (n === 0) {
    return 'No 0 in roman numerals';
  }

  if (n > 3888) {
    return 'Cannot take number greater than 3888';
  }

  for (var number in romanNumbers){
    while (n >= romanNumbers[number]){
      result += number;
      n = n - romanNumbers[number];
    }
  }

  return result;
}





// Recursive approach
function convertToRoman2(n) {

  var romanNumbers = {
    'M': 1000,
    'CM': 900,
    'D':  500,
    'CD': 400,
    'C':  100,
    'XC':  90,
    'L':   50,
    'XL':  40,
    'X':   10,
    'IX':   9,
    'V':    5,
    'IV':   4,
    'I':    1
  };

  var result = '';

  if (isNaN(n)) {
    return 'Not a number';
  }

  if (n === 0) {
    return '';
  }

  if (n > 3888) {
    return 'Cannot take number greater than 3888';
  }

  for (var number in romanNumbers){
    if (n >= romanNumbers[number]){
      result = number;
      return result + convertToRoman(n - romanNumbers[number]);
    }
  }
}
