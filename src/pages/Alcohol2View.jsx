import * as React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import { VapeWrap } from "./VapeView";
import Tick from '../resources/tick.svg';
import TickFilled from '../resources/tick_filled.svg';
import CrossFilled from '../resources/cross_filled.svg';
import Cross from '../resources/cross.svg';

const Alcohol2View = () => {
    const questions = [
        {
            question: "While drinking, I have said or done embarrassing things."
        },
        {
            question: "I have had a hangover (headache, sick stomach) the morning after I had been drinking."
        },
        {
            question: "I have felt very sick to my stomach or thrown up after drinking."
        },
        {
            question: "I often have ended up drinking on nights when I had planned not to drink."
        },
        {
            question: "I have taken foolish risks when I have been drinking."
        },
        {
            question: "I have passed out from drinking."
        },
    ];
    const initialAnswersState = {};
    questions.forEach((i, index) => {
        initialAnswersState[index+1] = "";
    });
    console.log(initialAnswersState);
    const [answers, setAnswers] = React.useState(initialAnswersState);
    const setTrue = (index) => {
        setAnswers({...answers, [index]: true});
    }
    const setFalse = (index) => {
        setAnswers({...answers, [index]: false});
    }
    return(
        <VapeWrap>      
                <h2>Alcohol</h2>
                <h3>In the last month,</h3>
                {questions.map((i, index) => {
                    return(
                        <QuestionSection>
                        <div>
                        <QuestionNumber>
                            <span>{index+1}</span>
                        </QuestionNumber>
                        <DataWrap>
                        <h3>{i.question}</h3>
                        <div>
                       <img src={answers[index+1] ? TickFilled : Tick} width={40} height={40} onClick={() => setTrue(index+1)} />
                       <img src={!answers[index+1] && answers[index+1] === false ? CrossFilled : Cross} width={35} height={35} onClick={() => setFalse(index+1)} />
                        </div>
                        </DataWrap>
                        </div>
                    </QuestionSection>
                    )
                })}
        </VapeWrap>
    );
}

const QuestionNumber = styled.div`
background-color: #4D71E5;
width: 20px;
height: 20px;
position: absolute;
    left: -40px;
    top: 10px;
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
justify-content: space-between;
align-items: center;
div{
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
}
img{
    cursor: pointer;
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