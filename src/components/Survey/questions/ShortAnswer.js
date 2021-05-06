import { Input } from 'antd';
import {Form, Row} from "react-bootstrap";
import './ShortAnswer.css';

const { TextArea } = Input;

const ShortAnswer = ({question_uuid, prompt, handleChange, answer_required}) => {
    const onCheckChange= (e) => {
        handleChange(e.target.name, e.target.value)
    }

    return (
        <Form.Group controlId={question_uuid}>
            <Row className="no-gutters">
                <Form.Label>{prompt}</Form.Label>
            </Row>
            <Row className="no-gutters text-area-wrapper">
                <TextArea
                    className="custom-text-area"
                    showCount
                    maxLength={1000}
                    autoSize={{minRows: 2}}
                    required={answer_required}
                    name={question_uuid}
                    onChange={onCheckChange}
                />
            </Row>
        </Form.Group>
    );
}

export default ShortAnswer;