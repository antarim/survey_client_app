import axios from "axios";
import {getAccessToken} from "../services/tokenService";
import {API_URL} from "./urls";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    } else {
        delete config.headers.Authorization;
    }
    return config;
});

export default axiosInstance;