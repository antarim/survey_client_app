import {PieChart, Pie, Tooltip, Cell, Legend} from "recharts";
import {PieChartColors} from "../../../constants/Charts";

const NumberAnswerPieChart = ({data}) => {
    const clearData = [];

    data.forEach(entry => {
        if (entry.value > 0) {
            clearData.push(entry)
        }
    });

    const renderCustomLabel = ({index}) => {
        return clearData[index].name;
    }

    return (
        <PieChart width={330} height={270}>
            <Pie data={clearData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label={renderCustomLabel}>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PieChartColors[index]}/>
                    ))
                }
            </Pie>
            <Legend/>
            <Tooltip />
        </PieChart>
    );
}

export default NumberAnswerPieChart;