import {Form, Row} from "react-bootstrap";

const ShortAnswer = ({question_uuid, prompt}) => {
    return (
        <Form.Group controlId={question_uuid}>
            <Row className="no-gutters">
                <Form.Label>{prompt}</Form.Label>
                <Form.Control as="textarea" rows={2} name={question_uuid}/>
            </Row>
        </Form.Group>
    );
}

export default ShortAnswer;