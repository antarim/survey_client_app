import {Container, Row} from "react-bootstrap";

const SubmitError = () => {
    return (
        <Container className="survey-message-container">
            <Row className="survey-message">
                Відбулась помилка при збереженні відповіді.
                <br/>
                Оновіть сторінку та спробуйте ще раз.
            </Row>
        </Container>
    );
}

export default SubmitError;