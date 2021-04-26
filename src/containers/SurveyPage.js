import {useParams} from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {SURVEYS_URL} from "../api/urls";
import {Container, Spinner} from "react-bootstrap";
import Survey from "../components/Survey/Survey";
import {useEffect, useState} from "react";

const SurveyPage = () => {
    const {id, key} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);
    const [surveyData, setSurveyData] = useState();

    useEffect(() => {
        if (survey) {

            setSurveyData(survey.question_set.reduce((acc, question) => (
                {...acc, [question.question_uuid]: '' }), {})
            )
        }
        return () => {};
    }, [survey]);

    const handleChange = (uuid, value) => {
        setSurveyData({...surveyData,
            [uuid]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(surveyData);
    }

    return (
        <Container>
            {isLoading && <Spinner animation="border" variant="secondary"/>}
            {error && <div>{error}</div>}
            {survey && <Survey
                survey={survey}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />}
        </Container>
    );
}

export default SurveyPage;