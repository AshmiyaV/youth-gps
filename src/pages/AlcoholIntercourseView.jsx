import * as React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import { VapeWrap } from "./VapeView";
import Select from 'react-select';

const AlcoholIntercourseView = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    return(
        <VapeWrap>      
                <h2>Alcohol and Intercourse</h2>
                <h3>In the last month,</h3>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>1</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>How many times did you consume alcohol before or during oral, anal, or vaginal sex?</h3>
                    <SelectWrap>
                    <Select
                        className={'sectionTest'}
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      />
                    </SelectWrap>
                    </DataWrap>
                    </div>
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>2</span>
                    </QuestionNumber>
                    <DataWrap>
                    <h3>During the times when you would consume alcohol before or during oral, anal, or vaginal sex, how many drinks, on average, did you consume?</h3>
                    <SelectWrap>
                    <Select
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      />
                    </SelectWrap>
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
`;

const SelectWrap = styled.div`
    /* display: flex; */
    /* align-items: center; */
    width: 250px;
    height: 42px;
    /* justify-content: space-between; */
    /* .sectionTest { */
    /* :global  */
    /* .Select-control {
        height: 30px;
    }
    .Select-placeholder {
        line-height: 20px
    }
     .Select-value {
      line-height: 26px !important;
    }

    .Select-value-label {
        line-height: 26px;
      }

    .Select-input {
      height: 26px;
    } */
/* } */
>div>div{
    /* height: 25px; */
    font-size: 14px;
    align-content: center;
    >div:last-child{
        /* height: 35px; */
        span{
            display: none;
        }
    }
}
`;

const QuestionSection = styled.section`
width: 100%;
position: relative;
    margin: 20px 0;
    padding: 0;
    h3{
        width: 75%;
        line-height: 1.5;
    }
`;

export default AlcoholIntercourseView;