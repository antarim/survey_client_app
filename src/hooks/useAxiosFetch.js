import {useEffect, useState} from "react";
import axios from "axios";
import getAxiosInstance from "../api/axios";

const useAxiosFetch = (url, timeout = 8000) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        const instance = getAxiosInstance()
        instance.get(url, {
            cancelToken: source.token,
            timeout: timeout
        }).then(res => {
            if (!unmounted) {
                setData(res.data);
                setIsLoading(false);
            }
        }).catch((e) => {
            if (!unmounted) {
                setError(true);
                setIsLoading(false);
                if (axios.isCancel(e)) {
                    console.log(`Request cancelled: ${e.message}`);
                } else {
                    console.log(`Another error happened: ${e.message}`);
                }
            }
        });
        return function () {
            unmounted = true;
            source.cancel("Cancelling in cleanup");
        };
    }, [url, timeout]);

    return {data, isLoading, error};
};

export default useAxiosFetch;