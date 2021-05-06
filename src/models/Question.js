import {QuestionTypes} from "../constants/Questions";

export default class Question {
    static DEFAULTS = Object.freeze({
        prompt: "Нове питання",
        type: QuestionTypes.RANGE,
        answerRequired: true,
        rangeMin: 1,
        rangeMax: 5,
        rangeStep: 1,
        choiceSet: [],
    });

    constructor(params = {}) {
        const {
            prompt,
            type,
            order,
            rangeMin,
            rangeMax,
            rangeStep,
            answerRequired,
            choiceSet
        } = {...Question.DEFAULTS, ...params};

        this.prompt = prompt;
        this.type = type;
        this.order = order;
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
        this.rangeStep = rangeStep;
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

    merge(patch) {
        return new Question({...this, ...patch});
    }
}
