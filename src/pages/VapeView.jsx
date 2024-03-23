import * as React from "react";
import styled from "styled-components";
// import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import VapeSlider from '../resources/vape_slider.svg';
import Cigarrette from '../resources/cigarrete.svg';
import Marijuana from '../resources/marijuana.svg';
import SliderComp from "./SliderComp";
// import {Label, Slider, SliderOutput, SliderThumb, SliderTrack} from 'react-aria-components';

const VapeView = () => {
    return(
        <VapeWrap>      
            {/* <ProgressBarWrap>
               <ProgressBar />
            </ProgressBarWrap> */}
            {/* <Slider defaultValue={50}>
  <Label>Opacity</Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb name="opacity" />
  </SliderTrack>
</Slider> */}

            {/* <Form> */}
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
                    <SliderComp icon={VapeSlider} />
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>2</span>
                    </QuestionNumber>
                    <h3>Use tobacco?</h3>
                    </div>
                    <p>By tobacco, we mean menthol cigarettes, regular cigarettes, and loose tobacco rolled into cigarettes or cigars, pipe tobacco, snuff, chewing tobacco, dipping tobacco, snus, and others.</p>
                    <SliderComp icon={Cigarrette} />
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>3</span>
                    </QuestionNumber>
                    <h3>Use marijuana or hashish?</h3>
                    </div>
                    <p>Marijuana is sometimes called cannabis, weed, blunt, hydro, grass, or pot. Hashish is sometimes called hash or hash oil.</p>
                    <SliderComp icon={Marijuana} />              
                </QuestionSection>
            {/* </Form> */}
        </VapeWrap>
    );
}

export const VapeWrap = styled.article`
    h2{
        /* font-size: 1em; */
        font-size: 22px;
        margin: 0;
        /* margin-left: 35px; */
    }
    h3{
        /* font-size: 0.8em; */
        font-size: 18px;
        margin: 0;
        font-weight: normal;
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
    @media only screen and (max-width: 700px) {
        h2{
            font-size: 13px !important;
        }
        h3{
            font-size: 10px !important;
            line-height: 17px !important;
        }
        p{
            font-size: 8px !important;
            line-height: 13px !important;
        }
    }
`;

const QuestionNumber = styled.div`
background-color: #4D71E5;
width: 20px;
height: 20px;
position: absolute;
    left: -40px;
    top: 3px;
border-radius: 50%;
font-size: 13px;
color: white;
display: flex;
/* place-items: center; */
justify-content: center;
@media only screen and (max-width: 700px) {
    width: 13px;
    height: 13px;
    font-size: 9px;
    top: 1px;
    left: -22px;
}
span{
    align-self: center;
    margin-bottom: 3px;
}
/* margin: -30px; */
`;

// const SliderWrap = styled.div`
//  margin: 25px 0 40px;
// `;

const QuestionSection = styled.section`
position: relative;
    margin: 0;
    padding: 0;
    h3{
        line-height: 1.5;
    }
`;

export default VapeView;