import React, {useState} from "react";
import schoolInfo_styles from './SchoolInfo.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import YesCheckmark from '../resources/checkmark-yes.svg';
import NoCheckmark from '../resources/checkmark-no.svg';
import NoAnswer from '../resources/no-answer-checkmark.svg';
import YesCheckmarkGrey from '../resources/checkmark-yes-grey.svg';
import NoCheckmarkGrey from '../resources/checkmark-no-grey.svg';
import NoAnswerGrey from '../resources/no-answer-checkmark-grey.svg';
import NextButton from "../components/NextButton";
import HandCuffs from "../resources/Handcuffs.svg";
import student_image from "../resources/canva-student.png"; 
import { useNavigate } from "react-router-dom";
import SliderComponent from "./SliderComp";


const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const SchoolInfo_QA = (props) => (
    <FlexBox>
        <div className={schoolInfo_styles.title}>
            {props.question}
        </div>
        <div className={schoolInfo_styles.iconsBox}>
            <div onClick={()=> props.onAnswer(1)}>
                <img src={props.answer == 0 || props.answer == 98 ? YesCheckmarkGrey : YesCheckmark} className={schoolInfo_styles.icon} />
                <div style={{textAlign: 'center'}}>Yes</div>
            </div>
            <div onClick={()=> props.onAnswer(0)}>
                <img src={props.answer == 1 || props.answer == 98 ? NoCheckmarkGrey : NoCheckmark} className={schoolInfo_styles.icon} />
                <div style={{textAlign: 'center'}}>No</div>
            </div>
            <div onClick={()=> props.onAnswer(98)}>
                <img src={props.answer == 1 || props.answer == 0 ? NoAnswerGrey : NoAnswer} className={schoolInfo_styles.icon} />
                <div style={{textAlign: 'left', marginLeft: '-30px'}}>I do not wish to answer</div>
            </div>
        </div>
    </FlexBox>
)

const SchoolInfo = (props) => {

    const questions = ["Have you ever been suspended from school for drug or alcohol use?",
                        "Is there a doctor's office, health center, or other similar place that you usually go to when you are sick?",
                        "Would you know where to go near you to see a health care professional regarding a drug or alcohol problem?",
                        "Would you know where to go near you to see a healthcare professional regarding HIV/AIDS or other sexually transmitted health issues?",
                        "Are you on parole or probation?"]
    const [answers, setAnswers] = useState([999, 9999, 999, 999, 999])
    const [arrested, setArrested] = useState(0)
    const history = useNavigate();

    const [enableNext, setEnableNext] = React.useState(false);

    console.log(arrested)
    React.useEffect(() => {
        if(!(answers.includes(999) || answers.includes(9999))){
            setEnableNext(true);
        }
        } , [answers]
    )

    const OnNextSectionClicked = () => {
        history('/alcohol');
    }

    const onAnswerChange = (answer, index) => {
        let answers_changed = [...answers];
        answers_changed[index] = answer;
        setAnswers(answers_changed);
        console.log(answers);
    }


    console.log(answers);
    return (<>
        <PageLayout selected="checklist">
            <div className={schoolInfo_styles.container}>
                <SchoolInfo_QA question={questions[0]} answer={answers[0]} onAnswer={answer => onAnswerChange(answer, 0)}></SchoolInfo_QA>
                <FlexBox>
                    <div className={schoolInfo_styles.title}>
                    In the past 30 days, how many times have you been arrested?
                    </div>
                    <div>
                        {/* <div className={schoolInfo_styles.progressBarFill} style={{ width: '50%' }}></div>
                        <div className={schoolInfo_styles.progressBarCircle}>
                            <img src={HandCuffs} className={schoolInfo_styles.handcufficon} />
                        </div> */}
                        <SliderComponent min={0} icon={HandCuffs} handleAnswerChange={(value)=>setArrested(value)} answer={arrested}></SliderComponent>
                    </div>
                </FlexBox>
                {questions.slice(1).map((question, index) => (
                    <SchoolInfo_QA question={question} answer={answers[index+1]} onAnswer={answer => onAnswerChange(answer, index+1)}></SchoolInfo_QA>
                ))}

            </div>
            <div style={{margin: '30px auto'}}>
                <NextButton enabled={enableNext} goToNextSextion={()=>OnNextSectionClicked()}></NextButton>
            </div>
        </PageLayout>
    </>
    );
}

export default SchoolInfo;