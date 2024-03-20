import React, { useState } from "react";
import hiv_styles from './HIV.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import NextButton from "../components/NextButton";

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const Hiv = (props) => {
    const questions = [
        "",
        "What is your gut feeling about how likely you are to get infected with HIV?",
        "I worry about getting infected with HIV:",
        "Picturing self getting HIV is something I find:",
        "I am sure I will NOT get infected with HIV:",
        "I feel vulnerable to HIV infection:",
        "There is a chance, no matter how small, I could get HIV:",
        "I think my chances of getting infected with HIV are:",
        "Getting HIV is something I have:"

        ]
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    console.log(answers)

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = parseInt(value);
        setAnswers(newAnswers);
    }

    return (<>
        <PageLayout>
            <div className={hiv_styles.webContainer}>
                {questions.map((question, index) => (
                    <>
                        {index === 0 ? 
                        <FlexBox style={{marginBottom: '10px'}}>
                            <div style={{margin: 'auto 0', width: '50%'}}></div>
                            <div className={hiv_styles.selectDiv} style={{width: '50%', }}>
                                <ol className={hiv_styles.ol}>
                                    <li className={hiv_styles.textLi} key={1}>Extremely unlikely</li>
                                    <li className={hiv_styles.textLi} key={2}>Very unlikely</li>
                                    <li className={hiv_styles.textLi} key={3}>Somewhat likely</li>
                                    <li className={hiv_styles.textLi} key={4}>Very likely</li>
                                    <li className={hiv_styles.textLi} key={5}>Extremely likely</li>
                                </ol>
                            </div>
                        </FlexBox>
                        : 
                        <FlexBox>
                            <div style={{margin: 'auto 0', width: '50%'}}>
                                <p className={hiv_styles.title}>{question}</p>
                            </div>
                            <div className={hiv_styles.selectDiv}>
                                <ol className={hiv_styles.ol} onChange={(e) => handleAnswerChange(index-1, e.target.value)}>
                                    <li key={1}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 1} type="radio" name={index} value={1}></input></li>
                                    <li key={2}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 2} type="radio" name={index} value={2}></input></li>
                                    <li key={3}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 3} type="radio" name={index} value={3}></input></li>
                                    <li key={4}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 4} type="radio" name={index} value={4}></input></li>
                                    <li key={5}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 5} type="radio" name={index} value={5}></input></li>
                                </ol>
                            </div>
                        </FlexBox>}
                    </>

                    ))}
            </div>

            <div className={hiv_styles.mobContainer}>
                {questions.map((question, index) => (
                    <>
                        {index != 0 ? 
                        <div>
                            <div style={{margin: 'auto 0', textAlign: 'left'}}>
                                <p className={hiv_styles.title}>{question}</p>
                            </div>
                            <div className={hiv_styles.selectDiv}>
                                <ol className={hiv_styles.ol} onChange={(e) => handleAnswerChange(index-1, e.target.value)}>
                                    <li className={hiv_styles.textLi} key={1}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 1} type="radio" name={index} value={1}></input>Extremely unlikely</li>
                                    <li className={hiv_styles.textLi} key={2}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 2} type="radio" name={index} value={2}></input>Very unlikely</li>
                                    <li className={hiv_styles.textLi} key={3}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 3} type="radio" name={index} value={3}></input>Somewhat likely</li>
                                    <li className={hiv_styles.textLi} key={4}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 4} type="radio" name={index} value={4}></input>Very likely</li>
                                    <li className={hiv_styles.textLi} key={5}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 5} type="radio" name={index} value={5}></input>Extremely likely</li>
                                </ol>
                            </div>
                        </div>
                    : null}
                    </> 
                    ))}
            </div>
            <div className={hiv_styles.button}>
                <NextButton></NextButton>
            </div>
        </PageLayout>
    </>
    );
}

export default Hiv;