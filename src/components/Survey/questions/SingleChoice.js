import {Form, Row} from "react-bootstrap";
import {Controller} from "react-hook-form";
import {Radio} from "antd";
import AnswerAlert from "../AnswerAlert";
import React from "react";

const SingleChoice = ({uuid, prompt, choiceSet, answerRequired, control, errors, isDisabled}) => {

    return (
        <Form.Group>
            <Row className="no-gutters">
                <Form.Label className="question-prompt">{prompt}{answerRequired && '*'}</Form.Label>
            </Row>
            <Row className="no-gutters">
                <Controller
                    name={uuid}
                    control={control}
                    rules={{required: answerRequired}}
                    render={({field}) =>
                        <Radio.Group {...field} disabled={isDisabled}>
                            {choiceSet.map((choice, i) =>
                                <Radio key={i} value={choice.text}>
                                    {choice.text}
                                </Radio>
                            )}
                        </Radio.Group>
                    }
                />
            </Row>
            {errors[uuid] ? <AnswerAlert message={'Будь ласка оберіть відповідь'}/> : ''}
        </Form.Group>
    );
}

export default SingleChoice;