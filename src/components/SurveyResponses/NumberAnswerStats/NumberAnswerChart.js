import {ChartTypes} from "../../../constants/Charts";
import NumberAnswerBarChart from "./NumberAnswerBarChart";
import NumberAnswerPieChart from "./NumberAnswerPieChart";

const NumberAnswerChart = ({data, chartType}) => {
    switch (chartType) {
        case ChartTypes.BAR_CHART: {
            return <NumberAnswerBarChart data={data}/>;
        }
        case ChartTypes.PIE_CHART: {
            return <NumberAnswerPieChart data={data}/>;
        }
        default: return <p>Wrong chart type!</p>;
    }
}

export default NumberAnswerChart;