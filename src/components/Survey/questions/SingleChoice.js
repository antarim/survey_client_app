import {Form, Row} from "react-bootstrap";

const SingleChoice = ({ question_uuid, prompt, choice_set }) => {
    return (
        <Form.Group controlId={question_uuid}>
            <Row className="no-gutters">
                <Form.Label>{prompt}</Form.Label>

            </Row>
            <Row className="no-gutters">
                {choice_set.map((choice, i) => (
                    <Form.Check
                        key={i}
                        inline
                        label={i + 1}
                        type="radio"
                        name={question_uuid}
                    />
                ))}
            </Row>
        </Form.Group>
    );
}

export default SingleChoice;