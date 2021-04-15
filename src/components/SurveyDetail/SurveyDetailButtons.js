import React from 'react';
import {Button, Col, Row} from "react-bootstrap";


const SurveyDetailButtons = ({ handleSurveyEdit, handleSurveyDelete }) => {
    return (
        <Row>
            <Col sm="auto" className="div-mt-5">
                <Button variant="primary" onClick={handleSurveyEdit}>
                    <i className="far fa-edit"></i>
                    {' '}
                    Редагувати
                </Button>
            </Col>
            <Col sm="auto" className="div-mt-5">
                <Button variant="danger" onClick={handleSurveyDelete}>
                    <i className="fas fa-trash-alt"></i>
                    {' '}
                    Видалити
                </Button>
            </Col>
        </Row>
    );
}

export default SurveyDetailButtons;