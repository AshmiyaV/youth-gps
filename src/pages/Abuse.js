import React, { useState } from "react";
import abuse_styles from './Abuse.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import NextButton from "../components/NextButton";
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

const Abuse = (props) => {
    const questions = [
        "In the past 3 months, how often has anyone with whom you had an intimate relationship (sexual or not) abused you emotionally, physically, or sexually?",
        "I could refuse if someone wanted to have sex without a condom or a dental dam.",
        "I would be able to say no if a friend offered me a drink of alcohol.",
        "I would be able to refuse if a friend offered me drugs, including marijuana."
        ]
    const [answers, setAnswers] = useState([0, 0, 0, 0]);
    console.log(answers)

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = parseInt(value);
        setAnswers(newAnswers);
    }

    return (<>
        <PageLayout>
            <div className={abuse_styles.container}>
                <FlexBox>
                    <div className={abuse_styles.firstQuestionDiv}>
                        <p className={abuse_styles.title}>{questions[0]}</p>
                    </div>
                    <div className={abuse_styles.selectDiv}>
                        <select className={abuse_styles.select} onChange={(e) => handleAnswerChange(0, e.target.value)}>
                            <option className={abuse_styles.option} default value="98"></option>
                            <option value={1}>Never</option>
                            <option value={2}>Rarely</option>
                            <option value={3}>Sometimes</option>
                            <option value={4}>Often</option>
                            <option value={5}>Very Often</option>
                        </select>
                    </div>
                </FlexBox>
                {questions.slice(1, questions.length).map((question, index)=> (
                    <FlexBox style={{marginBottom: '0px'}} key={index}>
                        <div className={abuse_styles.questionDiv}>
                            <p className={abuse_styles.title}>{question}</p>
                        </div>
                        <div className= {abuse_styles.optionBox}>
                            <div className={abuse_styles.emojiOption}>
                                <img className={abuse_styles.emoji} src={answers[index+1] == 1 || answers[index+1] == 0 ? strongly_agree_img : grey_strongly_agree_img} alt="Strongly Agree" onClick={() => handleAnswerChange(index+1, 1)}></img>
                                <p className={abuse_styles.emojiText}>Strongly Agree</p>
                            </div>
                            <div className={abuse_styles.emojiOption}>
                                <img className={abuse_styles.emoji} src={answers[index+1] == 2 || answers[index+1] == 0  ? agree_img : grey_agree_img} alt="Agree" onClick={() => handleAnswerChange(index+1, 2)}></img>
                                <p className={abuse_styles.emojiText}>Agree</p>
                            </div>
                            <div className={abuse_styles.emojiOption}>
                                <img className={abuse_styles.emoji} src={answers[index+1] == 3 || answers[index+1] == 0  ? disagree_img : grey_disagree_img} alt="Disagree" onClick={() => handleAnswerChange(index+1, 3)}></img>
                                <p className={abuse_styles.emojiText}>Disagree</p>
                            </div>
                            <div className={abuse_styles.emojiOption}>
                                <img className={abuse_styles.emoji} src={answers[index+1] == 4 || answers[index+1] == 0  ? strongly_disagree_img : grey_strongly_disagree_img} alt="Strongly Disagree" onClick={() => handleAnswerChange(index+1, 4)}></img>
                                <p className={abuse_styles.emojiText}>Strongly Disagree</p>
                            </div>

                        </div>
                    </FlexBox>
       
                ))}
            </div>
            <div className={abuse_styles.button}>
                <NextButton></NextButton>
            </div>
        </PageLayout>
    </>
    );
}

export default Abuse;