import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3/",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FlYmMwNmVhYzZmZjMxN2I1MDFlMGE5NDM3YWM0MyIsIm5iZiI6MTczOTA3NTExOS4wOTc5OTk4LCJzdWIiOiI2N2E4MmUyZmI5MzYwYzNlMzNlMDgyNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.L3qnJKnhI4kBnwZsIaeAYnsPGriYuMt3khsPYS6Cc5c',
        }
    }
)
export default instance;