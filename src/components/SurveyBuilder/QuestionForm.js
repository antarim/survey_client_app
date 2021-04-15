import React from "react";
import Question from "../../models/Question";
import ListController from "../../controllers/ListController";
import {Col, Form, Row} from "react-bootstrap";

import './QuestionForm.css';
import QuestionFormInput from "./QuestionFormInput";

const QuestionForm = ({question, setQuestion}) => {
    function handleChangePrompt(e) {
        setQuestion(question.merge({prompt: e.target.value}));
    }

    function handleChangeType(e) {
        setQuestion(question.merge({type: e.target.value}));
    }

    function setAnswerRequired(value) {
        setQuestion(question.merge({answerRequired: value}));
    }

    function setOptions(choiceSet) {
        setQuestion(question.merge({choiceSet}));
    }

    const listController = new ListController(question.choiceSet, setOptions);

    return (
        <Col>
            <Row className="question-form-row align-items-baseline">
                <Col lg={9}>

                    <input
                        className="custom-text-input"
                        type="text"
                        value={question.prompt}
                        onChange={handleChangePrompt}
                    />
                </Col>
                <Col lg={3}>
                    <Row className="question-form-row">
                        <Form.Control as="select"
                                      id="question-type"
                                      value={question.type}
                                      onChange={handleChangeType}
                        >
                            {Object.values(Question.TYPES).map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </Form.Control>
                    </Row>
                    <Row className="justify-content-center">
                        <Form.Switch
                            id={"required-switch-" + Math.random()}
                            label="Обов'язкова відповідь"
                            checked={question.answerRequired}
                            onChange={() => setAnswerRequired(!question.answerRequired)}
                        />
                    </Row>
                </Col>
            </Row>
            {question.hasOptions && (
                <QuestionFormInput
                    question={question}
                    listController={listController}
                />
            )}
        </Col>
    );
}

export default QuestionForm;