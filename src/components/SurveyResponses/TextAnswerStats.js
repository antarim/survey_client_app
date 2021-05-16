import {Col, Row} from "react-bootstrap";

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
                    && textAnswers.map((answer, index) => (
                        <Row key={index} className="text-answer">
                            {answer}
                        </Row>
                    ))}
            </Col>
        </Row>
    );
}

export default TextAnswerStats;