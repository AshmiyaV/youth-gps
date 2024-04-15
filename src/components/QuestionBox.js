import React from "react";
import styled from "styled-components";


const QuestionNumber = styled.div`
    border: 1px solid #4d71e5;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #4D71E5;
    color: white;
    /* margin-left: -260%; */
    text-align: center;
    margin-right: 20px;
`

const QuestionNumberP = styled.p`
    width: 18px;
    height: 18px;
    margin: 0;
    
`

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: -50px;
    width: ${props => props.width};

    @media (max-width: 768px) {
        ${'' /* margin-left: -30px; */}
        width: auto;
    }
    @media (max-width: 576px) {
        margin-left: -40px;
        width: auto;
    }
`;

const QuestionBox = (props) => {
  return (
    <FlexBox width={props.width ? props.width : 'auto'} style={{justifyContent: 'start', marginBottom: '0', alignItems: 'center'}}>
        <QuestionNumber >
            <QuestionNumberP>{props.index}</QuestionNumberP>
        </QuestionNumber>
        <div>{props.question}</div>
    </FlexBox>
  );
};

export default QuestionBox;