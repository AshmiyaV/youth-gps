import * as React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const BACGaugeChart = (props) => {
  const { fontSize } = props;
    return(
<ReactSpeedometer
// width={"100%"}
// height={"100%"}
fluidWidth={true}
  maxValue={0.4}
  minValue={0}
  value={0.16}
  needleColor="#fddc6e"
  startColor="#025DC7"
  currentValueText=" "
  segments={8}
  segmentValueFormatter={(value) => value === '0.4' ? value + "+" : value}
  labelFontSize={fontSize}
//   customSegmentLabels={[
//     // {
//     //   text: "0"
//     // //   position: "INSIDE",
//     // //   color: "#555",
//     // },
//     {
//         text: "0.05",
//         position: "OUTSIDE"
//       //   color: "#555",
//       },
//       {
//         text: "0.10"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//       {
//         text: "0.15"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//       {
//         text: "0.20"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//       {
//         text: "0.25"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//       {
//         text: "0.30"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//       {
//         text: "0.35"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//       {
//         text: "0.40 +"
//       //   position: "INSIDE",
//       //   color: "#555",
//       },
//   ]}
  endColor="#f1646c"
/>
    );
};

export default BACGaugeChart;