import axiosInstance from "./axios";


const getAll = () => {
    return axiosInstance.get('/surveys/');
}

const detail = surveyId => {
    return axiosInstance.get(`/surveys/${surveyId}`);
}

const create = surveyData => {
    return axiosInstance.post(`/surveys/`, JSON.stringify(surveyData));
}

const update = (surveyId, surveyData) => {
    return axiosInstance.put(`/surveys/${surveyId}`, JSON.stringify(surveyData));
}

const remove = surveyId => {
    return axiosInstance.delete(`/surveys/${surveyId}`);
}

export const surveys = {
    getAll,
    detail,
    create,
    update,
    remove
}