// node 및 browser 전역변수 만들기
if (typeof L === "undefined") L = {}; 
LCommon = L;

(function(global) {
    'use strict';

    function func1(){
        console.log('func1() 호출');
    }

    console.log('func1 load ');

    if (typeof module !== 'undefined' && module.exports) {
        
        // require 방식
        module.exports.func1  = func1;
        
        // 전역 모듈 방식
        L.func1 = func1;

    // } else {
    //     global.L        = global.L || {};
    //     global.L.func1  = func1;
}

    // 전역 모듈 방식
    L.func1 = func1;

}(this));