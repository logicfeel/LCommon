# LCommon

# 용도 : node + web  (공통사용)
    - NPM, Bower

# 디렉토리 구조
    - src : 원본 소스
        + LArray.js : L.class.LArray
        
        + LObserver.js : L.class.Observer
        
        + common.js : 공통 파일

        + common.shim.js : 폴리필 공통 파일 (web전용)

        + common.node.js : node 전용 공통 파일

        + common.web.js : 웹 전용 공통 파일
        
    - external : 외부파일
        + 없음

    - test : 디버깅 & 테스트
        + web : 브라우저 테스트 디버깅 => 개발자도구 (IE, 크롬)

        + node : 테스트 디버깅 => VS.Code
            - task : gulp, grant 도구    (*추후)

    - build : ? 정확한 용도 확인

    - dist  : 배포
        + LCommon.js  => 공통 통합 파일

        + Lcommon.node.js => LCommon + node 공통 통합 파일
            - Lcommon.node.min.js => 압축 파일

        + Lcommon.web.js => LCommon + web(DOM, HTML 등) 공통 통합 파일        
            - Lcommon.web.min.js => 압축 파일
    
    - api : 문서
        + ~.html : html 문서   
        
        + ~.md : github 문서

# 개발 시나리오

    - master -> 개발 -> [태그]
    
    - master -> 브런치 -> 개발 -> 병합 -> [태그]
        (* 분리 개발이 필요한 경우)

# 태그명 규칙

    - 0.0.0 : 버전명 표기  (주버전.기능버전.패치버전)
    
        + 초기 개발시 주버전 "0" 으로 시작

        + 주버전 "1" 번부터 태그 붙임

# 브런치 규칙

    - 논리적 관점 명칭 지정

    - 브런치는 병합을 기본 병합을 목표로함
        * 파일 및 테스트 디버깅 분리의 목적

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

    - L.web.* : 웹관련 (html, HTMLElement 등)
        (* 관련 기능이 적어서 통합하여 사용)
