import {Form, Row} from "react-bootstrap";

const SingleChoice = ({uuid, prompt, choiceSet, handleChange, isDisabled }) => {
    const onCheckChange = (e) => {

        handleChange(e.target.name, Number(e.target.value))
    }

    return (
        <Form.Group controlId={uuid}>
            <Row className="no-gutters">
                <Form.Label>{prompt}</Form.Label>
            </Row>
            <Row className="no-gutters">
                {choiceSet.map((choice, i) => (
                    <Form.Check
                        disabled={isDisabled}
                        key={i}
                        inline
                        label={i + 1}
                        type="radio"
                        name={uuid}
                        value={i + 1}
                        onChange={onCheckChange}
                    />
                ))}
            </Row>
        </Form.Group>
    );
}

export default SingleChoice;