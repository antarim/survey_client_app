import CustomProgressBar from './CustomProgressBar';
import {Col, Row} from "react-bootstrap";

const SurveyDetailDateTime = ({start_date, end_date}) => {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const progress = Math.round(((new Date() - startDate) / (endDate - startDate)) * 100);

    return (
        <Row className="justify-content-md-center">
            <Col lg={6} className="align-self-start">
                Початок опитування - {startDate.toLocaleDateString()}, {startDate.toLocaleTimeString()}
            </Col>
            <Col lg={6} className="align-self-end">
                Кінець опитування - {endDate.toLocaleDateString()}, {endDate.toLocaleTimeString()}
            </Col>
            <Col lg={12}>
                <CustomProgressBar progressNow={progress}/>
            </Col>
        </Row>
    );
}

export default SurveyDetailDateTime;