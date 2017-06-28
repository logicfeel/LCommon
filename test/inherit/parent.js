(function(global) {
    'use strict';

    function Parent() {
        console.log('Parent load');
    }
    (function() {   // prototype 상속

        Parent.prototype.open = function() {
            console.log('Parent open()');
        };
        Parent.prototype.close = function() {};    
    }());


    if (typeof module !== 'undefined' && module.exports) {
        module.exports  = Parent;

    } else {
        global.Parent = Parent;
    }

}(this));