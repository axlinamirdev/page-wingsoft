import axios from "axios";
const api_url = process.env.URL_BACKEND_DEV;

export async function getCategories(query){
    const res = await axios.get(`${api_url}/categories`);
    const data = res.data;
    return data;
}