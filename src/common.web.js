(function(global) {
    'use strict';

    /**
     * 지정요소에서  내부 요소 검색(셀랙터) (* 최상위 포함)
     * @param {HTMLElement} pElement 
     * @param {String} pSelector 
     */
    function querySelecotrOuter(pElement, pSelector) {
        
        // TODO:  Element 검사
        var elem =  null;
        
        if (!pElement.parentElement) {
            elem = document.createElement('span');
            elem.appendChild(pElement);
        } else {
            elem = pElement.parentElement;
        }
        
        elem = elem.querySelector(pSelector);

        return elem;
    }

    /**
     * slot 샐러터 자르기
     * @param {HTMLElement} pOrgElement 원본요소
     * @param {String} pCutSelector 자를 위치
     * @param {Boolean} pIsRemove 원본에 적용 여부
     * @return {HTMLElement} 결과
     */
    function cutElement(pOrgElement, pCutSelector, pIsRemove) {
        
        var maxLength   = 0;
        var tempElem    = null;
        var selectorElem    = null;

        pIsRemove   = pIsRemove || false;

        if (!(pOrgElement instanceof HTMLElement)) {
            throw new Error('pOrgElement가 HTMLElement 객체 아님 에러! :');
        }

        if (pIsRemove) {
            tempElem = pOrgElement;
        } else {
            tempElem = pOrgElement.cloneNode(true);
        }
        
        selectorElem = querySelecotrOuter(tempElem, pCutSelector);
        // selectorElem = tempElem.querySelector(pCutSelector);
           
        maxLength = selectorElem.childNodes.length;

        for (var i = maxLength - 1; i >= 0; i--) {  // NodeList 임
            selectorElem.removeChild(selectorElem.childNodes[i]);
        }            
        return tempElem;
    };

    // 전역 모듈 배포 (web 전용)
    global.L                        = global.L || {};
    global.L.web                    = global.L.web || {};
    global.L.web.querySelecotrOuter = querySelecotrOuter;
    global.L.web.cutElement         = cutElement;

}(this));    