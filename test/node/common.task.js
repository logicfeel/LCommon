

// 테스트 대상
var arr_3   = [[['깊이3']]];
var arr_2   = [['깊이2']];
var arr_1   = ['깊이1'];
var arr_str = "str";
var arr_num = 10;
var undfine;

console.log('--- require 방식 테스트 ---');

var common  = require('../../src/common.js');
console.log('arr_3 의 배열 깊이 : ' + common.getArrayLevel(arr_3));
console.log('##############################');

console.log('### global 방식 테스트 ###');

require('../../src/common.js');
console.log('arr_3 의 배열 깊이 : ' + L.arr.getArrayLevel(arr_3));
console.log('##############################');


console.log('### getArrayLevel() 테스트 ####');

console.log('arr_3 의 배열 깊이 : ' + L.arr.getArrayLevel(arr_3));
console.log('arr_2 의 배열 깊이 : ' + L.arr.getArrayLevel(arr_2));
console.log('arr_1 의 배열 깊이 : ' + L.arr.getArrayLevel(arr_1));
console.log('##############################');


console.log('### getArrayLevel() 예외 테스트 ###');

console.log('arr_str 의 배열 깊이 : ' + L.arr.getArrayLevel(arr_str));
console.log('arr_num 의 배열 깊이 : ' + L.arr.getArrayLevel(arr_num));
console.log('##############################');


console.log('### isArray() 테스트 ####');

console.log('arr_3 의 배열 여부 : ' + L.arr.isArray(arr_3));
console.log('arr_str 의 배열 여부 : ' + L.arr.isArray(arr_str));
console.log('arr_num 의 배열 여부 : ' + L.arr.isArray(arr_num));
console.log('undefined 의 배열 여부 : ' + L.arr.isArray(undfine));
console.log('##############################');

console.log('-End-');
