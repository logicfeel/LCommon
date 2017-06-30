# LCommon

## 용도 : node + web  (공통사용)
    NPM, Bower

## 디렉토리 구조
    - src : 원본 소스
        + LArray.js : L.class.LArray
        
        + LObserver.js : L.class.Observer
        
        + common.js : 공통 파일

        + common.shim.js : 폴리필 공통 파일 (web전용)

        + common.web.js : 웹 전용 공통 파일
        
    - test : 디버깅 & 테스트
        + web : 브라우저 테스트 디버깅 => 개발자도구 (IE, 크롬)

        + node : 테스트 디버깅 => VS.Code

    - dist  : 배포
        + LCommon.js  => 공통 통합 파일

        + Lcommon.web.js => LCommon + web(DOM, HTML 등) 공통 통합 파일        
            - Lcommon.web.min.js => 압축 파일
    
    - api : 문서
        + ~.html : html 문서
        
        + ~.md : github 문서

## 개발 시나리오

    - [x] master -> 개발 -> [태그]
    
    - [ ] master -> 브런치 -> 개발 -> 병합 -> [태그]
        (* 분리 개발이 필요한 경우)

## 태그명 규칙

    - 0.0.0 : 버전명 표기  (주버전.기능버전.패치버전)
    
        + 초기 개발시 주버전 "0" 으로 시작

        + 주버전 "1" 번부터 태그 붙임

## 브런치 규칙

    - 논리적 관점 명칭 지정

    - 브런치는 병합을 기본 병합을 목표로함
        * 파일 및 테스트 디버깅 분리의 목적

## 버전 규칙

    - 버전은 태그명으로 배포함

    - 규칙 : X.X.X


## 네임스페이스 (모듈rnwh)

    - 최상위

        - LCommon | L  (*확정)

        - Logic | L  

    - 함수

        - L.arr.* : 배열 관련

        - L.arr.getArrayLevel() : int   `배열 깊이`

        - L.arr.isArray() : Boolean  `배열 여부`

        - L.class.* : 클래스 관련 (생성형 함수)

        - L.class.Observer() : 옵서버 클래스 (이벤트에 이용)

        - L.class.LArray() : 속성형 배열 클래스

        - L.web.* : 웹 관련 (DOM HTMLElement 등)

        - L.web.querySelectorOuter() : querySelector 부모(바깥) 바깥 요소 선택
        
        - L.web.cutElement() : 요소 잘라내기

## 내용


    - 폴리필(웹)
        + Object.create()
        + String.prototype.endsWith()    

    - 모듈(함수)
        + common.getArrayLevel()
        + common.isArray()
        + common.querySelecotrOuter() : 종속성 (document)
        + common.cutElement() : 종속성 (HTMLElement) 

    - 모듈(생성형 함수 *클래스)

## 모듈구조
    - L

    - L.arr.* : 배열관련

    - L.class.* : 생성형 함수 (클래스)

    - L.web.* : 웹관련 (html, HTMLElement 등)
        (* 관련 기능이 적어서 통합하여 사용)
