import {QuestionTypes} from "../../constants/Questions";
import ShortAnswer from "./questions/ShortAnswer";
import {Row} from "react-bootstrap";
import SingleChoice from "./questions/SingleChoice";
import RangeAnswer from "./questions/RangeAnswer";


const questionMap = {
    [QuestionTypes.SHORT_ANSWER] : (props, handleChange) => {
        return <ShortAnswer {...props} handleChange={handleChange}/>
    },
    [QuestionTypes.SELECT_ONE] : (props, handleChange) => {
        return <SingleChoice {...props} handleChange={handleChange}/>;
    },
    [QuestionTypes.SELECT_MULTIPLE] : (props) => {
        return (<Row className="no-gutters">{props.prompt}</Row>);
    },
    [QuestionTypes.RANGE] : (props, handleChange) => {
        return <RangeAnswer {...props} handleChange={handleChange}/>;
    }
}

const QuestionWrapper = ({question, handleChange}) => {
    const QuestionComponent = questionMap[question.input_type](question, handleChange);

    return (
        <div className="survey-section">
            {QuestionComponent}
        </div>
    );
}

export default QuestionWrapper;