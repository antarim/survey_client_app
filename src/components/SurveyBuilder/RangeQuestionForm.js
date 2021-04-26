import {Col, Row} from "react-bootstrap";
import RangeValueInput from "./RangeValueInput";

import './RangeQuestionForm.css';
import {useState} from "react";

const RangeQuestionForm = ({question}) => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);
    const [step, setStep] = useState(1);

    // TODO: Updating question values (first create backend)
    const handleMinChange = (e) => {
        setMin(e.target.value)
    }
    const handleMaxChange = (e) => {
        setMax(e.target.value)
    }
    const handleStepChange = (e) => {
        setStep(e.target.value)
    }

    return (
        <Row sm={1} className="range-form-wrapper">
            <Col sm={4}>
                <RangeValueInput
                    label={"Мінімальне"}
                    value={min}
                    handleChange={handleMinChange}
                />
            </Col>
            <Col sm={4}>
                <RangeValueInput
                    label={"Максимальне"}
                    value={max}
                    handleChange={handleMaxChange}
                />
            </Col>
            <Col sm={4}>
                <RangeValueInput
                    label={"Крок"}
                    value={step}
                    handleChange={handleStepChange}
                />
            </Col>
        </Row>
    );
}

export default RangeQuestionForm;