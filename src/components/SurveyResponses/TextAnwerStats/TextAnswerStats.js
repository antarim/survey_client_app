import {Col, Row} from "react-bootstrap";
import './TextAnwerStats.css';

const TextAnswerStats = ({answerData, question}) => {
    const textAnswers = [];
    answerData.forEach(answer => {
        if (answer.textAnswer) {
            textAnswers.push(answer.textAnswer);
        }
    })

    return (
        <Row className="survey-response-item">
            <Col>
                <Row>
                    {question.prompt}
                </Row>
                <Row className="answers-count">
                    Відповідей: {textAnswers.length}
                </Row>
                {textAnswers.length > 0
                    ? textAnswers.map((answer, index) => (
                        <Row key={index} className="text-answer">
                            {answer}
                        </Row>
                    ))
                    : (
                        <Row className="no-answers">
                            Немає відповідей
                        </Row>
                    )
                }
            </Col>
        </Row>
    );
}

export default TextAnswerStats;