import useAxiosFetch from "../hooks/useAxiosFetch";
import {RESPONSES_URL, SURVEYS_URL} from "../api/urls";
import {Container} from "react-bootstrap";
import Survey from "../components/Survey/Survey";
import {useEffect, useState} from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import {toSurveyCamelCase} from "../helpers/surveyHelpers";
import {toResponseSubmitView} from "../helpers/responseHelpers";
import SurveySuccessful from "../components/Survey/SurveySuccessful";
import axiosInstance from "../api/axios";
import SubmitError from "../components/Survey/questions/SubmitError";

const SurveyContainer = ({id, uniqueKey, anonymous}) => {
    const {data, error, isLoading} = useAxiosFetch(SURVEYS_URL + id);
    const [survey, setSurvey] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    // Converting data to camel case when received
    useEffect(() => {
        if (data) {
            setSurvey(toSurveyCamelCase(data));
            return () => {
            };
        }
    }, [data]);

    const onSubmit = data => {
        const response = toResponseSubmitView(survey, data, uniqueKey, anonymous);

        setIsSubmitting(true);

        axiosInstance.post(RESPONSES_URL, JSON.stringify(response), {
            headers: {"Content-Type": "application/json"}
        })
            .then(() => {
                setSubmitted(true);
                setSubmitError(false);
            })
            .catch(() => {
                setSubmitted(false);
                setSubmitError(true);
            })
    }

    if (submitError) {
        return (
            <Container>
                <SubmitError/>
            </Container>
        );
    }

    if (submitted) {
        return (
            <Container>
                <SurveySuccessful/>
            </Container>
        );
    }

    return (
        <Container>
            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}
            {survey && <Survey
                survey={survey}
                onSubmit={onSubmit}
                isDisabled={isSubmitting}
            />}
        </Container>
    );
}

export default SurveyContainer;
