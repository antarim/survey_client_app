export const toAnswerCamelCase = (answer) => {
    return {
        id: answer.id,
        responseId: answer.response,
        questionId: answer.question,
        questionType: answer.question_type,
        questionText: answer.question_text,
        textAnswer: answer.text_answer,
        numberAnswer: answer.number_answer,
        boolAnswer: answer.bool_answer,

    }
}