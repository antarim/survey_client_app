import getAxiosInstance from "./axios";


const create = responseData => {
    return getAxiosInstance().post(`/responses/`, JSON.stringify(responseData));
}

export const responses = {
    create
}