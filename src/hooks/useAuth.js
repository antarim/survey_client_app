import {useEffect, useState} from "react";
import getAxiosInstance from "../api/axios";
import {removeTokens} from "../services/tokenService";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const instance = getAxiosInstance();
        instance.get('/is_authenticated/')
            .then(res => {
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(`useAuth error: ${err.message}`)
                setIsAuthenticated(false);
                setIsLoading(false);
                removeTokens();
            })
    }, [])

    return {isAuthenticated, isLoading}
}

export default useAuth;