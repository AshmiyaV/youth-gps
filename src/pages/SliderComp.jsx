import * as React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import Cigarrette from '../resources/cigarrete.svg';

// interface ISliderProps{
// icon: String;

// }

const SliderComp = (props) => {
    const handleLabel = (node, handleProps) => {
    const left = parseFloat(node.props.style.left) - 1.5;
    console.log(typeof(left))
      return(
        <TooltipWrap>
        <span style={{position: "absolute", left: `${left}%`}}>{handleProps.value}</span>
       {node}
        </TooltipWrap>
      )
    }
    return(
        <SliderWrap>
        <Slider
                defaultValue={0}
                min={0}
                max={30}
                styles={{
                    handle: {borderColor: "#333ADB",
                    marginTop: -10,
                  backgroundImage: `url(${props.icon ? props.icon : Cigarrette})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: "100%",}
                }}
                handleRender={handleLabel}
                trackStyle={{ backgroundColor: "#333ADB", borderRadius: 50 }}
                railStyle={{ backgroundColor: "#EBEBED", borderRadius: 50 }}
              />
              </SliderWrap>
    );
} 

const SliderWrap = styled.div`
 .rc-slider{
  /* height: 50,
                    width: 50, */
    }
    .rc-slider-rail, .rc-slider-track{
      height: 30px;
    }
    .rc-slider-handle{
        height: 50px;
                    width: 50px;
                    background-size: 40px 40px;
                    /* margin-left: 25px; */
                    /* transform: translateX(-100%) !important; */
                    /* left: 20px !important; */
    /* bottom: -18px; */
        &:focus{ 
           outline: black;
        }
    }
    @media only screen and (max-width: 700px) {
  /* For everything bigger than 768px */
  .rc-slider-rail, .rc-slider-track{
    height: 25px;
  }
  .rc-slider-handle{
        height: 30px;
                    width: 30px;
                    background-size: 25px 25px;
                    /* margin-left: 12px; */
                    /* transform: translateX(-100%) !important; */
    bottom: -18px;
        &:focus{ 
           outline: black;
        }
    }
    .rc-slider-handle-dragging{
      box-shadow: 0 0 0 3px #96dbfa !important;
    }
}

 margin: 25px 10px 40px;
 @media only screen and (max-width: 700px) {
  margin: 10px 7px 30px;
 }
`;
const TooltipWrap = styled.section`
span{
    font-size: 18px;
    bottom: 12px;
    @media only screen and (max-width: 700px) {
  /* For everything bigger than 768px */
  font-size: 8px;
  /* left: -0.5%; */
    bottom: 10px;
  }
}
`;

export default SliderComp;