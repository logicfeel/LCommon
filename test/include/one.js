

function One() {
    console.log('one load');
}

if (typeof module !== 'undefined' && module.exports) {
    // module.exports.arr              = module.exports.arr || {};
    // module.exports.arr.getArrayLevel  = getArrayLevel;
    // module.exports.arr.isArray        = isArray;

    // module.exports.getArrayLevel  = getArrayLevel;
    // module.exports.isArray        = isArray;

    module.exports  = One;

} else {
    this.One = One;
}