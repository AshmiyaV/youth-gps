import React, { useState } from "react";
import risk_styles from './Risk.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import NextButton from "../components/NextButton";
import RiskSelectionBox from "../components/RiskSelectionBox";

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const Risk = (props) => {
    const questions = [
        "What level of risk do you think people have of harming themselves if they have sex (oral, vaginal, or anal) without a condom or dental dam?",
        "What level of risk do you think people have of harming themselves if they have sex while high on drugs or under the influence of alcohol?",
        "What level of risk do you think people have of harming themselves physically or in other ways when they use tobacco once or twice a week? By tobacco, we mean menthol cigarettes, regular cigarettes, loose tobacco rolled into cigarettes or cigars, pipe tobacco, snuff, chewing tobacco, dipping tobacco, snus, and others.",
        "What level of risk do you think people have of harming themselves physically or in other ways when they binge drink alcoholic beverages once or twice a week? Binge drinking is five or more alcoholic beverages at the same time or within a couple of hours of each other for males; four or more for females. By alcoholic beverage, we mean beer, wine, wine coolers, malt beverages, or hard liquor.",
        "What level of risk do you think people have of harming themselves physically or in other ways when they use marijuana or hashish once or twice a week? Marijuana is sometimes called weed, blunt, hydro, grass, or pot. Hashish is sometimes called hash or hash oil.",
        "What level of risk do you think people have of harming themselves physically if they share needles, syringes, or other injection equipment when using drugs?",
        "What level of risk do you think people have of harming themselves physically if they share needles, syringes, or other injection equipment when using drugs?",
        "What level of risk do you think people have of harming themselves physically or in other ways when they take prescription opioid drugs without a doctor’s order once or twice a week? By prescription opioid drugs, we mean pain relievers such as oxycodone (OxyContin®), hydrocodone (Vicodin®), codeine, morphine, methadone, tramadol, hydromorphone, oxymorphine, tapentadol. "
    ]
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    console.log(answers)

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    }

    return (<>
        <PageLayout>
            <div className={risk_styles.container}>
                {questions.map((question, index) => (
                    <FlexBox>
                    <div className={risk_styles.title}>
                        {question}
                    </div>
                    <RiskSelectionBox answers = {answers} questionIndex={index} onAnswerChange={(value) => handleAnswerChange(index, value)}></RiskSelectionBox>
                </FlexBox>))}
            </div>
            <div className={risk_styles.button}>
                <NextButton></NextButton>
            </div>
        </PageLayout>
    </>
    );
}

export default Risk;