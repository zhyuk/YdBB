Ver1 - 250417
    - 기본 퍼블리싱 작업
    - 인트로 애니메이션, 멤버 소개 모달창 구현완료
    - 앨범리스트 기본 구조까지만 제작

Ver2 - 250418
    - Youtube Data V3 API를 사용하여 유튜브 영상 가져오는 것 구현완료.
        -> API 기본 사용법 참조한 URL : https://velog.io/@hanni/Spring-Boot-%EC%B4%88%EA%B0%84%EB%8B%A8-Youtube-Api-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

    - body 하단부분에 JS 파일을 추가했더라도 로딩 타이밍이 맞지 않을 경우 DOM 요소들보다 스크립트가 먼저 실행될 수 있음. -> 아래의 1번과 2번 코드를 습관화해서 이것을 방지할 수 있다.
    1) defer : DOM 요소들이 모두 완성된 후 스크립트 실행하도록 도와주는 코드
    <script src="경로" defer></script>

    2-a) HTML 파싱 완료 후 실행됨 -> 대부분의 JS 처리에 적합함
    document.addEventListener('DOMContentLoaded', ()=>{
    // 실행할 코드
    });

    2-b) 이미지, 스타일 등 모든 리소스 로딩 완료 후 실행 (애니메이션/크기 계산 시 적합)
    window.addEventListener('load', ()=>{
    // 실행할 코드
    });