import {Container, Row} from "react-bootstrap";

const SurveySuccessful = () => {
    return (
        <Container className="survey-message-container">
            <Row className="survey-message">
                Відповідь успішно збережено.
            </Row>
        </Container>
    )
}

export default SurveySuccessful;