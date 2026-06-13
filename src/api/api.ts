import axios from 'axios';

export const stockApi = axios.create({
    baseURL: "https://stock-analyst-ii2t.onrender.com",
});

export const researchApi = axios.create({
    baseURL: "https://content-researcher-4jf9.onrender.com",
})

