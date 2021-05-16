import NumberAnswerStats from "./NumberAnswerStats/NumberAnswerStats";
import {QuestionTypes} from "../../constants/Questions";
import {Row} from "react-bootstrap";
import TextAnswerStats from "./TextAnswerStats";

const QuestionStatsList = ({answersData, getQuestionByIndex}) => {

    const statsList = Object.values(answersData).map((answerData, index) => {
        const question = getQuestionByIndex(index, answersData);

        switch (question.type) {
            case QuestionTypes.RANGE: {
                return <NumberAnswerStats key={index} answerData={answerData} question={question}/>;
            }
            case QuestionTypes.SHORT_ANSWER: {
                return <TextAnswerStats key={index} answerData={answerData} question={question} />;
            }
            default: return <Row key={index}>Wrong question type!</Row>;
        }

    });

    return (
        <>
            {statsList}
        </>
    );
}

export default QuestionStatsList;