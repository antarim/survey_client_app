import {Col, Form, Row} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import React, {useState} from "react";

import './RangeAnswer.css';

const RangeAnswer = ({question_uuid, range_min, range_max, range_step, prompt, handleChange}) => {
    const [value, setValue] = useState(range_min);
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
                        min={range_min}
                        max={range_max}
                        step={range_step}
                        value={value}
                        onChange={onCheckChange}
                    />
                </Col>
                <Col sm={1} className="text-center">
                    <Row className="no-gutters range-tooltip justify-content-center">
                        <div className="range-display">
                            {value}
                        </div>
                    </Row>
                </Col>
            </Row>
        </Form.Group>
    );
}

export default RangeAnswer;