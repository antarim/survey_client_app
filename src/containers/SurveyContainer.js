import useAxiosFetch from "../hooks/useAxiosFetch";
import {RESPONSES_URL, SURVEYS_URL} from "../api/urls";
import {Container} from "react-bootstrap";
import Survey from "../components/Survey/Survey";
import {useEffect, useState} from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import {toSurveyCamelCase} from "../helpers/surveyHelpers";
import {toResponseSubmitView} from "../helpers/responseHelpers";
import axios from "axios";
import SurveySuccessful from "../components/Survey/SurveySuccessful";

const SurveyContainer = ({id, uniqueKey, anonymous}) => {
    const {data, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);
    const [survey, setSurvey] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [responseData, setResponseData] = useState();

    // Converting data to camel case when received
    useEffect(() => {
        if (data) {
            setSurvey(toSurveyCamelCase(data));
            return () => {
            };
        }
    }, [data]);


    useEffect(() => {
        if (survey) {
            // Extracting survey question uuid into responseData state
            // responseData = { uuid1: value, uuid2: value2 , ... }
            setResponseData(
                survey.questionSet.reduce((acc, question) =>
                    ({...acc, [question.uuid]: ''}), {})
            )
        }
        return () => {
        };
    }, [survey]);

    const handleChange = (uuid, value) => {
        setResponseData({
            ...responseData,
            [uuid]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const response = toResponseSubmitView(survey, responseData, uniqueKey, anonymous);

        setIsSubmitting(true);

        axios.post(RESPONSES_URL, JSON.stringify(response), {
            headers: {"Content-Type": "application/json"}
        })
            .then(() => {
                setSubmitted(true);
                console.log("Submit successful!");
            })
            .catch(err => {
                console.log(err.message);
            })
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
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isDisabled={isSubmitting}
            />}
        </Container>
    );
}

export default SurveyContainer;
