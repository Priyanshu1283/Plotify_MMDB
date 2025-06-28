import axios from 'axios';
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGExNjJmZjE3MjdmOGRhM2M1YjA5N2VlYWE1NjlhZiIsIm5iZiI6MTc0NzIzODcxOS40MDMsInN1YiI6IjY4MjRiZjNmN2Q1YTZiZjY3ZDdlODY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X1vXuV_hx9e1tYyr_tY8x0Qv_3UeYt-be8SF3cqDIpI'
  }
});
export default instance;