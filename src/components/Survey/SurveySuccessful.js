import {Container, Row} from "react-bootstrap";

const SurveySuccessful = () => {
    return (
        <Container className="survey-successful-container">
            <Row className="survey-successful">
                Відповідь успішно збережено.
            </Row>
        </Container>
    )
}

export default SurveySuccessful;