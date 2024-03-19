import * as React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import Pills from '../resources/pills.svg';
import Medicine from '../resources/medicine.svg';
import Capsule from '../resources/capsule.svg';
import Drug1 from '../resources/drug1.svg';
import Drug2 from '../resources/drug2.svg';
import Drug3 from '../resources/drug3.svg';
import SliderComp from "./SliderComp";
import { VapeWrap } from "./VapeView";

const DrugsView = () => {
    return(
        <VapeWrap>      
                <h2>Drugs</h2>
                <h3>Over the past 30 days, how many days, if any, did you…</h3>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>1</span>
                    </QuestionNumber>
                    <h3>Use prescription opioid drugs without orders given to you by your doctor?</h3>
                    </div>
                    <p>By prescription opioid drugs, we mean pain relievers such as oxycodone (OxyContin®), hydrocodone (Vicodin®), codeine, morphine, methadone, tramadol, hydromorphone, oxymorphine, tapentadol.</p>
                    <SliderComp icon={Pills} />
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>2</span>
                    </QuestionNumber>
                    <h3>Use other prescription drugs without orders given to you by your doctor?</h3>
                    </div>
                    <p>Please exclude prescription opioid drugs. By other prescription drugs, we mean substances like barbiturates, sedatives, hypnotics, non-benzo tranquilizers.</p>
                    <SliderComp icon={Medicine} />
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>3</span>
                    </QuestionNumber>
                    <h3>Use non-prescription opioid drugs?</h3>
                    </div>
                    <p>By non-prescription opioid drugs we mean the illegal drug heroin and illicitly made synthetic opioids such as fentanyl.</p>
                    <SliderComp icon={Capsule} />              
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>4</span>
                    </QuestionNumber>
                    <h3>Use any other illegal drugs?</h3>
                    </div>
                    <p>Please exclude marijuana/hashish and non-prescription opioid drugs. By other illegal drugs, we mean substances like crack or cocaine, amphetamine or methamphetamine, hallucinogens (such as LSD/acid, Ecstasy/MDMA, PCP/angel dust, peyote), inhalants (sniffed substances such as glue, gasoline, paint thinner, cleaning fluid, shoe polish).</p>
                    <SliderComp icon={Drug1} />              
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>5</span>
                    </QuestionNumber>
                    <h3>Inject any drugs?</h3>
                    </div>
                    <p>Count only injections without orders from your doctor—those you had just to feel good or to get high.</p>
                    <SliderComp icon={Drug2} />              
                </QuestionSection>
                <QuestionSection>
                    <div>
                    <QuestionNumber>
                        <span>6</span>
                    </QuestionNumber>
                    <h3>Share injection equipment?</h3>
                    </div>
                    <p>By injection equipment, we mean needle and drug paraphernalia.</p>
                    <SliderComp icon={Drug3} />              
                </QuestionSection>
        </VapeWrap>
    );
}

const QuestionNumber = styled.div`
background-color: #4D71E5;
width: 20px;
height: 20px;
position: absolute;
    left: -40px;
    top: 3px;
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

const QuestionSection = styled.section`
position: relative;
    margin: 0;
    padding: 0;
    h3{
        line-height: 1.5;
    }
`;

export default DrugsView;