import {Spinner} from "react-bootstrap";
import {SurveyDetail} from "../components/SurveyDetail";
import {useParams} from "react-router-dom";
import {SURVEYS_URL} from "../api/urls";
import useAxiosFetch from "../hooks/useAxiosFetch";

const SurveyDetailPage = () => {
    const {id} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 2000);

    return (
        <>
            {isLoading && <Spinner animation="border" variant="secondary"/>}
            {error && <div>{error}</div>}

            {survey && <SurveyDetail survey={survey}/>}
        </>
    );
}

export default SurveyDetailPage;