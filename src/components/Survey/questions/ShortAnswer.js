import { Input } from 'antd';
import {Form, Row} from "react-bootstrap";
import './ShortAnswer.css';

const { TextArea } = Input;

const ShortAnswer = ({uuid, prompt, handleChange, answerRequired, isDisabled}) => {
    const onCheckChange= (e) => {
        handleChange(e.target.name, e.target.value)
    }

    return (
        <Form.Group controlId={uuid}>
            <Row className="no-gutters">
                <Form.Label>{prompt}{answerRequired && '*'}</Form.Label>
            </Row>
            <Row className="no-gutters text-area-wrapper">
                <TextArea
                    disabled={isDisabled}
                    className="custom-text-area"
                    showCount
                    maxLength={1000}
                    autoSize={{minRows: 2}}
                    required={answerRequired}
                    name={uuid}
                    onChange={onCheckChange}
                />
            </Row>
        </Form.Group>
    );
}

export default ShortAnswer;