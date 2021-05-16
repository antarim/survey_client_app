import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
    }
});

export const deleteSurvey = (surveyId) => {
    return axiosInstance.delete(`/surveys/${surveyId}`);
};

export const getSurvey = (surveyId) => {
    return axiosInstance.get(`/surveys/${surveyId}`);
}