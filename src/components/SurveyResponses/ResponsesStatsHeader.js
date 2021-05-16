import {Col, Row} from "react-bootstrap";

const ResponsesStatsHeader = ({title, responsesCount}) => {
    return (
        <Row className="survey-response-item">
            <Col lg={9}>
                <h4>{title}</h4>
            </Col>
             <Col>
                 Кількість відповідей:
                 {responsesCount}
             </Col>
        </Row>
    );
}

export default ResponsesStatsHeader;