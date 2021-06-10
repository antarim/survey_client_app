import React from 'react';
import {Button, Col, Row} from "react-bootstrap";


const SurveyDetailButtons = ({handleSurveyEdit, handleSurveyDelete, handleSurveyPreview, handleSurveyResponses}) => {
    return (
        <Col>
            <Row className="justify-content-end detail-head-buttons">
                <Col sm={6} className="div-mt-5">
                    <Button block variant="success" onClick={handleSurveyResponses}>
                        <i className="far fa-eye"></i>
                        {' '}
                        Результати
                    </Button>
                </Col>
                <Col sm={6} className="div-mt-5">
                    <Button block variant="secondary" onClick={handleSurveyPreview}>
                        <i className="far fa-eye"></i>
                        {' '}
                        Попередній перегляд
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col sm={6} className="div-mt-5">
                    <Button block variant="primary" onClick={handleSurveyEdit}>
                        <i className="far fa-edit"></i>
                        {' '}
                        Редагувати
                    </Button>
                </Col>
                <Col sm={6} className="div-mt-5">
                    <Button block variant="danger" onClick={handleSurveyDelete}>
                        <i className="fas fa-trash-alt"></i>
                        {' '}
                        Видалити
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}

export default SurveyDetailButtons;