import * as React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import { VapeWrap, QuestionNumber as BaseQuestionNumber } from "./VapeView";
import SliderComp from "./SliderComp";
import Cheers from '../resources/cheers.svg';
import Clock from '../resources/clock.svg';

const BACView = () => {
    return(
        <VapeWrap>      
                <h2>Blood Alcohol Concentration</h2>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>1</span>
                    </QuestionNumber>
                    <h3>In the last four weeks, what is the largest number of standard drinks you have consumed on a single occasion?</h3>
                    </div>
                    <SliderComp icon={Cheers} showPlus={true} />              
                </QuestionSection>
                <h3>In order for us to calculate you blood Alcohol Concentration please give your best estimate of your height and weight.</h3>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>2</span>
                    </QuestionNumber>
                    <h3>Over how many hours did you drink this amount?</h3>
                    </div>
                    <SliderComp maxValue={24} icon={Clock} />              
                </QuestionSection>
                <h3>In order for us to calculate you blood Alcohol Concentration please give your best estimate of your height and weight.</h3>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>3</span>
                    </QuestionNumber>
                    <DataWrap>
                        <Label>
                    <h3>Height</h3>
                    </Label>
                    <Data>
                    <input 
                    type="number"
                    />
                    <h3>cm</h3>
                    </Data>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>4</span>
                    </QuestionNumber>
                    <DataWrap>
                    <Label>
                    <h3>Weight</h3>
                    </Label>
                    <Data>
                    <input 
                    type="number"
                    />
                    <h3>lbs</h3>
                    </Data>
                         </DataWrap>
                    </div>
                </QuestionSection>
        </VapeWrap>
    );
}

const QuestionNumber = styled(BaseQuestionNumber)`
top: 14px;
@media only screen and (max-width: 700px) {
    top: 4px;
}
`;

const Label = styled.div`
width: 120px;
@media only screen and (max-width: 700px) {
    width: 80px;
}
`;

const DataWrap = styled.div`
display: flex;
/* width: 350px; */
/* justify-content: space-between; */
align-items: center;
h3{
    /* width: 100px; */
}
input{
    border: 2px solid #646464;
    outline: none;
    height: 30px;
    border-radius: 5px;
    &:focus{
        outline: none;
    }
}
span{
        margin-left: 10px;
    }
    @media only screen and (max-width: 700px) {
        input{
            width: 80px;
        height: 15px;
        }
    }
`;

const QuestionSection = styled.section`
position: relative;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    @media only screen and (max-width: 700px) {
        margin-top: 10px;
        margin-bottom: 0px;
    }
`;
const Data = styled.div`
display: flex;
align-items: center;
input{
    margin-right: 7px;
    font-size: 18px;
}
`;

export default BACView;