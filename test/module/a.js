(function(global) {
    'use strict';

    

    function func1(){
        console.log('func1() 호출');
        console.log(G);
    }

    console.log('func1 load ');

    if (typeof module !== 'undefined' && module.exports) {
        module.exports.func1  = func1;

        L = L || {};
        LCommon = L;
        L.func1 = func1;

    } else {
        global.L                    = global.L || {};
        global.L.func1              = global.L.func1 || func1;
    }

}(this));