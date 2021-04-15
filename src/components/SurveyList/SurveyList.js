import {Col, Row, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

import './SurveyList.css';

const SurveyList = ({surveys}) => {
    return (
        <Row xs={1} md={2} lg={3}>
            {surveys.map(survey => (
                <div className="survey-item" key={survey.id}>
                    <Col className="noPaddingX">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h4>{survey.title}</h4>
                                </Card.Title>
                                <Link className="stretched-link" to={`/surveys/${survey.id}`}>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            ))}
        </Row>
    );
}

export default SurveyList;