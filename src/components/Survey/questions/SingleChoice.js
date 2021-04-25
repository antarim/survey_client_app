import {Form, Row} from "react-bootstrap";

const SingleChoice = ({ question_uuid, prompt, choice_set, handleChange }) => {
    const onCheckChange = (e) => {

        handleChange(e.target.name, Number(e.target.value))
    }

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
                        value={i + 1}
                        onChange={onCheckChange}
                    />
                ))}
            </Row>
        </Form.Group>
    );
}

export default SingleChoice;