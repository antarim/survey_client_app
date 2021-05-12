import {toQuestionAnswerView, toQuestionSubmitView} from "./questionHelpers";

export const toSurveySubmitView = (survey) => {
    return {
        title: survey.title,
        start_date: survey.startDate,
        end_date: survey.endDate,
        question_set: survey.questionSet.map(question => toQuestionSubmitView(question))
    }
}

export const toSurveyAnswerView = (survey) => {
    return {
        id: survey.id,
        title: survey.title,
        startDate: survey.start_date,
        endDate: survey.end_date,
        questionSet: survey.question_set.map(question => toQuestionAnswerView(question))
    }
}