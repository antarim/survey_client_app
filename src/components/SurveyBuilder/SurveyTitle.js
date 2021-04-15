import React from "react";
import {Col, Row} from "react-bootstrap";

import './SurveyTitle.css';

const SurveyTitle = ({title, handleChangeTitle}) => {
    return (
        <Row md={1} className="align-items-center survey-builder-header">
            <Col lg={8} className="title-input">
                <input
                    className="custom-title-input"
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                />
            </Col>
        {/*TODO: Antd calendars    */}
        </Row>
    );
}

export default SurveyTitle;