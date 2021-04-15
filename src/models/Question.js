export default class Question {
    static TYPES = Object.freeze({
        SINGLE: "One option",
        MULTIPLE: "Multiple options",
        TEXT: "Text"
    });

    static DEFAULTS = Object.freeze({
        text: "Нове питання",
        type: Question.TYPES.SINGLE,
        choice_set: []
    });

    constructor(params = {}) {
        const { text, type, choice_set } = { ...Question.DEFAULTS, ...params };
        this.prompt = text;
        this.type = type;
        this.choice_set = choice_set;
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

    merge(patch) {
        return new Question({ ...this, ...patch });
    }
}
