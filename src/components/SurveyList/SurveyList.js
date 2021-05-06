import {Col, Row, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

import './SurveyList.css';

const SurveyList = ({surveys}) => {
    return (
        <Row xs={1} md={2} lg={3}>
            {surveys.map(survey => (
                <Col className="survey-list-item" key={survey.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="">
                                <h4>{survey.title}</h4>
                            </Card.Title>
                            <Link className="stretched-link" to={`/surveys/${survey.id}`}>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default SurveyList;