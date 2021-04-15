import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import React from "react";

const QuestionFormInput = ({question, listController}) => {
    return (
        <>
            {question.choice_set.map((option, i) => (
                <Row xs={1} md={1} lg={1} key={i} className="question-form-row align-items-center">
                    <Col xl={9} className="div-mt-5">
                        <input
                            className="custom-text-input"
                            type="text"
                            placeholder="Введіть варіант відповіді..."
                            name={option}
                            value={option}
                            onChange={e => listController.set(i, e.target.value)}
                        />
                    </Col>
                    <Col xl={3} className="div-mt-5">
                        <ButtonGroup>
                            <Button onClick={() => listController.moveUp(i)}>
                                <i className="fas fa-chevron-up"></i>
                                {' '}
                                Вверх
                            </Button>
                            <Button onClick={() => listController.moveDown(i)}>
                                <i className="fas fa-chevron-down"></i>
                                {' '}
                                Вниз
                            </Button>
                            <Button variant="danger" onClick={() => listController.remove(i)}>
                                <i className="fas fa-trash-alt"></i>
                                {' '}
                                Видалити
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            ))}
            <Row className="question-form-row">
                <Col>
                    <Button onClick={() => listController.add("")}>
                        <i className="fas fa-plus icon"></i>
                        {' '}
                        Додати варіант
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default QuestionFormInput;