(function(global) {
    'use strict';

    var L = global.L || {};

    // 배열 차원 검사 (최대 제한값 10 설정됨)
    // 첫번째 배열만 검사 (배열의 넢이가 같은 겨우만)
    // _getArrayLevel(pElem) 사용법
    // pDepts : 내부 사용값
    function getArrayLevel(pElem, pDepts) {
        var MAX     = 10;
        var level   = 0;
        
        pDepts = pDepts || 0;

        if (pElem instanceof Array && MAX > pDepts) {
            level++;
            pDepts++;
            level = level + this.getArrayLevel(pElem[0], pDepts);  // 재귀로 깊이 찾기
        }
        return level;
    }

    // REVIEW: 공통화 필요
    function isArray(pValue) {
        if (typeof Array.isArray === "function") {
            return Array.isArray(pValue);
        } else {
            return Object.prototype.toString.call(pValue) === "[object Array]";
        }
    }


    /**
     * 배포
     * node 등록(주입)  AMD (RequireJS) 방식만 사용함
     * ! 추후 CommonJS (define) 방식 추가 필요함
     */
    // 
    if (typeof module !== 'undefined' && module.exports) {
        // module.exports.arr              = module.exports.arr || {};
        // module.exports.arr.getArrayLevel  = getArrayLevel;
        // module.exports.arr.isArray        = isArray;

        // module.exports.getArrayLevel  = getArrayLevel;
        // module.exports.isArray        = isArray;

        module.exports  = getArrayLevel;
        module.exports  = isArray;


    } else {
        global.L                    = global.L || {};
        global.L.arr                = global.L.arr || {};
        global.L.arr.getArrayLevel  = getArrayLevel;
        global.L.arr.isArray        = isArray;
    }

}(this));