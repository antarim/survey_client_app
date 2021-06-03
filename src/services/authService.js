import getAxiosInstance from "../api/axios";
import {getAccessToken, getTokens, removeTokens, setTokens} from "./tokenService";

class AuthService {
    login(username, password) {
        return getAxiosInstance()
            .post('/token/', {username, password})
            .then(res => {
                if (res.data.access) {
                    setTokens(res.data);
                }

                return res.data
            });
    }

    logout() {
        removeTokens();
    }
}

export const login = (username, password) => {
    return getAxiosInstance().post(
        '/token/',
        JSON.stringify({
            username: username,
            password: password
        })
    )
}

export const logout = () => {
    console.log(getTokens().access);
    removeTokens();
}


export async function checkAuthentication() {
    if (getAccessToken()) {
        try {
            const instance = getAxiosInstance();
            await instance.get('/is_authenticated/');
            console.log('Authenticated');
            return true;
        } catch (err) {
            console.log(`Not Authenticated with error: ${err.message}`);
            return false;
        }
    } else {
        console.log('Not Authenticated: No access token');
        return false;
    }
}

export default new AuthService();