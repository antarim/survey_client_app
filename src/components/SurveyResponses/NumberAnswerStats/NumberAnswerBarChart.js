import {Bar, BarChart, CartesianGrid, Label, Tooltip, XAxis, YAxis} from "recharts";

const NumberAnswerBarChart = ({data}) => {
    return (
        <BarChart width={330} height={270} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" name="Оцінки" />
            <YAxis type="number" domain={[0, 100]}>
                <Label value="%" position="insideLeft"/>
            </YAxis>
            <Tooltip />
            <Bar dataKey="value" name="Відсоток відповідей" fill="#575bab"/>
        </BarChart>
    );
}

export default NumberAnswerBarChart;