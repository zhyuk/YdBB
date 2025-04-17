import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// ES 모듈에서 __dirname을 대체하기 위한 방법
import { fileURLToPath } from 'url';

// __filename, __dirname 대신 사용하는 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = 3000;

const KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// YouTube API 데이터 요청
app.get('/api/videos', async (req, res) => {
    const query = '유다빈밴드';
    const maxResult = 6;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResult}&order=date&q=${encodeURIComponent(query)}&channelId=${CHANNEL_ID}&key=${KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
