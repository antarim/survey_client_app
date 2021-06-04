import getAxiosInstance from "../api/axios";
import {removeTokens, setTokens} from "./tokenService";

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

export default new AuthService();