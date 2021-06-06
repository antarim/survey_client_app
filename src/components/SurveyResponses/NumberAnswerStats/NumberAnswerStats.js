import {Button, Col, Row} from "react-bootstrap";
import {useState} from "react";
import {ChartTypes} from "../../../constants/Charts";
import NumberAnswerChart from "./NumberAnswerChart";
import {range, round, mean, countBy} from "lodash";
import './NumberAnswerStats.css';

const NumberAnswerStats = ({answerData, question}) => {
    const [chartType, setChartType] = useState(ChartTypes.PIE_CHART);

    // Plain list of numbers [1, 2, 4, 3, 2, and so on]
    const numberAnswers = [];
    answerData.forEach(answer => {
        if (answer.numberAnswer) {
            numberAnswers.push(answer.numberAnswer);
        }
    });

    const getData = () => {
        /**/
        // Range from 1 to rangeMax
        const dataRange = range(question.rangeMin, question.rangeMax + 1)
        // Count number of entries of rangeValue in numberAnswers
        const dataCount = countBy(numberAnswers);

        return dataRange.map(rangeVal => {
            // Percentage of answers is current value
            const count = (dataCount[rangeVal] / numberAnswers.length * 100);
            const countRounded = round(count, 2);

            return {
                name: rangeVal,
                value: countRounded ? countRounded : 0
            }
        });
    }

    const data = getData();

    const averageValue = round(mean(numberAnswers), 2);

    return (
        <Row className="survey-response-item">
            <Col>
                <Row>
                    {question.prompt}
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
                    <Col>
                        <NumberAnswerChart
                            data={data}
                            chartType={chartType}
                        />
                    </Col>
                    <Col>
                        <Row className="answers-count">
                            Відповідей: {numberAnswers.length}
                            <br/>
                            Середнє значення: {averageValue}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default NumberAnswerStats;