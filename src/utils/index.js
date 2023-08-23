import axios from "axios";


// console.log(process.env.REACT_APP_API_URL);

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

export default axiosInstance;