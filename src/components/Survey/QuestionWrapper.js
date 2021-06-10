import {QuestionTypes} from "../../constants/Questions";
import ShortAnswer from "./questions/ShortAnswer";
import SingleChoice from "./questions/SingleChoice";
import RangeAnswer from "./questions/RangeAnswer";


const questionMap = {
    [QuestionTypes.SHORT_ANSWER]: (question, props) => {
        return <ShortAnswer {...question} {...props}/>
    },
    [QuestionTypes.SELECT_ONE]: (question, props) => {
        return <SingleChoice {...question}{...props}/>;
    },
    [QuestionTypes.RANGE]: (question, props) => {
        return <RangeAnswer {...question} {...props}/>;
    }
}

const QuestionWrapper = ({question, isDisabled, control, register, errors}) => {
    const QuestionComponent = questionMap[question.type](question, {
        isDisabled: isDisabled,
        control: control,
        register: register,
        errors: errors
    });

    return (
        <div className="survey-section">
            {QuestionComponent}
        </div>
    );
}

export default QuestionWrapper;