console.log("common.js loaded");

window.addEventListener('load', () => {
    const box = document.querySelector('.intro-animation');
    const section = document.getElementById('intro');

    console.log("📦 section:", section);
    console.log("📍 scrollY:", window.scrollY);

    if (!box || !section) return;

    if (window.scrollY === 0) {
        box.addEventListener('animationend', () => {
            setTimeout(() => {
                box.style.display = 'none';
                section.style.backgroundColor = 'transparent';
                section.style.backgroundImage = 'url(/images/main/main_bg.png)';
                section.style.backgroundPosition = 'center center';
                section.style.backgroundSize = '100%';
            }, 1500);
        }, { once: true });
    } else {
        box.style.display = 'none';
        section.style.backgroundColor = 'transparent';
        section.style.backgroundImage = 'url(/images/main/main_bg.png)';
        section.style.backgroundPosition = 'center center';
        section.style.backgroundSize = '100%';
    }
})









// 상세설명 기능
function getMemberInfo(memberName) {
    // console.log(memberName);

    const modal = document.getElementById("modal");
    modal.innerHTML = "";
    modalContent = ''
    modalContent += '<div class="inner">';
    modalContent += '<button class="close-button" onclick="closeModal()">X</button>';
    modalContent += '<div class="container">';
    switch (memberName) {
        case 'youngyun':
            modalContent += '<img src="./images/common/youngyun.png" alt="멤버 조영윤 프로필사진">'
            modalContent += '<div class="profile-section">';
            modalContent += '<div class="name-section">';
            modalContent += '<p class="name-kr">조영윤</p>';
            modalContent += '<p class="name-eng">Cho YoungYun</p>';
            modalContent += '</div>';
            modalContent += '<p class="info-section">베이시스트이며 어렸을 때 대금을 전공하다가 베이스로 전향했다고 한다.<br>조영윤은 노래의 보컬에이팅과 믹싱 작업도 자주 한다.</p>'; break;
        case 'dabin':
            modalContent += '<img src="./images/common/dabin.png" alt="멤버 유다빈 프로필사진">'
            modalContent += '<div class="profile-section">';
            modalContent += '<div class="name-section">';
            modalContent += '<p class="name-kr">유다빈</p>';
            modalContent += '<p class="name-eng">Yu DaBin</p>';
            modalContent += '</div>';
            modalContent += '<p class="info-section">유일한 여자 멤버이며 슈퍼스타K 2016 TOP10 출신으로 보컬과 작사 작곡을 맡고 있다.<br>라이브에서 주로 어쿠스틱 기타를 연주하며 대부분의 곡 작업 또한 기타로 한다.</p>'; break;
        case 'sangwoon':
            modalContent += '<img src="./images/common/sangwoon.png" alt="멤버 이상운 프로필사진">'
            modalContent += '<div class="profile-section">';
            modalContent += '<div class="name-section">';
            modalContent += '<p class="name-kr">이상운</p>';
            modalContent += '<p class="name-eng">Lee SangWoon</p>';
            modalContent += '</div>';
            modalContent += '<p class="info-section">리더이자, 드러머, 플룻, 휘슬에도 능한 만능 엔터테이너이다.<br>원래 드럼 전공이지만 플룻도 열심히 연습하여 플룻 연주실력이 상당하다.</p>'; break;
        case 'junhyung':
            modalContent += '<img src="./images/common/junhyung.png" alt="멤버 이준형 프로필사진">'
            modalContent += '<div class="profile-section">';
            modalContent += '<div class="name-section">';
            modalContent += '<p class="name-kr">이준형</p>';
            modalContent += '<p class="name-eng">Lee JunHyung</p>';
            modalContent += '</div>';
            modalContent += '<p class="info-section">메인 기타리스트이며 작사 작곡, 편곡에도 능한 싱어송라이터이다.<br>이준형은 코러스나 화음이 필요한 부분에서 같이 노래를 부른다.</p>'; break;
        default:
            modalContent += '<img src="./images/common/myeongjong.png" alt="멤버 유명종 프로필사진">'
            modalContent += '<div class="profile-section">';
            modalContent += '<div class="name-section">';
            modalContent += '<p class="name-kr">유명종</p>';
            modalContent += '<p class="name-eng">Yoo MyeongJong</p>';
            modalContent += '</div>';
            modalContent += '<p class="info-section">키보디스트이며 과거에는 YOU 라는 예명으로 활동했다.<br>음악 프로듀서로도 활동하고 있고, 앨범 녹음 시 메인 디렉팅을 주로 맡고있다.</p>'; break;
    }
    modalContent += '</div></div>';
    // console.log(modalContent)
    modal.innerHTML = modalContent;
    modal.style.display = "block";


    // 모달창 내 콘텐츠 영역 클릭 시 모달창 닫힘 방지
    const inner = document.querySelector('#modal .inner');
    inner.addEventListener('click', function (event) {
        event.stopPropagation(); // inner 영역 클릭 시 이벤트 전파 중지
    });
}


// 모달창 닫기 기능
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}