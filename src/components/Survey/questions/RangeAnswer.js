import {Col, Form, Row} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import React, {useState} from "react";

import './RangeAnswer.css';

const RangeAnswer = ({question_uuid, prompt, handleChange}) => {
    const min = 1
    const max = 5
    const [value, setValue] = useState(min);
    const onCheckChange = (e) => {
        setValue(e.target.value);
        // Passing question uuid as target.name
        handleChange(question_uuid, Number(e.target.value))
    }

    return (
        <Form.Group controlId={question_uuid}>
            <Row className="no-gutters align-items-center justify-content-center">
                <Col sm={12}>
                    <Form.Label>{prompt}</Form.Label>
                </Col>
                <Col sm={11}>
                    <RangeSlider
                        name={question_uuid}
                        min={min}
                        max={max}
                        value={value}
                        onChange={onCheckChange}
                    />
                </Col>
                <Col sm={1} className="text-center">
                    <Row className="no-gutters range-tooltip justify-content-center">
                        {value}
                    </Row>
                </Col>
            </Row>
        </Form.Group>
    );
}

export default RangeAnswer;