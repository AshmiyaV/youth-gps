import * as React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import VapeSlider from '../resources/vape_slider.svg';

const SliderComp = () => {
    const handleLabel = (node, handleProps) => {
    const left = parseFloat(node.props.style.left) - 1.5;
    console.log(typeof(left))
      return(
        <TooltipWrap>
        <span style={{position: "absolute", left: `${left}%`, bottom: "12px"}}>{handleProps.value}</span>
       {node}
        </TooltipWrap>
      )
    }
    return(
        <SliderWrap>
        <Slider
                defaultValue={20}
                min={0}
                max={30}
                styles={{
                    handle: {borderColor: "#333ADB",
                    height: 50,
                    width: 50,
                    marginLeft: -10,
                    marginTop: -10,
                  backgroundImage: `url(${VapeSlider})`,
                  backgroundPosition: 'center',
                  backgroundSize: "40px 40px",
                  backgroundRepeat: 'no-repeat',
                  opacity: "100%",}
                }}
                handleRender={handleLabel}
                trackStyle={{ backgroundColor: "#333ADB", height: 30, borderRadius: 50 }}
                railStyle={{ backgroundColor: "#EBEBED", height: 30, borderRadius: 50 }}
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