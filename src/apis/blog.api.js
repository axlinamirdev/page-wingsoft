import axios from "axios";

const api_url = process.env.URL_BACKEND_DEV;

export async function getAllArticles() {
    const res = await axios.get(`${api_url}/blogs`);
    const data = res.data;
    return data;
}

export async function getArticle(slug) {
    const res = await axios.get(`${api_url}/blogs/findBySlug/${slug}`);
    const data = res.data;
    return data;
}