import {Button, Col, Row} from "react-bootstrap";
import {useState} from "react";
import {ChartTypes} from "../../../constants/Charts";
import NumberAnswerChart from "./NumberAnswerChart";

const NumberAnswerStats = ({answerData, question}) => {
    const [chartType, setChartType] = useState(ChartTypes.BAR_CHART);

    const numberAnswers = [];
    answerData.forEach(answer => {
        if (answer.numberAnswer) {
            numberAnswers.push(answer.numberAnswer);
        }
    });

    const getData = () => {
        // Range from 1 to rangeMax
        const range = [...Array(question.rangeMax).keys()].map(x => ++x);
        return range.map((rangeVal) => {
            // Percentage of answers is current value
            const count = (numberAnswers.filter(v => v === rangeVal).length / numberAnswers.length * 100);
            const countRounded = Math.round(count * 100) / 100;

            return {
                name: rangeVal,
                value: countRounded
            }
        });
    }

    const data = getData();

    return (
        <Row className="survey-response-item">
            <Col>
                <Row>
                    {question.prompt}
                </Row>
                <Row className="answers-count">
                    Відповідей: {numberAnswers.length}
                </Row>
                <Row className="chart-select">
                    <Button
                        className="chart-select-button"
                        variant={"secondary"}
                        onClick={() => setChartType(ChartTypes.BAR_CHART)}
                    >
                        <i className="fas fa-chart-bar"></i>{' '}
                        Стовпчаста
                    </Button>
                    <Button
                        className="chart-select-button"
                        variant={"secondary"}
                        onClick={() => setChartType(ChartTypes.PIE_CHART)}
                    >
                        <i className="fas fa-chart-pie"></i>{' '}
                        Секторна
                    </Button>
                </Row>
                <Row className="chart-wrapper">
                    <NumberAnswerChart
                        data={data}
                        chartType={chartType}
                    />
                </Row>
            </Col>
        </Row>
    );
}

export default NumberAnswerStats;