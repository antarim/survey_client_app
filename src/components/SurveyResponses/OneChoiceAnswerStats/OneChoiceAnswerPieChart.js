import {PieChart, Pie, Tooltip, Cell, Legend} from "recharts";
import {PieChartColors} from "../../../constants/Charts";

const OneChoiceAnswerPieChart = ({data}) => {
    return (
        <PieChart width={330} height={270}>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
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

export default OneChoiceAnswerPieChart;