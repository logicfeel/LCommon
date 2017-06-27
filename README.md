# LCommon

# 용도 : node + web  (공통사용)
    - NPM, Bower

# 디렉토리 구조

    - src : LArray.js, Observer.js, common.js

    - test : 디버깅 & 테스트
        + browser : 브라우저 테스트 디버깅 => 개발자도구 (IE, 크롬)
        + node : 테스트 디버깅 => VS.Code
            - task : gulp, grant 도구    (*추후)

    - dist  
        + LCommon.js  => 공통 통합 파일

        + Lcommon.node.js => LCommon + node 공통 통합 파일

        + Lcommon.web.js => LCommon + web(DOM, HTML 등) 공통 통합 파일        

    - external : 외부파일 (*없음)

    - build : ? 정확한 용도 확인
    
    - api : .html,  .md  형식의 문서 파일

# 개발 시나리오

    - master -> 개발 -> [태그]
    
    - master -> 브런치 -> 개발 -> 병합 -> [태그]
        (* 분리 개발이 필요한 경우)

# 태그명 규칙

    - 1.0.0 : 버전명 표기

# 브런치 규칙

    - 논리적 관점 명칭 지정

# 내용

    - 폴리필
        + Object.create()
        + String.prototype.endsWith()    

    - 모듈(함수)
        + common.getArrayLevel()
        + common.isArray()
        + common.querySelecotrOuter() : 종속성 (document)
        + common.cutElement() : 종속성 (HTMLElement) 
    

    - 모듈(생성형 함수 *클래스)

# 모듈구조
    - L

    - L.arr.* : 배열관련

    - L.class.* : 생성형 함수 (클래스)

    - L.DOM.* : document object model (html, HTMLElement 등)
        (* 관련 기능이 적어서 통합하여 사용)

# LCommon 이후 구성 방식 (분리 구성시)

    브런치 및 태그로 분리

    - 공통 : master # 버전
    - 공통 > node 공통   : 
    - 공통 > browser 공통  :      