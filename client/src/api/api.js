import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://example.com',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'example.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
});
