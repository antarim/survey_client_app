import SurveyQuestion from "./SurveyQuestion";
import React from "react";


const QuestionList = ({activeId, setActiveId, questions, listController}) => {
    return (
        <>
            {questions.map((question, i) => (
                <SurveyQuestion
                    key={i}
                    isActive={i===activeId}
                    setActive={() => setActiveId(i)}
                    question={question}
                    setQuestion={question => listController.set(i, question)}
                    removeQuestion={() => listController.remove(i)}
                    moveQuestionUp={() => listController.moveUp(i)}
                    moveQuestionDown={() => listController.moveDown(i)}
                />
            ))}
        </>
    );
}

export default QuestionList;