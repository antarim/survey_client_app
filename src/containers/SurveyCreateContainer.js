import {useHistory} from "react-router-dom";
import SurveyBuilder from "../components/SurveyBuilder";
import Question from "../models/Question";
import moment from "moment";
import {toSurveySubmitView} from "../helpers/surveyHelpers";
import SurveysApi from "../api";

const SurveyCreateContainer = () => {
    const history = useHistory();

    const initQuestions = [
        new Question({
            text: "Нове питання",
            choiceSet: []
        })
    ]

    const handleSurveySubmit = (survey) => {
        const surveyData = toSurveySubmitView(survey);

        SurveysApi.create(surveyData)
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