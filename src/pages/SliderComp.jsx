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
    console.log(typeof(left))
      return(
        <TooltipWrap>
        <span style={{position: "absolute", left: `${left}%`, bottom: "12px", top: '-24px'}}>{handleProps.value}</span>
       {node}
        </TooltipWrap>
      )
    }
    return(
        <SliderWrap>
        <Slider
                defaultValue={props.min ? props.min : 0}
                min={0}
                max={30}
                styles={{
                    handle: {borderColor: "#333ADB",
                    height: 40,
                    width: 40,
                    marginLeft: -10,
                    marginTop: -10,
                  backgroundImage: `url(${props.icon ? props.icon : Cigarrette})`,
                  backgroundPosition: 'center',
                  backgroundSize: "40px 40px",
                  backgroundRepeat: 'no-repeat',
                  opacity: "100%",}
                }}
                handleRender={handleLabel}
                trackStyle={{ backgroundColor: "#333ADB", height: 24, borderRadius: 50 }}
                railStyle={{ backgroundColor: "#EBEBED", height: 24, borderRadius: 50 }}
              />
              </SliderWrap>
    );
} 

const SliderWrap = styled.div`
 .rc-slider{
    }
    .rc-slider-handle{
        &:focus{ 
           outline: black;
        }
    }
 margin: 25px 0 40px;
`;
const TooltipWrap = styled.section`
span{
    font-size: 18px;
}
`;

export default SliderComp;