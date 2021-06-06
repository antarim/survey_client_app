import {Col, Form, Row} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import React, {useState} from "react";

import './RangeAnswer.css';

const RangeAnswer = ({uuid, rangeMin, rangeMax, rangeStep, prompt, answerRequired, handleChange, isDisabled}) => {
    const [value, setValue] = useState(rangeMin);
    const onCheckChange = (e) => {
        setValue(e.target.value);
        // Passing question uuid as target.name
        handleChange(uuid, Number(e.target.value))
    }

    return (
        <Form.Group controlId={uuid}>
            <Row className="no-gutters align-items-center justify-content-center">
                <Col sm={12}>
                    <Form.Label>{prompt}{answerRequired && '*'}</Form.Label>
                </Col>
                <Col sm={11}>
                    <RangeSlider
                        disabled={isDisabled}
                        name={uuid}
                        min={rangeMin}
                        max={rangeMax}
                        step={rangeStep}
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