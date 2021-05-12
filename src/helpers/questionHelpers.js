import {QuestionTypes} from "../constants/Questions";
import Question from "../models/Question";

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
    };
}

export const toQuestionEditView = (question) => {
    return new Question({
        prompt: question.prompt,
        type: question.input_type,
        order: question.order,
        rangeMin: question.range_min,
        rangeMax: question.range_max,
        rangeStep: question.range_step,
        answerRequired: question.answer_required,
        choiceSet: question.choice_set,
    });
}

export const toQuestionAnswerView = (question) => {
    return {
        id: question.id,
        uuid: question.question_uuid,
        prompt: question.prompt,
        type: question.input_type,
        order: question.order,
        rangeMin: question.range_min,
        rangeMax: question.range_max,
        rangeStep: question.range_step,
        answerRequired: question.answer_required,
        choiceSet: question.choice_set,
    };
}