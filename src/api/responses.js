import axiosInstance from "./axios";


const create = responseData => {
    return axiosInstance.post(`/responses/`, JSON.stringify(responseData));
}
