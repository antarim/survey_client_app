import React from "react";
import Question from "../../models/Question";
import ListController from "../../controllers/ListController";
import {Col, Form, Row} from "react-bootstrap";

import './QuestionForm.css';
import QuestionFormInput from "./QuestionFormInput";

const QuestionForm = ({question, setQuestion}) => {
    function handleChangeText(e) {
        setQuestion(question.merge({text: e.target.value}));
    }

    function handleChangeType(e) {
        setQuestion(question.merge({type: e.target.value}));
    }

    function setOptions(choice_set) {
        setQuestion(question.merge({choice_set}));
    }

    const listController = new ListController(question.choice_set, setOptions);

    return (
        <Col>
            <Row className="question-form-row align-items-center">
                <Col lg={9}>

                    <input
                        className="custom-text-input"
                        type="text"
                        value={question.text}
                        onChange={handleChangeText}
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