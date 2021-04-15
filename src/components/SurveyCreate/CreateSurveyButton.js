import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import './CreateSurveyButton.css';

const CreateSurveyButton = () => {
    return (
        <Row xs={1} md={2} lg={3}>
            <Col className="survey-create-button">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Створити нову анкету
                        </Card.Title>
                        <Link className="stretched-link" to='/surveys/create'>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default CreateSurveyButton;