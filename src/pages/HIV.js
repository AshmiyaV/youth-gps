import React, { useState } from "react";
import hiv_styles from './HIV.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import NextButton from "../components/NextButton";
import QuestionBox from "../components/QuestionBox";

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
                            <div style={{margin: 'auto 0', width: '46%'}}></div>
                            <div className={hiv_styles.selectDivTop}>
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
                            {/* <div>
                                <p className={hiv_styles.question_number}>{index}</p>
                            </div>
                            <div style={{margin: 'auto 0', width: '50%'}}>
                                <p className={hiv_styles.title}>{question}</p>
                            </div> */}
                            <QuestionBox width='50%' question={question} index={index}></QuestionBox>
                            
                            <div className={hiv_styles.selectDiv}>
                                <ol className={hiv_styles.ol} onChange={(e) => handleAnswerChange(index-1, e.target.value)}>
                                    <li key={1}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 1 ? true : false} type="radio" id={String(index) + String(1)} value={1}></input></li>
                                    <li key={2}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 2 ? true : false} type="radio" id={String(index) + String(2)} value={2}></input></li>
                                    <li key={3}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 3 ? true : false} type="radio" id={String(index) + String(3)} value={3}></input></li>
                                    <li key={4}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 4 ? true : false} type="radio" id={String(index) + String(4)} value={4}></input></li>
                                    <li key={5}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 5 ? true : false} type="radio" id={String(index) + String(5)} value={5}></input></li>
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
                            {/* <FlexBox style={{justifyContent: 'start', marginBottom: '0'}}>
                                <div>
                                    <p className={hiv_styles.question_number}>{index}</p>
                                </div>
                                <div style={{margin: 'auto 0', textAlign: 'left'}}>
                                    <p className={hiv_styles.title}>{question}</p>
                                </div>
                            </FlexBox> */}
                            <QuestionBox width='50%' question={question} index={index}></QuestionBox>
                            
                            <div className={hiv_styles.selectDiv}>
                                <ol className={hiv_styles.ol} onChange={(e) => handleAnswerChange(index-1, e.target.value)}>
                                    <li className={hiv_styles.textLi} key={1}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 1 ? true : false} type="radio" id={String(index) + String(1)} value={1}></input><p>Extremely unlikely</p></li>
                                    <li className={hiv_styles.textLi} key={2}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 2 ? true : false} type="radio" id={String(index) + String(2)} value={2}></input><p>Very unlikely</p></li>
                                    <li className={hiv_styles.textLi} key={3}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 3 ? true : false} type="radio" id={String(index) + String(3)} value={3}></input><p>Somewhat likely</p></li>
                                    <li className={hiv_styles.textLi} key={4}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 4 ? true : false} type="radio" id={String(index) + String(4)} value={4}></input><p>Very likely</p></li>
                                    <li className={hiv_styles.textLi} key={5}><input className={hiv_styles.radio} onChange={(e) => handleAnswerChange(index-1, e.target.value)} checked={answers[index-1] === 5 ? true : false} type="radio" id={String(index) + String(5)} value={5}></input><p>Extremely likely</p></li>
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