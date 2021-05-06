import {Spinner} from "react-bootstrap";
import {SurveyDetail} from "../components/SurveyDetail";
import {useHistory, useParams} from "react-router-dom";
import {SURVEYS_URL} from "../api/urls";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {deleteSurvey} from "../api";

const SurveyDetailPage = () => {
    const {id} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);
    const history = useHistory();

    const handleDelete = () => {
        deleteSurvey(id)
            .then(() => {
                history.push('/surveys');
            });
    }

    return (
        <>
            {isLoading && <Spinner animation="border" variant="secondary"/>}
            {error && <div>{error}</div>}

            {survey && <SurveyDetail survey={survey} handleDelete={handleDelete}/>}
        </>
    );
}

export default SurveyDetailPage;