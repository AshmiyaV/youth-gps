import * as React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import { VapeWrap } from "./VapeView";
import Tick from '../resources/tick.svg';
import TickFilled from '../resources/tick_filled.svg';
import CrossFilled from '../resources/cross_filled.svg';
import Cross from '../resources/cross.svg';

const Alcohol2View = () => {
    return(
        <VapeWrap>      
                <h2>Alcohol</h2>
                {/* <h3>In order for us to calculate you blood Alcohol Concentration please give your best estimate of your height and weight.</h3> */}
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>1</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>While drinking, I have said or done embarrassing things.</h3>
                    <div>
                   <img src={true ? TickFilled : Tick} width={40} height={40} />
                   <img src={true ? Cross : CrossFilled} width={35} height={35} />
                    </div>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>2</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>I have had a hangover (headache, sick stomach) the morning after I had been drinking.</h3>
                    <div>
                    <img src={true ? TickFilled : Tick} width={40} height={40} />
                   <img src={true ? Cross : CrossFilled} width={35} height={35} />
                    </div>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>3</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>I have felt very sick to my stomach or thrown up after drinking.</h3>
                    <div>
                    <img src={true ? TickFilled : Tick} width={40} height={40} />
                   <img src={true ? Cross : CrossFilled} width={35} height={35} />
                    </div>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>4</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>I often have ended up drinking on nights when I had planned not to drink.</h3>
                    <div>
                    <img src={true ? TickFilled : Tick} width={40} height={40} />
                   <img src={true ? Cross : CrossFilled} width={35} height={35} />
                    </div>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>5</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>I have taken foolish risks when I have been drinking.</h3>
                    <div>
                    <img src={true ? TickFilled : Tick} width={40} height={40} />
                   <img src={true ? Cross : CrossFilled} width={35} height={35} />
                    </div>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>6</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>I have passed out from drinking.</h3>
                    <div>
                    <img src={true ? TickFilled : Tick} width={40} height={40} />
                   <img src={true ? Cross : CrossFilled} width={35} height={35} />
                    </div>
                    </DataWrap>
                    </div>
                </QuestionSection>
        </VapeWrap>
    );
}

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
justify-content: center;
span{
    align-self: center;
    margin-bottom: 3px;
}
`;

const DataWrap = styled.div`
display: flex;
/* width: 350px; */
justify-content: space-between;
align-items: center;
div{
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
}
`;

const QuestionSection = styled.section`
position: relative;
    margin: 20px 0;
    padding: 0;
    h3{
        line-height: 1.5;
    }
`;

export default Alcohol2View;