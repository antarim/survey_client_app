import {Button, Col, Row} from "react-bootstrap";
import TextArea from "antd/lib/input/TextArea";
import {useState} from "react";
import axiosInstance from "../../api/axios";
import {Alert} from "antd";

const MailInput = ({survey}) => {
    const [textValue, setTextValue] = useState('');
    const [invalidEmails, setInvalidEmails] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState();

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }


    const handleSubmit = () => {
        const emails = textValue.split('\n').map(mail => mail.trim());
        const validEmails = [];

        emails.forEach(email => {
            if (emailIsValid(email)) {
                validEmails.push(email)
            } else {
                setError({failed_validation: email})
                setInvalidEmails([...invalidEmails, email]);
            }
        });

        if (emails.length !== validEmails.length) {
            return
        }

        setIsSubmitting(true);

        axiosInstance.post('send_emails/', JSON.stringify({
            survey: survey.id,
            valid_emails: validEmails
        }))
            .then(() => {
                setTextValue('');
                setIsSubmitting(false);
                setIsSubmitted(true);
            })
            .catch(err => {
                setError(err.response.data);
                setIsSubmitting(false);
                setIsSubmitted(false);
            })
    }

    return (
        <Col lg={6}>
            <Row className="no-gutters">
                Email отримувачів
            </Row>

            <Row className="no-gutters mail-row">
                <TextArea
                    className="mail-textarea"
                    value={textValue}
                    placeholder={'example@example.com\nexample@example.com'}
                    maxLength={1000}
                    disabled={isSubmitting}
                    autoSize={{minRows: 3}}
                    onChange={e => {
                        setError(undefined);
                        setIsSubmitted(false);
                        setTextValue(e.target.value);
                    }}
                />
            </Row>
            {isSubmitted && <Row className="no-gutters ">
                <Alert message="Email(и) успішно відправлено" type="success"/>
            </Row>}
            {error && <Row className="no-gutters ">
                <Alert message={`Помилка ${error.failed_validation}`} type="error"/>
            </Row>}
            <Row className="no-gutters send-button">
                <Col lg={6}>
                    <Button block variant="info" onClick={handleSubmit}>
                        <i className="far fa-paper-plane"></i>{' '}
                        Надіслати
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}

export default MailInput;