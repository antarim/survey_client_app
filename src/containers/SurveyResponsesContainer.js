import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import SurveyResponses from "../components/SurveyResponses/SurveyResponses";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {SURVEYS_URL} from "../api/urls";
import './SurveyResponsesContainer.css';
import {toSurveyCamelCase} from "../helpers/surveyHelpers";
import {toResponseCamelCase} from "../helpers/responseHelpers";
import LoadingSpinner from "../components/LoadingSpinner";

const SurveyResponsesContainer = () => {
    const {id} = useParams();

    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + `${id}/responses`)

    // Backend api calls and
    // hold state
    return (
        <Container className="survey-responses-container">
            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}
            {survey && (
                <SurveyResponses
                    survey={toSurveyCamelCase(survey)}
                    responses={survey.responses.map(res => toResponseCamelCase(res))}
                />
            )}
        </Container>
    );
}

export default SurveyResponsesContainer;
