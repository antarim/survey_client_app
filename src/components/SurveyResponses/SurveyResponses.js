import ResponsesStatsHeader from "./ResponsesStatsHeader";
import './SurveyResponses.css';
import QuestionStatsList from "./QuestionStatsList";

const SurveyResponses = ({survey, responses}) => {
    // Get all answers from responses
    const answers = responses.map(response => (response.answers)).flat()

    // Grouping answers by question id
    const getGroupedByQuestion = (answers) => {
        return answers.reduce((acc, ans) => {
            // { questionId: [ answers to this question ], ...}
            acc[ans.questionId] = [...acc[ans.questionId] || [], ans];
            return acc;
        }, {})
    }

    const getQuestionByIndex = (index, answersData) => {
        let id = Number(Object.keys(answersData)[index])
        return survey.questionSet.find(obj => obj.id === id)
    }

    const answersData = getGroupedByQuestion(answers);

    return (
        <>
            <ResponsesStatsHeader
                title={survey.title}
                responsesCount={responses.length}
            />
            <QuestionStatsList
                answersData={answersData}
                getQuestionByIndex={getQuestionByIndex}
            />
        </>
    );
}

export default SurveyResponses;