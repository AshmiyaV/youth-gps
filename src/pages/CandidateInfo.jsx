import React, { useRef, useEffect } from "react";
import candidateInfo_styles from './CandidateInfo.module.css';
import PageLayout from "../components/PageLayout";
import styled from 'styled-components';
import calendar from  '../resources/calendar 1.png';
import NextButton from "../components/NextButton";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import armedForcesImage from "../resources/armed_forces.png";
import student_image from "../resources/canva-student.png";
import User from '../resources/user.svg';


const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px
`;

const CalendarDiv = styled.div`
  display: flex;
  margin-top: 10px;

  @media (min-width: 576px) and (max-width: 768px){
    width: 30%;
  }

  @media (max-width: 576px) {
    width: 40%;
    font-size: 10px;
  }

`;

// DatePicker component styles

const CustomDatePicker = styled(DatePicker)`
  /* Add your custom styles here */
  border: 1px solid #93B3FC;
  border-radius: 4px;
  color: black;
  height: 24px;
  paddingLeft: 5px;
  margin-right: -20px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }
`;


const CandidateInfo = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [showHomeOptions, setShowHomeOptions] = React.useState(false);
    const [showLiveWithOptions, setShowLiveWithOptions] = React.useState(false);
    const [homeOption, setHomeOption] = React.useState(null);
    const [liveOption, setLiveWithOption] = React.useState("");
    const [incomeOption, setIncomeOption] = React.useState("");
    const [collegeAttending, setCollegeAttending] = React.useState(false);
    const [armedForces, setArmedForces] = React.useState(false);
    const dateInputRef = useRef(null);

    const openDateInput = () => {
        // const dateInput = document.querySelector('input[type="date"]');
        // dateInput.click();
        dateInputRef.current.setOpen(true);
    }

    const homeOptions = {
        1: "In my own home or apartment",
        2: "In a relative’s home",
        3: "In a group home",
        4: "In campus/dormitory housing",
        5: "In a foster home",
        6: "Homeless or in a shelter",
        7: "Other"
    }

    const liveWithOptions = {
        1: 'Alone',
        2: 'With parents',
        3: 'With relatives other than parents',
        4: 'With a foster family',
        5: 'With roommates',
        6: 'Other',
    }

    const incomeOptions = {
        1: '$0–$10,000',
        2: '$10,001–$30,000',
        3: '$30,001–$50,000',
        4: '$50,001–$70,000',
        5: 'More than $70,000',
        98: 'No Response/Invalid Data'
    }
    
    return (<>
        <PageLayout selected={"basic_info"}>
            <FlexBox style={{marginRight: '5px', justifyContent: 'space-between'}}>
                
                <div>
                    <p className={candidateInfo_styles.birthdateDiv} style={{margin: '20px 0 20px 0', fontSize: '16px', fontWeight: '600'}}>Hi, John Doe, Tell Us About You and Your living situation  </p>
                    <FlexBox style={{justifyContent: 'space-between', alignItems: 'center', margin: '0'}}>
                        <div className={candidateInfo_styles.birthdateDiv} style={{marginTop: '10px'}}>
                            What is your date of birth? 
                        </div>
                        <CalendarDiv>
                            <CustomDatePicker 
                                ref = {dateInputRef} 
                                dateFormat="MM/dd/yyyy"
                                selected={selectedDate} 
                                placeholderText="MM/DD/YYYY" 
                                onChange={date => setSelectedDate(date)}
                                popperPlacement="bottom-end" 
                                maxDate={new Date()}
                                minDate={new Date('1900-01-01')}
                                showMonthDropdown
                                showYearDropdown

                                />
                            <img className={candidateInfo_styles.calendarImage}
                                onClick={()=>openDateInput()}  src={calendar} alt="calendar" />
                        </CalendarDiv>
                    </FlexBox>
                </div>

                <div style={{width: '30%'}}>
                    <img style={{width: '100%', height: '250px', borderRadius: '50%'}} src={User}></img>
                </div>
                
            </FlexBox>
            <div className={candidateInfo_styles.stayDiv}>
                <div className={candidateInfo_styles.stayText}>Describe where you live </div>
                <div id="selectDiv1" style={{height: '100%'}}>
                    <div className={candidateInfo_styles.triangle}></div>
                    <select style={{marginTop: '5px'}} id="selectBox1" selected={homeOption} onChange={(e)=>setHomeOption(e.target.value)} className={candidateInfo_styles.selectBox}>
                        <option value="" selected></option>
                        {Object.keys(homeOptions).map(key =>(
                            <option style={{width: '100%', margin: '20px'}} value={key}>{homeOptions[key]}</option>
                            ))}

                    </select>
                </div>

            </div>

            <div className={candidateInfo_styles.stayDiv}>
                <div className={candidateInfo_styles.stayText}>Who do you live with ? </div>
                <div style={{height: '100%'}}>
                    <div className={candidateInfo_styles.triangle}></div>
                    
                    <select style={{marginTop: '5px'}} selected={liveOption} onChange={(e)=>setLiveWithOption(e.target.value)} className={candidateInfo_styles.selectBox}>
                        <option value="" selected></option>
                        {Object.keys(liveWithOptions).map(key =>(
                            <option style={{width: '100%', margin: '20px'}} value={key}>{liveWithOptions[key]}</option>
                            ))}

                    </select>
                </div>
            </div>

            <FlexBox>
                <div className={candidateInfo_styles.birthdateDiv}>
                Are you currently attending college ? 
                </div>
                {collegeAttending ? <div onClick={()=>setCollegeAttending(false)} className={candidateInfo_styles.yesDiv}>
                    <div className={candidateInfo_styles.yesBigDiv}></div>
                    <div className={candidateInfo_styles.yesSmallDiv}></div>
                </div> : <div onClick={()=>setCollegeAttending(true)} className={candidateInfo_styles.noDiv} >
                    <div className={candidateInfo_styles.noBigDiv}></div>
                    <div className={candidateInfo_styles.noSmallDiv}></div>
                </div>}
            </FlexBox>

            <div style={{paddingLeft: '10px'}}>
                <div className={candidateInfo_styles.armedForcesText}>
                Have you ever served in the Armed Forces, the Reserves, or the National Guard?
                </div>
                <FlexBox style={{margin: '10px 20px'}}>
                        <div style={{width: '85%'}}>
                            <img className={candidateInfo_styles.armedForcesImage} src={armedForcesImage} alt="armed forces"></img>
                        </div>
                        {armedForces ? 
                            <div onClick={() => setArmedForces(false)} className={candidateInfo_styles.yesDiv} style={{width: '50px',marginLeft: 'auto'}}>
                                <div className={candidateInfo_styles.yesBigDiv}></div>
                                <div className={candidateInfo_styles.yesSmallDiv}></div>
                            </div> : 
                            <div onClick={() => setArmedForces(true)} className={candidateInfo_styles.noDiv} style={{marginRight: '0',width: '50px',marginLeft: 'auto'}}>
                                <div className={candidateInfo_styles.noBigDiv}></div>
                                <div className={candidateInfo_styles.noSmallDiv}></div>
                            </div>}
                </FlexBox>
                
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={candidateInfo_styles.incomeText}>Think about the household members who live with you right now. About how much income have you and your family members made in the last year before taxes? (Include child support and cash payments from the government—for example, welfare [TANF], SSI, or unemployment compensation.) </div>

                <div className={candidateInfo_styles.incomeDiv}>
                    <div className={candidateInfo_styles.triangle} style={{height: '100%'}}></div>

                    <div style={{width: '95%'}}>
                        {/* <input className={candidateInfo_styles.incomeInput} list='stay'></input> */}
                        <select style={{height: '100%'}} selected={incomeOption} onChange={(e)=>setHomeOption(e.target.value)} className={candidateInfo_styles.selectBox}>
                        <option value="" selected></option>
                        {Object.keys(incomeOptions).map(key =>(
                            <option value={key}>{incomeOptions[key]}</option>
                            ))}

                        </select>
                    </div>
                </div>
            </div>
            <div style={{margin: '30px auto'}}>
                <NextButton></NextButton>
            </div>
        </PageLayout>
    </>
    );
}

export default CandidateInfo;