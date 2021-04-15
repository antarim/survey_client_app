import React from "react";
import QuestionForm from "./QuestionForm";
import {Button, Col, Row} from "react-bootstrap";

import './SurveyQuestion.css';

const SurveyQuestion = ({
                            isActive,
                            setActive,
                            question,
                            setQuestion,
                            removeQuestion,
                            moveQuestionUp,
                            moveQuestionDown
                        }) => {

    return (
        <Row
            className={isActive ? "survey-builder-item item-active" : "survey-builder-item"}
            onClick={setActive}
        >
            <Col>
                <Row>
                    <QuestionForm isActive={isActive} question={question} setQuestion={setQuestion}/>
                </Row>

                <Row sm={3} className="button-bar justify-content-end">
                    <Col md="auto" className="align-self-end">
                        <Button variant="outline-primary" onClick={moveQuestionUp}>
                            <i className="fas fa-chevron-up"></i>
                            {' '}
                            Вверх
                        </Button>
                    </Col>
                    <Col md="auto" className="align-self-end">
                        <Button variant="outline-primary" onClick={moveQuestionDown}>
                            <i className="fas fa-chevron-down"></i>
                            {' '}
                            Вниз
                        </Button>
                    </Col>
                    <Col md="auto" className="align-self-end">
                        <Button variant="outline-danger" onClick={removeQuestion}>
                            <i className="fas fa-trash-alt"></i>
                            {' '}
                            Видалити
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default SurveyQuestion;