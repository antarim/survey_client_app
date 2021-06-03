import getAxiosInstance from "./axios";


const getAll = () => {
    return getAxiosInstance().get('/surveys/');
}

const detail = surveyId => {
    return getAxiosInstance().get(`/surveys/${surveyId}`);
}

const create = surveyData => {
    return getAxiosInstance().post(`/surveys/`, JSON.stringify(surveyData));
}

const update = (surveyId, surveyData) => {
    return getAxiosInstance().put(`/surveys/${surveyId}`, JSON.stringify(surveyData));
}

const remove = surveyId => {
    return getAxiosInstance().delete(`/surveys/${surveyId}`);
}

export const surveys = {
    getAll,
    detail,
    create,
    update,
    remove
}