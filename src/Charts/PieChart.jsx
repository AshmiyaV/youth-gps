import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Low Risk', value: 100, range: "0-3" },
  { name: 'Risky', value: 100, range: "4-9" },
  { name: 'Harmful', value: 100, range: "10-13" },
  { name: 'Severe', value: 100, range: "14+" },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props) => {
    console.log(props);
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, range } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  let xPosition;
  let yPosition;
  const positionChangeBy = 10;
  const getPositions = () => {
    if(range === "0-3"){
        xPosition = cx + positionChangeBy;
        yPosition = cy - positionChangeBy;
      }
      else if(range === "4-9"){
        xPosition = cx - positionChangeBy;
        yPosition = cy - positionChangeBy;
      }
      else if(range === "10-13"){
        xPosition = cx - positionChangeBy;
        yPosition = cy + positionChangeBy;
      }
      else{
        xPosition = cx + positionChangeBy;
        yPosition = cy + positionChangeBy;
      }
  };
  getPositions(range);

  return (
    <g>
         <text x={cx} y={cy-15} fontSize={"30px"} fontWeight={"bold"} textAnchor="middle" fill={fill}>
        {payload.range}
      </text>
      <text x={cx} y={cy+20} fontSize={"22px"} fontWeight={"bold"} textAnchor="middle" fill={"#5e5e5e"}>
        {payload.name}
      </text>
      <Sector
        cx={xPosition}
        cy={yPosition}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        // paddingAngle={10}
        endAngle={endAngle}
        fill={fill}
      />
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 20}
        fill={fill}
      /> */}
      {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

export default class PieChartComponent extends PureComponent {
  render() {
    let auditIndex = 0;
    data.forEach((i, index) => {
       if(i.name === this.props.selected){
        auditIndex = index;
       }
    });
    return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart 
        // width={400} height={400}
         margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <Pie
            activeIndex={auditIndex}
            activeShape={renderActiveShape}
            data={data}
            // cx="50%"
            // cy="50%"
            // innerRadius={100}
            // outerRadius={180}
            innerRadius={"70%"}
            outerRadius={"95%"}
            dataKey="value"
          >
               {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
