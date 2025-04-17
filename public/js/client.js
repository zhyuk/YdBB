// 비디오 데이터를 가져와서 화면에 표시하는 함수
async function fetchVideos() {
    try {
        // 서버에서 비디오 데이터를 가져옴
        const response = await fetch('/api/videos');
        const data = await response.json();

        const videoSection = document.querySelector('.video-section');
        videoSection.innerHTML = ''; // 이전 내용을 지우고 새로 삽입

        // 비디오 데이터로 HTML 요소 생성
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const description = item.snippet.description;

            const videoElement = document.createElement('div');
            videoElement.className = 'video';
            videoElement.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            `;
            videoSection.appendChild(videoElement);
        });
    } catch (error) {
        console.error('비디오 데이터를 가져오는 중 오류 발생:', error);
    }
}

// 페이지 로드 시 비디오 데이터 가져오기
window.onload = fetchVideos;