import SurveyBuilder from "../SurveyBuilder";
import Question from "../../models/Question";

const CreateSurveyPage = () => {
    const initQuestions = [
        new Question({
            text: "Нове питання",
            choice_set: ["Відповідь 1", "Відповідь 2"]
        })
    ]

    const handleSurveySubmit = (survey) => {
        console.log(survey);
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