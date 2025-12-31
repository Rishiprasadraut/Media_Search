import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY


export async function fatchPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`
        }
    });

    return res.data
}


export async function fatchvideos(query, per_page = 20) {
    if (!PEXELS_KEY) throw new Error('Missing VITE_PEXELS_KEY environment variable');
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, per_page },
        headers: {
            // Pexels expects the API key as the Authorization header value directly
            Authorization: PEXELS_KEY
        }
    });

    return res.data
}


export async function fatchGIF(query, limit = 20) {
    const res = await axios.get('https://tenor.googleapis.com/v2/search', {
        params: { q: query, key: TENOR_KEY, limit },
        // headers: {
        //     Authorization: `Client-ID ${TENOR_KEY}`
        // }
    });

    return res.data
}