import {QuestionTypes} from "../../constants/Questions";
import ShortAnswer from "./questions/ShortAnswer";
import {Form, Row} from "react-bootstrap";
import SingleChoice from "./questions/SingleChoice";


const questionMap = {
    [QuestionTypes.SHORT_ANSWER] : (props) => {
        return <ShortAnswer {...props}/>
    },
    [QuestionTypes.SELECT_ONE] : (props) => {
        return (<SingleChoice {...props}/>);
    },
    [QuestionTypes.SELECT_MULTIPLE] : (props) => {
        return (<Row className="no-gutters">{props.prompt}</Row>);
    },
    [QuestionTypes.RANGE] : (props) => {
        return (<Row className="no-gutters">{props.prompt}</Row>)
    }
}

const QuestionWrapper = ({question}) => {
    const QuestionComponent = questionMap[question.input_type](question);

    return (
        <div className="survey-section">
            {QuestionComponent}
        </div>
    );
}

export default QuestionWrapper;