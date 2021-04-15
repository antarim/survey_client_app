import {useEffect, useState} from "react";
import {Container, Spinner} from "react-bootstrap";
import axios from "axios";
import CreateSurveyButton from "../SurveyCreate/CreateSurveyButton";
import SurveyList from "../SurveyList";
import {SURVEYS_URL} from "../api/urls";

const SurveysPage = () => {
    const [isPending, setIsPending] = useState(true);
    const [surveys, setSurveys] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(SURVEYS_URL)
            .then(res => {
                setSurveys(res.data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return (
        <Container>
            <CreateSurveyButton/>

            {isPending && <Spinner animation="border" variant="secondary"/>}
            {error && <div>{error}</div>}
            {surveys && <SurveyList surveys={surveys}/>}
        </Container>
    );
}

export default SurveysPage;