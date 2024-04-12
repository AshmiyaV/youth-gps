import * as React from "react";
import {    
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    BarChart,
    Cell,
    LabelList
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
const BarChartComp = (props) => {
    const { bar1Key, barChartData, label, layout } = props;
    const colors = ["#025DC7", "#F1646C"];
    return(
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
        // width={800}
        // height={120}
        data={barChartData}
        layout={layout}
        // barSize={35} 
        barGap={4}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis type="number" hide={true} />
        <YAxis type="category" hide={true} />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey={bar1Key} activeBar={false} fill="#025DC7">
        {barChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        <LabelList
      dataKey="name"
      position="insideLeft"
      angle={0}
      offset={10}
      fill="white"
    />
         <LabelList
      dataKey="value"
      position="insideRight"
      angle={0}
      offset={10}
      fill="white"
    />
            </Bar>
      </BarChart>
      </ResponsiveContainer>
    );
};

export default BarChartComp;