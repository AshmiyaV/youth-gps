import styled from 'styled-components';
const SelectionBox = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 1fr;
    grid-gap: 1px;
    margin-top: 30px;
`

const ProgressBar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #D9D9D9;
    border-radius: 5px;
    margin-top: 20px;
`
const ProgressBarFill = styled.div`
    width: 50%;
    height: 100%;
    background-color: #D9D9D9;
    border-radius: 5px;
`
  
const ProgressBarTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 12px solid transparent; 
    border-right: 12px solid transparent; 
    border-bottom: 20px solid #000;
    position: relative;
    left: ${(props) => (props.percentage ? props.percentage : '100%')};
    margin-top: -16px;
`

const AnswerBox = styled.div`
    width: 100%;
    height: 40px;
    color: black;

    @media (max-width: 576px) {
        height: 30px;
    }

`

const Text = styled.p`
    margin: 13px auto;
    font-size: 14px;
    text-align: center;

    @media (min-width: 576px) and (max-width: 768px){
        margin: 8px auto;
        font-size: 14px;
    }

    @media (max-width: 576px) {
        margin: 8px auto;
        font-size: 10px;
    }
`

const answerPercentage = ['0%', '12.5%', '37.5%', '62.5%', '87.5%', '100%']

const RiskSelectionBox = (props) => {
    return (
        <>
            <SelectionBox>
                <AnswerBox onClick={() => props.onAnswerChange(1)} style={{backgroundColor: props.answers[props.questionIndex] == 1 ? 'rgba(84, 211, 97)' : 'rgba(84, 211, 97,0.5)', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                    <Text>No Risk</Text>
                </AnswerBox>
                <AnswerBox onClick={() => props.onAnswerChange(2)} style={{backgroundColor: props.answers[props.questionIndex] == 2 ? 'rgba(239, 243, 62)' : 'rgba(239, 243, 62,0.5)'}}>
                    <Text>Slight Risk</Text>
                </AnswerBox>
                <AnswerBox onClick={() => props.onAnswerChange(3)} style={{backgroundColor: props.answers[props.questionIndex] == 3 ? 'rgb(255, 181, 93)' : 'rgb(255, 181, 93,0.5)'}}>
                    <Text>Moderate Risk</Text>
                </AnswerBox>
                <AnswerBox onClick={() => props.onAnswerChange(4)} style={{backgroundColor: props.answers[props.questionIndex] == 4 ? 'rgb(226, 0, 0)' : 'rgb(226, 0, 0,0.5)' , borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}>
                    <Text>High Risk</Text>
                </AnswerBox>
            </SelectionBox>
            <ProgressBar>
                <ProgressBarFill ></ProgressBarFill>
                <ProgressBarTriangle percentage={answerPercentage[props.answers[props.questionIndex]]}></ProgressBarTriangle>
            </ProgressBar>
        </>
    
  )
}

export default RiskSelectionBox;