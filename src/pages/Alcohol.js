import React, { useState } from "react";
import alcohol_styles from './Alcohol.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import NextButton from "../components/NextButton";
import alcoholIcon from "../resources/alcohol.svg";
import beerImage from "../resources/Beer.png";
import blackBeerImage from "../resources/Black beer.png";
import wineImage from "../resources/Coffee.png";
import liquorImage from "../resources/Liquor.png";

import SliderComponent from "./SliderComp";
import QuestionBox from "../components/QuestionBox";

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: -50px;

    @media (max-width: 576px) {
        margin-left: -40px;
    }
`;

const Alcohol = (props) => {
    const questions = [
        "Drink alcohol? (any use at all) By alcohol, we mean beer, wine, wine coolers, malt beverages, or hard liquor.",
        "Binge drink? Binge drinking is 5 or more alcoholic beverages at the same time or within a couple of hours of each other for males; 4 or more for females.",
        "How many standard drinks containing alcohol do you have on a typical day when you are drinking?",
        "How often during the last 30 days have found that you were not able to stop drinking once you have started?",
        "How often during the last 30 days have found that you were not able to stop drinking once you have started?", 
        "How often in the last 30 days have you failed to do what was normally expected from you because of drinking?",
        "How often in the last 30 days have you needed a drink in the morning to get yourself going after a heavy drinking session?",
        "How often in the last 30 days have you had a feeling of guilt or remorse after drinking?",
        "How often in the last 30 days have you been unable to remember what happened the night before because you had been drinking?",
        "Have you or someone else been injured as a result of your drinking?"
        ]
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    console.log(answers)

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = parseInt(value);
        setAnswers(newAnswers);
    }

    return (<>
        <PageLayout selected={'alcohol'}>
            <div className={alcohol_styles.container}>
                {questions.map((question, index) => (
                    <>
                    {index == 1 ? <div key={index} style={{margin: '30px auto'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <QuestionBox question={question} index={index+1}></QuestionBox>
                            <div style={{display: 'flex', flexDirection: 'row', width: '30%', marginRight: '-15%'}}>
                                <img className={alcohol_styles.image} style={{width: '60px', height: '80px', marginRight: '-10px'}} src={beerImage} alt="beer" />
                                <img className={alcohol_styles.image} style={{width: '30px', height: '30px', marginRight: '10px', marginTop:'50px'}} src={blackBeerImage} alt="beer" />
                                <img className={alcohol_styles.image} style={{width: '50px', height: '80px', marginLeft: '-30px'}} src={wineImage} alt="beer" />
                                <img className={alcohol_styles.image} style={{width: '80px', height: '50px', marginLeft: '-40px', marginTop:'25px'}} src={liquorImage} alt="beer" />
                            </div>
                        </div>
                        <div className={alcohol_styles.answer}>
                          <SliderComponent min={0} icon={alcoholIcon} handleAnswerChange={handleAnswerChange} index={index} answer={answers[index]}></SliderComponent>
                         </div>
                    </div> : 
                    <div key={index} style={{margin: '20px auto'}}>
                        <QuestionBox question={question} index={index+1}></QuestionBox>
                        <div className={alcohol_styles.answer}>
                          <SliderComponent min = {0} icon={alcoholIcon} handleAnswerChange={handleAnswerChange} index={index} answer={answers[index]}></SliderComponent>
                         </div>
                    </div>}
                    </>
                ))}
            </div>
            <div className={alcohol_styles.button}>
                <NextButton></NextButton>
            </div>
        </PageLayout>
    </>
    );
}

export default Alcohol;