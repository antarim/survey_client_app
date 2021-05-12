import {useHistory, useParams} from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {SURVEYS_URL} from "../api/urls";
import SurveyBuilder from "../components/SurveyBuilder";
import moment from "moment";
import {toQuestionEditView} from "../helpers/questionHelpers";
import {toSurveySubmitView} from "../helpers/surveyHelpers";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const SurveyEditContainer = () => {
    const {id} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id, 5000);
    const history = useHistory();

    const handleSurveySubmit = (survey) => {
        const survey_data = toSurveySubmitView(survey);

        // TODO: Change to axios instance
        //  (even better, function from api)
        axios.put(SURVEYS_URL + id, JSON.stringify(survey_data), {
            headers: {"Content-Type": "application/json"}
        })
            .then(() => {
                history.push(`/surveys/${id}`);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <>
            {isLoading && <LoadingSpinner/>}
            {error && <div>{error}</div>}
            {survey && (
                <SurveyBuilder
                    initTitle={survey.title}
                    initDate={[moment(survey.start_date), moment(survey.end_date)]}
                    initQuestions={survey.question_set.map(question => (toQuestionEditView(question)))}
                    handleSurveySubmit={handleSurveySubmit}
                />
            )}
        </>
    );
}

export default SurveyEditContainer;