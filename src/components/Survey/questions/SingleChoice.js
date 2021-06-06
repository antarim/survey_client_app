import {Form, Row} from "react-bootstrap";

const SingleChoice = ({uuid, prompt, choiceSet, answerRequired, handleChange, isDisabled }) => {
    const onCheckChange = (e) => {
        handleChange(e.target.name, e.target.value)
    }

    return (
        <Form.Group>
            <Row className="no-gutters">
                <Form.Label>{prompt}{answerRequired && '*'}</Form.Label>
            </Row>
            <Row className="no-gutters">
                {choiceSet.map((choice, i) => (
                    <Form.Check
                        disabled={isDisabled}
                        key={i}
                        inline
                        label={choice.text}
                        type="radio"
                        name={uuid}
                        value={choice.text}
                        onChange={onCheckChange}
                        // checked={}
                    />
                ))}
            </Row>
            <Row className="no-gutters">

            </Row>
        </Form.Group>
    );
}

export default SingleChoice;