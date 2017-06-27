
var one;
if (typeof module !== 'undefined' && module.exports) {
    one = require('./one.js');
}


function Two() {
    console.log('two load');
}

if (typeof module !== 'undefined' && module.exports) {
    // module.exports.arr              = module.exports.arr || {};
    // module.exports.arr.getArrayLevel  = getArrayLevel;
    // module.exports.arr.isArray        = isArray;

    // module.exports.getArrayLevel  = getArrayLevel;
    // module.exports.isArray        = isArray;

    module.exports  = Two;

} else {
    this.Two = Two;
}


console.log('two end');
