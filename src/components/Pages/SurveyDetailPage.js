import {Spinner} from "react-bootstrap";
import {SurveyDetail} from "../SurveyDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {SURVEYS_URL} from "../api/urls";

const SurveyDetailPage = () => {
    const {id} = useParams();
    const [isPending, setIsPending] = useState(true);
    const [survey, setSurvey] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get(SURVEYS_URL + id)
            .then(res => {
                setSurvey(res.data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [id]);

    return (
        <>
            {isPending && <Spinner animation="border" variant="secondary"/>}
            {error && <div>{error}</div>}

            {survey && <SurveyDetail survey={survey}/>}
        </>
    );
}

export default SurveyDetailPage;