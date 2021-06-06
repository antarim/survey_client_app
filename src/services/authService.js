import axiosInstance from "../api/axios";
import {removeTokens, setTokens} from "./tokenService";

class AuthService {
    login(credentials) {
        return axiosInstance
            .post('/token/', credentials)
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