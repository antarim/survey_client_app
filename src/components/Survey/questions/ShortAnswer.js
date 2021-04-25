import {Form, Row} from "react-bootstrap";

const ShortAnswer = ({question_uuid, prompt, handleChange}) => {
    const onCheckChange= (e) => {
        handleChange(e.target.name, e.target.value)
    }

    return (
        <Form.Group controlId={question_uuid}>
            <Row className="no-gutters">
                <Form.Label>{prompt}</Form.Label>
                <Form.Control as="textarea" rows={2} name={question_uuid} onChange={onCheckChange}/>
            </Row>
        </Form.Group>
    );
}

export default ShortAnswer;