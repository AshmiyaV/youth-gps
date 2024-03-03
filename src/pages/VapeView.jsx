import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import VapeSlider from '../resources/vape_slider.svg';
import SliderComp from "./SliderComp";
// import {Label, Slider, SliderOutput, SliderThumb, SliderTrack} from 'react-aria-components';

const VapeView = () => {
    return(
        <VapeWrap>      
            <ProgressBarWrap>
               <ProgressBar />
            </ProgressBarWrap>
            {/* <Slider defaultValue={50}>
  <Label>Opacity</Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb name="opacity" />
  </SliderTrack>
</Slider> */}

            <Form>
                <h2>Vape/Smoke</h2>
                <h3>Over the past 30 days, how many days, if any, did you…</h3>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>1</span>
                    </QuestionNumber>
                    <h3>Use electronic vapor products?</h3>
                    </div>
                    <p>By electronic vapor products we mean Vapes, vaporizers, vape pens, hookah pens, electronic cigarettes (e-cigarettes or e-cigs), e-pipes, or electronic nicotine delivery systems (ENDS).</p>
                    <SliderWrap>
<Slider
        defaultValue={20}
        min={0}
        max={100}
        // width= {80}
        trackStyle={{ backgroundColor: "#333ADB", height: 30, borderRadius: 50 }}
        railStyle={{ backgroundColor: "#EBEBED", height: 30, borderRadius: 50 }}
        handleStyle={{
          borderColor: "#333ADB",
          height: 50,
          width: 50,
          marginLeft: -10,
          marginTop: -10,
        //   borderRadius: 50,
        //   backgroundColor: "#FFFFFF"
        backgroundImage: `url(${VapeSlider})`,
        backgroundPosition: 'center',
        backgroundSize: "40px 40px",
        backgroundRepeat: 'no-repeat',
        opacity: "100%",
        // background: "center"
        }}
      />
      </SliderWrap>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>2</span>
                    </QuestionNumber>
                    <h3>Use tobacco?</h3>
                    </div>
                    <p>By tobacco, we mean menthol cigarettes, regular cigarettes, and loose tobacco rolled into cigarettes or cigars, pipe tobacco, snuff, chewing tobacco, dipping tobacco, snus, and others.</p>
                    <SliderComp />
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>3</span>
                    </QuestionNumber>
                    <h3>Use marijuana or hashish?</h3>
                    </div>
                    <p>Marijuana is sometimes called cannabis, weed, blunt, hydro, grass, or pot. Hashish is sometimes called hash or hash oil.</p>
                    <SliderComp />              
                </QuestionSection>
            </Form>
        </VapeWrap>
    );
}

const VapeWrap = styled.article`
width: 100%;
background-color: #D3EEFF;
display: flex;
    flex-direction: column;
    align-items: center;
    .rc-slider{
        /* width: 70%; */
    }
    .rc-slider-handle{
        &:focus{ 
              /* border: none !important; */
           outline: black;
           /* box-shadow: none; */
        }
            /* background-color: black; */
    }
    h2{
        /* font-size: 1em; */
        font-size: 22px;
        margin: 0;
        margin-left: 35px;
    }
    h3{
        /* font-size: 0.8em; */
        font-size: 18px;
        margin: 0;
        /* padding: 5px 0; */
        /* line-height: 0; */
    }
    p{
        /* font-size: 0.6em; */
        font-size: 14px;
        margin: 0;
        /* padding: 5px 0; */
        line-height: 25px;
    }
`;

const QuestionNumber = styled.div`
background-color: blue;
width: 20px;
height: 20px;
position: absolute;
    left: -30px;
    top: 14px;
border-radius: 50%;
font-size: 13px;
color: white;
display: flex;
/* place-items: center; */
justify-content: center;
span{
    align-self: center;
    margin-bottom: 3px;
}
/* margin: -30px; */
`;

const ProgressBarWrap = styled.section`
display: flex;
    justify-content: center;
    margin: 50px 0 20px 0;
    width: 100%;
`;

const Form = styled.section`
width: 80%;
background-color: white;
margin: 20px 100px;
padding: 20px;
`;

const SliderWrap = styled.div`
 margin: 25px 0 40px;
`;

const QuestionSection = styled.section`
position: relative;
    margin: 0;
    padding: 0;
`;

export default VapeView;