import axios from "axios";
import {getAccessToken} from "../services/tokenService";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
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
})

const getAxiosInstance = () => {
    return axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAccessToken()
        }
    });
}


export default getAxiosInstance;