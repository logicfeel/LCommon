(function(global) {
    'use strict';
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // 옵서버 패턴 
    // @종속성 : 
    function Observer(pThis, pOnwer) {
        
        this.isDebug = true;
        this._this = pThis;
        this._onwer = pOnwer;
        this.subscribers = {
            any: []     // 전역 구독자
        };
    }
    (function() {   // prototype 상속

        // 구독 신청
        Observer.prototype.subscribe = function(pFn, pType) {
            
            var subscribers = null;
            
            pType = pType || 'any';
            if (typeof this.subscribers[pType] === "undefined") {
                this.subscribers[pType] = [];
            }
            subscribers = this.subscribers[pType] ;
            subscribers.push(pFn);
        };

        // 구독 해제
        Observer.prototype.unsubscribe = function(pFn, pType) {
            pType = pType || "any";
            if (this.subscribers[pType]) {
                for (var i = 0; i < this.subscribers[pType].length; i++) {
                    if (pFn === this.subscribers[pType][i]) {
                        this.subscribers[pType].splice(i, 1);
                    }
                }
            }
        };

        // 구독 함수 호출
        Observer.prototype.publish = function(pType) {
            pType = pType || "any";
            if (pType in this.subscribers) {
                for (var i = 0; i < this.subscribers[pType].length; i++) {
                    this.subscribers[pType][i].call(this._this, this._onwer);
                }
            }
            
            if (this.isDebug) {
                console.log("publish() 이벤트 발생 [" + this._this.constructor.name + "] type:" + pType);
            }
            
        };
    }());

    // 전역 배포
    global.Observer = global.Observer || Observer;

}(this));