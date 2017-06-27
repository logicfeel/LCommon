
(function(global) {
    'use strict';
    /**
     * !! prototype 노출형 부모 (부모.call(this);  <= 불필요
     * 제한1 : var(private) 사용 못함
     * 제한2 : 생성자 전달 사용 못함
     * 제한3 : 부모.call(this) 비 호출로 초기화 안됨
     * 장점 : 중복 호출 방지 (성능 향상)  **
     * @name LAarry (LoagicArayy)
     */
    function LArray() {

        this.isDebug        = false;
        this._items         = [];
        this._SCOPE         = "LArray";
    }
    (function() {   // prototype 상속 정의
        LArray.prototype =  Object.create(Array.prototype); // Array 상속
        LArray.prototype.constructor = LArray;
        LArray.prototype.parent = Array.prototype;
    }());

    // !! 여긴 staitc 변수가 됨
    // LArray.prototype._items = [];
    // LArray.prototype._SCOPE = "LArray";
    
    LArray.prototype._init = function() {
        LArray.prototype._items = [];
    };
    
    LArray.prototype._setPropertie = function(pIdx) {
        
        var obj = {
            get: function() { return this._items[pIdx]; },
            set: function(newValue) { this._items[pIdx] = newValue; },
            enumerable: true,
            configurable: true
        };
        return obj;        
    }

    LArray.prototype.setPropCallback = function(pPropName, pGetCallback, pSetCallback) {
        
        var obj = {
            enumerable: true,
            configurable: true
        };
        
        if (typeof pGetCallback === "function") {
            obj.get = pGetCallback;
        }
        if (typeof pSetCallback === "function") {
            obj.set = pSetCallback;
        }

        Object.defineProperty(this, pPropName, obj);
    }

    /**
     *  - pValue : (필수) 값  
     *      +  구조만 만들경우에는 null 삽입
     *  - 객체는 필수, pAttrName : (선택) 속성명
     * TODO : 키와 이름 위치 변경 검토?
     */
    LArray.prototype.pushAttr = function(pValue, pAttrName) {
        
        var index   = -1;
        
        this.push(pValue);
        this._items.push(pValue);

        index = (this.length === 1) ? 0 : this.length  - 1;

        Object.defineProperty(this, [index], this._setPropertie(index));
        if (pAttrName) {
            Object.defineProperty(this, pAttrName, this._setPropertie(index));
        }
    };

    // TODO: 삭제 구현 필요
    // pAttrName (필수)
    LArray.prototype.popAttr = function(pAttrName) {
        
        var idx = this.indexOfAttr(pAttrName);

        delete this[pAttrName];                 // 내부 이름 참조 삭제
        this.splice(idx, 1);                    // 내부 참조 삭제
        return this._items.splice(idx, 1);      // _items 삭제
    };

    LArray.prototype.indexOfAttr = function(pAttrName) {
        
        var idx = this._items.indexOf(this[pAttrName]);
        return idx;
    };

    // index 로 속성명 찾기
    LArray.prototype.attributeOfIndex = function(pIndex) {

        for (var prop in this) {
            if ( this.hasOwnProperty(prop)){
                if (!isFinite(prop) && this[prop] === this[pIndex]) {
                    return prop;
                }
            }
        }

        return null;
    };


    global.LArray = global.LArray || LArray;

}(this));