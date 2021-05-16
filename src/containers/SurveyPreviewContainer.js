import {Container} from "react-bootstrap";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {SURVEYS_URL} from "../api/urls";
import {useParams} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Survey from "../components/Survey/Survey";
import {useEffect, useState} from "react";
import {toSurveyCamelCase} from "../helpers/surveyHelpers";

const SurveyPreviewContainer = () => {
    const {id} = useParams();
    const [survey, setSurvey] = useState();
    const {data, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);

    useEffect(() => {
        if (data) {
            setSurvey(toSurveyCamelCase(data));
            return () => {
            };
        }
    }, [data]);

    return (
        <Container>
            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}
            {survey && <Survey
                survey={survey}
                isDisabled={true}
            />}
        </Container>
    );
}

export default SurveyPreviewContainer;