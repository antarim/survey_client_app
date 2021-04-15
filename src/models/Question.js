export default class Question {
    static TYPES = Object.freeze({
        SINGLE: "One option",
        MULTIPLE: "Multiple options",
        TEXT: "Text"
    });

    static toSubmitType = (type) => {
        switch (type){
            case Question.TYPES.SINGLE: {
                return "SLO";
            }
            case Question.TYPES.MULTIPLE: {
                return "SLM";
            }
            case Question.TYPES.TEXT: {
                return "STA";
            }
            default: {
                return "SLO";
            }
        }
    }

    static DEFAULTS = Object.freeze({
        prompt: "Нове питання",
        type: Question.TYPES.SINGLE,
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
            this.type === Question.TYPES.SINGLE ||
            this.type === Question.TYPES.MULTIPLE
        );
    }

    get inputType() {
        if (this.type === Question.TYPES.SINGLE) return "radio";
        if (this.type === Question.TYPES.MULTIPLE) return "checkbox";
        throw new Error("This question does not have an input type.");
    }

    get submitView() {
        return {
            prompt: this.prompt,
            input_type: Question.toSubmitType(this.type),
            answer_required: this.answerRequired,
            choice_set: this.choiceSet,
        }
    }

    merge(patch) {
        return new Question({ ...this, ...patch });
    }
}
