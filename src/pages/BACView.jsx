import * as React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import { VapeWrap } from "./VapeView";

const BACView = () => {
    return(
        <VapeWrap>      
                <h2>Blood Alcohol Concentration</h2>
                <h3>In order for us to calculate you blood Alcohol Concentration please give your best estimate of your height and weight.</h3>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>1</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>Height</h3>
                    <div>
                    <input 
                    type="number"
                    />
                    <span>cm</span>
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
                    <h3>Weight</h3>
                    <div>
                    <input 
                    type="number"
                    />
                    <span>kg</span>
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
    top: 14px;
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
width: 350px;
justify-content: space-between;
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
`;

const QuestionSection = styled.section`
position: relative;
    margin: 0;
    padding: 0;
`;

export default BACView;