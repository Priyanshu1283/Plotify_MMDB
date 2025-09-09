import axios from "axios";
const API_KEY = "70a162ff1727f8da3c5b097eeaa569af" ;
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: API_KEY },
    headers: { accept: "application/json" }
});

export default instance;