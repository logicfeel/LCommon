(function(global) {
    'use strict';

    function func2(){
        console.log('func2() 호출');
        console.log(G);
    }

    console.log('func2 load ');

    if (typeof module !== 'undefined' && module.exports) {

        module.exports.func2  = func2;

        L = L || {};
        LCommon = L;
        L.func2 = func2;

    } else {
        global.L                    = global.L || {};
        global.L.func2              = global.L.func2 || func2;
    }

}(this));