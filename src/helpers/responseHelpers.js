import {QuestionTypes} from "../constants/Questions";
import {toAnswerCamelCase} from "./answerHelpers";

export const toResponseSubmitView = (survey, responseData, uniqueKey, anonymous) => {
    return {
        survey: survey.id,
        unique_key: anonymous ? null : uniqueKey.id,
        anonymous: anonymous,
        answers: survey.questionSet.map(question => {
            let answer = {
                "question": question.id,
                "question_type": question.type,
                "question_text": question.prompt,
            }
            // TODO: Make as a separate method and
            //  validate each type
            switch (question.type) {
                case QuestionTypes.RANGE: {
                    answer["number_answer"] = Number(responseData[question.uuid])
                    break;
                }
                case QuestionTypes.SHORT_ANSWER: {
                    answer["text_answer"] = responseData[question.uuid]
                    break;
                }
                case QuestionTypes.SELECT_ONE: {
                    answer["text_answer"] = responseData[question.uuid]
                    break;
                }
                default: break;
            }

            return answer;
        })
    }
}

export const toResponseCamelCase = (response) => {
    return {
        id: response.id,
        surveyId: response.survey,
        uniqueKey: response.unique_key,
        answers: response.answers.map(ans => toAnswerCamelCase(ans)),
        anonymous: response.anonymous,
        createdAt: response.created_at,
    }
}