import {useHistory} from "react-router-dom";
import SurveyBuilder from "../components/SurveyBuilder";
import Question from "../models/Question";
import axios from "axios";
import {SURVEYS_URL} from "../api/urls";
import moment from "moment";
import {toSurveySubmitView} from "../helpers/surveyHelpers";

const SurveyCreateContainer = () => {
    const history = useHistory();

    const initQuestions = [
        new Question({
            text: "Нове питання",
            choiceSet: []
        })
    ]

    const handleSurveySubmit = (survey) => {
        const survey_data = toSurveySubmitView(survey);
        console.log(JSON.stringify(survey_data));

        // TODO: Change to axios instance
        //  (even better, function from api)
        axios.post(SURVEYS_URL, JSON.stringify(survey_data), {
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                history.push('/surveys');
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <SurveyBuilder
            initTitle="Нова анкета"
            initDate={[moment(), moment().add(7, 'days')]}
            initQuestions={initQuestions}
            handleSurveySubmit={handleSurveySubmit}
        />
    );
}

export default SurveyCreateContainer;