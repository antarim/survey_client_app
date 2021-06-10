import {useHistory, useParams} from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import {SURVEYS_URL} from "../api/urls";
import SurveyBuilder from "../components/SurveyBuilder";
import moment from "moment";
import {toQuestionEditView} from "../helpers/questionHelpers";
import {toSurveySubmitView} from "../helpers/surveyHelpers";
import LoadingSpinner from "../components/LoadingSpinner";
import SurveysApi from "../api";

const SurveyEditContainer = () => {
    const {id} = useParams();
    const {data: survey, error, isLoading} = useAxiosFetch(SURVEYS_URL + id);
    const history = useHistory();

    const handleSurveySubmit = (survey) => {
        const surveyData = toSurveySubmitView(survey);

        SurveysApi.update(id, surveyData)
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