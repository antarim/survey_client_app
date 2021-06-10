import {Row, Col, Container} from "react-bootstrap";
import SurveyDetailDateTime from './SurveyDetailDateTime';
import SurveyDetailButtons from './SurveyDetailButtons';

import './SurveyDetail.css';
import MailInput from "./MailInput";

const SurveyDetail = ({survey, handleDelete, handleEdit, handlePreview, handleResponses}) => {
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

                    <Row>
                        <MailInput survey={survey}/>

                        <SurveyDetailButtons
                            handleSurveyDelete={handleDelete}
                            handleSurveyEdit={handleEdit}
                            handleSurveyPreview={handlePreview}
                            handleSurveyResponses={handleResponses}
                        />
                    </Row>

                </Col>
            </Row>
        </Container>
    );

}

export default SurveyDetail;