import {QuestionTypes} from "../../constants/Questions";
import ShortAnswer from "./questions/ShortAnswer";
import SingleChoice from "./questions/SingleChoice";
import RangeAnswer from "./questions/RangeAnswer";


const questionMap = {
    [QuestionTypes.SHORT_ANSWER] : (props, handleChange, isDisabled) => {
        return <ShortAnswer {...props} handleChange={handleChange} isDisabled={isDisabled}/>
    },
    [QuestionTypes.SELECT_ONE] : (props, handleChange, isDisabled) => {
        return <SingleChoice {...props} handleChange={handleChange} isDisabled={isDisabled}/>;
    },
    [QuestionTypes.RANGE] : (props, handleChange, isDisabled) => {
        return <RangeAnswer {...props} handleChange={handleChange} isDisabled={isDisabled}/>;
    }
}

const QuestionWrapper = ({question, handleChange, isDisabled}) => {
    const QuestionComponent = questionMap[question.type](question, handleChange, isDisabled);

    return (
        <div className="survey-section">
            {QuestionComponent}
        </div>
    );
}

export default QuestionWrapper;