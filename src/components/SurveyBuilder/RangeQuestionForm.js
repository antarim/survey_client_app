import {Col, Row} from "react-bootstrap";
import RangeValueInput from "./RangeValueInput";

import './RangeQuestionForm.css';

const RangeQuestionForm = ({question, setQuestion}) => {
    const handleValueChange = (e) => {
        setQuestion(question.merge({[e.target.name]: Number(e.target.value)}))
    }

    return (
        <Row sm={1} className="range-form-wrapper">
            <Col sm={4}>
                <RangeValueInput
                    name={'rangeMin'}
                    label={'Мінімальне'}
                    value={question.rangeMin}
                    handleChange={handleValueChange}
                />
            </Col>
            <Col sm={4}>
                <RangeValueInput
                    name={'rangeMax'}
                    label={"Максимальне"}
                    value={question.rangeMax}
                    handleChange={handleValueChange}
                />
            </Col>
            <Col sm={4}>
                <RangeValueInput
                    name={'rangeStep'}
                    label={"Крок"}
                    value={question.rangeStep}
                    handleChange={handleValueChange}
                />
            </Col>
        </Row>
    );
}

export default RangeQuestionForm;