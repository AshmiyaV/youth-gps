import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'You', value: 400 },
  { name: 'Avg', value: 200 },
  { name: 'Group C', value: 100 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#fafafa', '#FFBB28', '#FF8042'];

export default class DoublePieChartComp extends PureComponent {

  render() {
    // const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, innerRadius, outerRadius, percent, name }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx - 10;
        const y = cy - radius;
      
        return (
          <LabelText 
          x={x}
          y={y}
          fill="#025DC7"
          // fontSize={"20px"}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central">
            {name === "Group C" ? "" : name.toUpperCase()}
          </LabelText>
        );
      };
    return (
      <ResponsiveContainer width="100%" height="100%">
      <PieChart 
      // width={800}
      // height={400}
      onMouseEnter={this.onPieEnter}>
        <Pie
          data={[data[0]]}
          // cx={380}
          // cy={200}
          startAngle={90}
          endAngle={-180}
          labelLine={false}
          label={renderCustomizedLabel}
          // innerRadius={165}
          // outerRadius={200}
          innerRadius={"75%"}
          outerRadius={"95%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={[data[1],   { name: 'Group C', value: data[0].value - data[1].value }]}
          // cx={380}
          // cy={200}
          startAngle={90}
          endAngle={-180}
          labelLine={false}
          label={renderCustomizedLabel}
          // innerRadius={115}
          // outerRadius={150}
          innerRadius={"45%"}
          outerRadius={"65%"}
          fill="#8884d8"
          paddingAngle={-1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    );
  }
}

const LabelText = styled.text`
font-size: 20px;
@media only screen and (max-width: 550px) {
  font-size: 8px;
}
`;