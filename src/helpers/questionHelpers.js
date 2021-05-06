import {QuestionTypes} from "../constants/Questions";

export const setQuestionsOrder = (questions) => {
    return questions.map((question, i) => ({...question, order: i}));
}

export const toQuestionSubmitView = (question) => {
    // Remove "garbage" data
    switch (question.type) {
        case QuestionTypes.RANGE: {
            question.choiceSet = [];
            break;
        }
        case QuestionTypes.SHORT_ANSWER: {
            question.rangeMin = null;
            question.rangeMax = null;
            question.rangeStep = null;
            question.choiceSet = [];
            break;
        }

        case QuestionTypes.SELECT_ONE: {
            question.rangeMin = null;
            question.rangeMax = null;
            question.rangeStep = null;
            break;
        }
        default: {
            break;
        }
    }
    
    return {
        prompt: question.prompt,
        input_type: question.type,
        order: question.order,
        range_min: question.rangeMin,
        range_max: question.rangeMax,
        range_step: question.rangeStep,
        answer_required: question.answerRequired,
        choice_set: question.choiceSet,
    }
}