import React from 'react';
import {Button, Col, Row} from "react-bootstrap";


const SurveyDetailButtons = ({ handleSurveyEdit, handleSurveyDelete, handleSurveyPreview}) => {
    return (
        <Row className="justify-content-end">
            <Col sm="auto" className="div-mt-5">
                <Button variant="secondary" onClick={handleSurveyPreview}>
                    <i className="far fa-eye"></i>
                    {' '}
                    Попередній перегляд
                </Button>
            </Col>
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