import {Button, Col, Row} from "react-bootstrap";
import TextArea from "antd/lib/input/TextArea";
import {useState} from "react";
import axiosInstance from "../../api/axios";

const MailInput = ({survey}) => {
    const [textValue, setTextValue] = useState('');
    const [invalidEmails, setInvalidEmails] = useState([]);

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
                setInvalidEmails([...invalidEmails, email]);
            }
        });

        axiosInstance.post('send_emails/', JSON.stringify({
            survey: survey.id,
            valid_emails: validEmails
        }))
            .then(res => {
                console.log(res);
        })
            .catch(err => {
                console.log(err.response.data);
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
                    autoSize={{minRows: 3}}
                    onChange={e => setTextValue(e.target.value)}
                />
            </Row>

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