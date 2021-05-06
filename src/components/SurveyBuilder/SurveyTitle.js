import React from "react";
import {Col, Row} from "react-bootstrap";
import { DatePicker } from 'antd';

import './SurveyTitle.css';

const { RangePicker } = DatePicker;

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
            <Col lg={4} className="date-range-input">
                <RangePicker
                    size="large"
                />
            </Col>
        </Row>
    );
}

export default SurveyTitle;