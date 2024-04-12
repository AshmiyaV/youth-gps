import * as React from "react";
import {    
    Bar,
    XAxis,
    YAxis,
    BarChart,
    Cell,
    LabelList,
    ResponsiveContainer
} from "recharts";

//bar chart props
// interface IBarChartProps{
// barChartData: any[];
// yAxisKey: string;
// bar1Key: string;
// bar2Key: string;
// layout: 'horizontal' | 'vertical';
// }

//stacked bar chart common component
const BarChartHorizontalComp = (props) => {
    const { bar1Key, barChartData, label } = props;
    const colors = ["#025DC7", "#F1646C"];
    return(
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
        // width={250}
        // height={320}
        data={barChartData}
        // layout={'horizontal'}
        // barSize={35} 
        barGap={4}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis  type="category" label={label} padding={"20px"} dataKey={"dfd"} axisLine={false} tickLine={false} />
        <YAxis  type="number" hide={true} />
        <Bar dataKey={bar1Key} activeBar={false} fill="#025DC7">
        {barChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        <LabelList
      dataKey="value"
      position="insideTop"
      angle={0}
      offset={10}
      fill="white"
    />
         <LabelList
      dataKey="name"
      position="insideBottom"
      angle={0}
      offset={10}
      fill="white"
    />
            </Bar>
      </BarChart>
      </ResponsiveContainer>
    );
};

export default BarChartHorizontalComp;