import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import SurveyResponses from "../components/SurveyResponses/SurveyResponses";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {RESPONSES_URL, SURVEYS_URL} from "../api/urls";
import './SurveyResponsesContainer.css';
import {toSurveyCamelCase} from "../helpers/surveyHelpers";
import {toResponseCamelCase} from "../helpers/responseHelpers";

const SurveyResponsesContainer = () => {
    const {id} = useParams();
    const {data: survey, surveyError, surveyIsLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);
    // Fix axios
    const {data: responses, responsesError, responsesIsLoading} = useAxiosFetch(RESPONSES_URL + `?survey=${id}`, 8000);

    // Backend api calls and
    // hold state
    return (
        <Container className="survey-responses-container">
            {responses && survey && <SurveyResponses
                survey={toSurveyCamelCase(survey)}
                responses={responses.map(res => toResponseCamelCase(res))}
            />}
        </Container>
    );
}

export default SurveyResponsesContainer;
