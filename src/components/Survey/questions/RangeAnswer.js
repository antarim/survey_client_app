import {Col, Form, Row} from "react-bootstrap";
import {Controller} from "react-hook-form";
import React, {useState} from "react";
import {Slider} from 'antd';

import './RangeAnswer.css';
import AnswerAlert from "../AnswerAlert";

const RangeAnswer = ({
                         uuid,
                         rangeMin,
                         rangeMax,
                         rangeStep,
                         control,
                         prompt,
                         errors,
                         answerRequired,
                         isDisabled
                     }) => {
    const [value, setValue] = useState(0);

    return (
        <Form.Group controlId={uuid}>
            <Row className="no-gutters align-items-center justify-content-center">
                <Col sm={12}>
                    <Form.Label className="question-prompt">{prompt}{answerRequired && '*'}</Form.Label>
                </Col>
                <Col sm={11}>
                    <Controller
                        name={uuid}
                        control={control}
                        rules={{
                            required: answerRequired,
                            validate: value => value >= rangeMin && value <= rangeMax
                        }}
                        render={({field}) => <Slider
                            {...field}
                            min={rangeMin}
                            max={rangeMax}
                            step={rangeStep}
                            onChange={val => {
                                setValue(val);
                                field.onChange(val);
                            }}
                            disabled={isDisabled}
                        />}
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
            {errors[uuid] ? <AnswerAlert message={'Будь ласка оберіть відповідь'}/> : ''}
        </Form.Group>
    );
}

export default RangeAnswer;