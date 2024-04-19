import * as React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import Cigarrette from '../resources/cigarrete.svg';

// interface ISliderProps{
// icon: String;

// }

const SliderComp = (props) => {
    const handleLabel = (node, handleProps) => {
    const left = parseFloat(node.props.style.left) - 2.2;
    // console.log(handleProps.value)
    if (props.answer != handleProps.value && props.handleAnswerChange) {
      props.handleAnswerChange(handleProps.value)

    }
      return(
        <TooltipWrap>
        <span style={{position: "absolute", left: `${left}%`}}>{`${handleProps.value}${handleProps.value === 30 && props.showPlus ? '+' : ""}`}</span>
       {node}
        </TooltipWrap>
      )
    }
    console.log(props)
    return(
        <SliderWrap>
        <Slider
                defaultValue={0}
                min={props.min ? props.min : 0}
                max={props.maxValue ? props.maxValue : 30}
                styles={{
                    height: 30,
                    width: 30,
                    marginLeft: -10,
                    handle: {borderColor: "#025dc7",
                    marginTop: -4,
                  backgroundImage: `url(${props.icon ? props.icon : Cigarrette})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: "100%",}
                }}
                handleRender={handleLabel}
                trackStyle={{ backgroundColor: "#025dc7", borderRadius: 50 }}
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
        height: 40px;
                    width: 40px;
                    background-size: 30px 30px;
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
    height: 20px;
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