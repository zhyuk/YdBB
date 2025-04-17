const KEY = 'AIzaSyDJKD4EJD-DCohgy1yzjH4u4Zv3N9Ww0CQ';

window.onload = () => {
    searchVideos();
}


async function searchVideos() {
    const res = await fetch('/api/videos');
    const data = await res.json();

    const result = document.querySelector('section#video .inner .video-section');
    result.innerHTML = '';

    data.items.forEach(element => {
        const videoId = element.id.videoId;
        const title = element.snippet.title;
        const description = element.snippet.description;

        // console.log('videoId: ' + videoId);
        console.log('title: ' + title);
        console.log('description: ' + description);




        const videoElement = document.createElement('div');
        videoElement.className = 'video';
        videoElement.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        result.appendChild(videoElement);
    });
}