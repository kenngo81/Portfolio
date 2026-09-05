// more info: https://allorigins.win/
const CORS_API_HOST = 'https://api.allorigins.win/get?url=';

function getYouTubeId(url) {
    if (!url) return null;
    const trimmed = url.trim();
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
}

async function getMeta(rawUrl) {
    const url = (rawUrl || '').trim();
    const defaultMeta = {
        title: url,
        description: '',
        image: ''
    };

    if (!url) return defaultMeta;

    const ytId = getYouTubeId(url);
    if (ytId) {
        return {
            title: `YouTube Video (${ytId})`,
            description: '',
            image: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
        };
    }

    try {
        const response = await fetch(`${CORS_API_HOST}${encodeURIComponent(url)}`);
        if (!response.ok) return defaultMeta;
        const data = await response.json();
        const body = data && data.contents;
        if (!body) return defaultMeta;

        const parser = new DOMParser();
        const doc = parser.parseFromString(body, 'text/html');
        const meta = doc.querySelector('meta[name="description"]');
        const title = doc.querySelector('title');
        const image = doc.querySelector('meta[property="og:image"]');

        return {
            title: (title && title.textContent) ? title.textContent : url,
            description: meta ? (meta.getAttribute('content') || '') : '',
            image: image ? (image.getAttribute('content') || '') : ''
        };
    } catch (error) {
        return defaultMeta;
    }
}

export { getMeta };