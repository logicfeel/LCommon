(function(global) {
    'use strict';


    /**
     * 외부 파일 (node/web)을 상속할 경우
     */
    var Parent;

    if (typeof module !== 'undefined' && module.exports) {
        Parent = require('./parent.js');
    } else if(global.Parent){
        Parent = global.Parent;
    } else {
        console.log('ERR: Parent 함수 로딩 실패');
    }

    function Child() {
        Parent.call(this);

        console.log('Child load');
    }
    (function() {   // prototype 상속
        Child.prototype =  Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
        Child.prototype.parent = Parent.prototype;

        Child.prototype.set = function(pString) {
            console.log('Child set()');
        }
    }());


    if (typeof module !== 'undefined' && module.exports) {
        module.exports  = Child;

    } else {
        global.Child = Child;
    }

}(this));
