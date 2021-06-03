import axios from "axios";
import {getAccessToken, removeTokens} from "../services/tokenService";


const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAccessToken()
        }
    });

    // instance.interceptors.response.use(null, (error) => {
    //     if (error.response.status === 401) {
    //         console.log('Intercept');
    //         removeTokens();
    //     }
    // });

    return instance;
}


export default getAxiosInstance;