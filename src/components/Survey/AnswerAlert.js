import {Col, Row} from "react-bootstrap";
import React from "react";

const AnswerAlert = ({message}) => {
    return (
        <Row className="no-gutters">
            <Col className="answer-alert">
                <Row className="no-gutters alert-message">
                    {message}
                </Row>
            </Col>
        </Row>
    )
}

export default AnswerAlert;