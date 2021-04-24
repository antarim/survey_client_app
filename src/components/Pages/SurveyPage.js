import {useParams} from "react-router-dom";
import {useAxiosFetch} from "../../utils/hooks";
import {SURVEYS_URL} from "../../api/urls";
import {Container} from "react-bootstrap";
import Survey from "../Survey/Survey";
import {useState} from "react";

const SurveyPage = () => {
    const {id, key} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 8000);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        console.log(new FormData(e.form));
        setTimeout(() => setSubmitting(false), 3000);
    }

    return (
        <Container>
            {survey && <Survey
                survey={survey}
                handleSubmit={handleSubmit}
            />}
        </Container>
    );
}

export default SurveyPage;