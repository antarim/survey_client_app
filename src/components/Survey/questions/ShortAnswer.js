import { Input } from 'antd';
import {Form, Row} from "react-bootstrap";
import {Controller} from "react-hook-form";
import './ShortAnswer.css';
import React from "react";


const { TextArea } = Input;

const ShortAnswer = ({uuid, prompt, control, answerRequired, isDisabled}) => {
    return (
        <Form.Group controlId={uuid}>
            <Row className="no-gutters">
                <Form.Label className="question-prompt">{prompt}{answerRequired && '*'}</Form.Label>
            </Row>
            <Row className="no-gutters text-area-wrapper">
                <Controller
                    name={uuid}
                    control={control}
                    rules={{required: answerRequired}}
                    render={({field}) => <TextArea
                        {...field}
                        disabled={isDisabled}
                        className="custom-text-area"
                        showCount
                        maxLength={1000}
                        autoSize={{minRows: 2}}
                        required={answerRequired}
                        name={uuid}
                    />}
                />
            </Row>
        </Form.Group>
    );
}

export default ShortAnswer;