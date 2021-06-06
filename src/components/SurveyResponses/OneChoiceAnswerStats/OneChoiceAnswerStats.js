import {countBy, orderBy} from "lodash";
import {Col, Row, Table} from "react-bootstrap";
import OneChoiceAnswerPieChart from "./OneChoiceAnswerPieChart";

import './OneChoiceAnswerStats.css';

const OneChoiceAnswerStats = ({answerData, question}) => {
    const choiceAnswers = [];
    answerData.forEach(answer => {
        if (answer.textAnswer) {
            choiceAnswers.push(answer.textAnswer);
        }
    })

    // Counting all entries of choices and
    // reshaping to pass in pie chart
    const data = Object.entries(countBy(choiceAnswers)).map(value => {
        const [answer, count] = value;
        return {
            name: answer,
            value: count
        }
    });

    // Order data by name
    const orderedData = orderBy(data, ['name'], ['asc']);

    return (
        <Row className="survey-response-item">
            <Col>
                <Row>
                    {question.prompt}
                </Row>
                <Row>
                    <Col>
                        <OneChoiceAnswerPieChart data={orderedData}/>
                    </Col>

                    <Col>
                        <Table className="choice-stats-table" striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Варіант</th>
                                    <th>Відповідей</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderedData.map((choiceData, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{choiceData.name}</td>
                                            <td>{choiceData.value}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default OneChoiceAnswerStats;