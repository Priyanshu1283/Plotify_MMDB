import axios from "axios";

const API_KEY = "e7aebc06eac6ff317b501e0a9437ac43";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: { api_key: API_KEY },
    headers: { accept: "application/json" }
});

export default instance;