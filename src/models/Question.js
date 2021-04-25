import {QuestionTypes} from "../constants/Questions";

export default class Question {
    static DEFAULTS = Object.freeze({
        prompt: "Нове питання",
        type: QuestionTypes.SELECT_ONE,
        answerRequired: true,
        choiceSet: [],
    });

    constructor(params = {}) {
        const { prompt, type, answerRequired, choiceSet } = { ...Question.DEFAULTS, ...params };
        this.prompt = prompt;
        this.type = type;
        this.answerRequired = answerRequired;
        this.choiceSet = choiceSet;
    }

    get hasOptions() {
        return (
            this.type === QuestionTypes.SELECT_ONE ||
            this.type === QuestionTypes.SELECT_MULTIPLE
        );
    }

    get inputType() {
        if (this.type === QuestionTypes.SELECT_ONE) return "radio";
        if (this.type === QuestionTypes.SELECT_MULTIPLE) return "checkbox";
        throw new Error("This question does not have an input type.");
    }

    get submitView() {
        return {
            prompt: this.prompt,
            input_type: this.type,
            answer_required: this.answerRequired,
            choice_set: this.choiceSet,
        }
    }

    merge(patch) {
        return new Question({ ...this, ...patch });
    }
}
