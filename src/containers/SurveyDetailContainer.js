import {SurveyDetail} from "../components/SurveyDetail";
import {useHistory, useParams} from "react-router-dom";
import {SURVEYS_URL} from "../api/urls";
import useAxiosFetch from "../hooks/useAxiosFetch";
import SurveysApi from "../api";
import LoadingSpinner from "../components/LoadingSpinner";

const SurveyDetailContainer = () => {
    const {id} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);
    const history = useHistory();

    const handleDelete = () => {
        SurveysApi.delete(id)
            .then(() => {
                history.push('/surveys');
            });
    }

    const handleEdit = () => {
        history.push(`/surveys/${id}/edit`);
    }

    const handlePreview = () => {
        history.push(`/surveys/${id}/preview`);
    }

    const handleResponses= () => {
        history.push(`/surveys/${id}/responses`);
    }

    return (
        <>
            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}

            {survey && (
                <SurveyDetail
                    survey={survey}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handlePreview={handlePreview}
                    handleResponses={handleResponses}
                />
            )}
        </>
    );
}

export default SurveyDetailContainer;