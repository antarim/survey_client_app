import {useHistory} from "react-router-dom";
import SurveyBuilder from "../components/SurveyBuilder";
import Question from "../models/Question";
import axios from "axios";
import {SURVEYS_URL} from "../api/urls";

const CreateSurveyPage = () => {
    const history = useHistory();

    const initQuestions = [
        new Question({
            text: "Нове питання",
            choiceSet: [
                {
                    order:0,
                    text: "Відповідь 1"
                },
                {
                    order:1,
                    text: "Відповідь 2"
                }
            ]
        })
    ]

    const handleSurveySubmit = (survey) => {
        const survey_data = {
            title: survey.title,
            question_set: survey.questionSet.map(question => question.snake_case)
        }
        console.log(JSON.stringify(survey_data));

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
            initQuestions={initQuestions}
            handleSurveySubmit={handleSurveySubmit}
        />
    );
}

export default CreateSurveyPage;