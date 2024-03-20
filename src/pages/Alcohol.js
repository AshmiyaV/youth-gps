import React, { useState } from "react";
import alcohol_styles from './Alcohol.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import NextButton from "../components/NextButton";
import SliderComponent from "../components/SliderComp";
import agree_img from '../resources/agree.svg';
import disagree_img from '../resources/disagree.svg';
import strongly_disagree_img from '../resources/completely_disagree.svg';
import strongly_agree_img from '../resources/strongly_agree.svg';

import grey_agree_img from '../resources/grey_agree.svg';
import grey_disagree_img from '../resources/grey_disagree.svg';
import grey_strongly_disagree_img from '../resources/grey_strong_disagree.svg';
import grey_strongly_agree_img from '../resources/grey_strongly_agree.svg';

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
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
        <PageLayout>
            <div className={alcohol_styles.container}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <div className={alcohol_styles.title}>{question}</div>
                        <div className={alcohol_styles.answer}>
                          <SliderComponent handleAnswerChange={handleAnswerChange} index={index} answer={answers[index]}></SliderComponent>
                         </div>

                        {/* <div className={schoolInfo_styles.progressBar}>
                            <div className={schoolInfo_styles.progressBarFill} style={{ width: '50%' }}></div>
                            <div className={schoolInfo_styles.progressBarCircle}>
                                <img src={HandCuffs} className={schoolInfo_styles.handcufficon} />
                            </div>
                        </div> */}
                    </div>
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