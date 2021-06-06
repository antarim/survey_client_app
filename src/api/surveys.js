import axiosInstance from "./axios";


class SurveysApi {
    getAll() {
        return axiosInstance.get('/surveys/');
    }

    detail(surveyId) {
        return axiosInstance.get(`/surveys/${surveyId}`);
    }

    create(surveyData) {
        return axiosInstance.post(`/surveys/`, JSON.stringify(surveyData));
    }

    update(surveyId, surveyData) {
        return axiosInstance.put(`/surveys/${surveyId}`, JSON.stringify(surveyData));
    }

    delete(surveyId) {
        return axiosInstance.delete(`/surveys/${surveyId}`);
    }
}

export default SurveysApi;