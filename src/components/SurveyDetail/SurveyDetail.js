import {Row, Col, Container} from "react-bootstrap";
import SurveyDetailDateTime from './SurveyDetailDateTime';
import SurveyDetailButtons from './SurveyDetailButtons';

import './SurveyDetail.css';

const SurveyDetail = ({survey, handleDelete, handleEdit, handlePreview}) => {
    return (
        <Container>
            <Row className="survey-detail">
                <Col>
                    <Row>
                        <Col>
                            <h2>{survey.title}</h2>
                        </Col>
                    </Row>

                    <SurveyDetailDateTime
                        start_date={survey.start_date}
                        end_date={survey.end_date}
                    />
                    <SurveyDetailButtons
                        handleSurveyDelete={handleDelete}
                        handleSurveyEdit={handleEdit}
                        handleSurveyPreview={handlePreview}
                    />
                </Col>
            </Row>
        </Container>
    );

}

export default SurveyDetail;