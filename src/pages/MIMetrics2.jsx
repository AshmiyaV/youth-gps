import * as React from "react";
import styled from "styled-components";
import classNames from 'classnames';
import logo from '../resources/logo.svg';
import Boy from '../resources/boy.svg';
import Girl from '../resources/girl.svg';
import Web from '../resources/website.svg';
import BarChartComp from "../Charts/BarChart";
import PieChartComponent from "../Charts/PieChart";
import BACGaugeChart from "../Charts/BACGaugeChart";
import DoublePieChartComp from "../Charts/DonutChart";
import YouthBg from '../resources/youth_bg.svg';
import Info from '../resources/info.svg';
import { SmokeLabel as BaseSmokeLabel } from './MIMetrics1';

const MIMetrics2 = () => {
    const data = [
        {
          name: 'You',
          value: 7,
        },
        {
          name: 'Avg',
          value: 3,
        }
    ];
    const DonutChartData = [
      { name: 'Low Risk', value: 100, range: "0-3", color: "#0088FE" },
      { name: 'Risky', value: 100, range: "4-9", color: "#00C49F" },
      { name: 'Harmful', value: 100, range: "10-13", color: "#FFBB28" },
      { name: 'Severe', value: 100, range: "14+", color: "#FF8042" },
    ];
    const auditScore = 14;
    let audit = "";
    const getAuditMessage = () => {
      console.log(auditScore)
      if(auditScore >= 0 && auditScore <= 3){
      audit = "Low Risk";
    }
    else if(auditScore >= 4 && auditScore <= 9){
      audit = "Risky";
    }
    else if(auditScore >= 10 && auditScore <= 13){
      audit = "Harmful";
    }
    else{
      audit = "Severe";
    }
  };
  getAuditMessage(auditScore);
  console.log(audit);
    
    // const audit = "Low Risk";
    return(
        <MetricsWrap>
            <Heading>
        <img width="150px" height="60px" src={logo} />
        <h2>Metrics</h2>
        </Heading>
        <ContentWrap>
            <Top>
            <h3>Thanks for completing the survey, 1001!</h3>
            <p>In a moment, you will have a chance to review some personalized feedback based on your responses to the questions in this survey. Please take a look at this feedback and the information in the Tips, Facts and Support screens.</p>
            </Top>  
            <Content>
                <AuditScoreWrap>
                <AuditContent>
                  <h3>Sexual Partners</h3>
                  <p>Your avg number of sexual partners </p>
                  <h3 className="auditScore">{2}</h3>
                </AuditContent>
                <DonutChartWrap>
                <DoublePieChartComp />
                </DonutChartWrap>
                </AuditScoreWrap>
                <SmokeWrap>
                <h3>Alcohol Influenced Sexual Encounters:</h3>
                <BarWrap>
                {/* <SmokeLabel>Tobacco</SmokeLabel> */}
                {/* <BarChartComp
              barChartData={data} 
              bar1Key="value" 
              label="Tobacco" 
              layout="vertical"
                /> */}
                <BelowAvgTextWrap>
                <h2>You reported consuming approximately <span style={{color: "#f1646c"}}>5</span> drinks per week, and <span style={{color: "#f1646c"}}>20</span> drinks per month.</h2>
                {/* <Percentage>20%</Percentage> */}
                </BelowAvgTextWrap>
                </BarWrap>
                {/* <p>On average, <Percentage>25.3%</Percentage> of the population consumes tobacco annually, while <Percentage>16.2%</Percentage> do so within a span of 30 days.</p> */}
                <BarWrap>
                <SmokeLabel>Alcohol Consumption before sex</SmokeLabel>
                <BarCompWrap>
                   <BarChartComp
              barChartData={data} 
              bar1Key="value" 
              label="Marijuana" 
              layout="vertical"
                />
                         </BarCompWrap>
                </BarWrap>
                  {/* <p>On average, <Percentage>34.1%</Percentage> of the population consumes marijuana annually, while <Percentage>24%</Percentage> do so within a span of 30 days.</p>
                  <BarWrap>
                <SmokeLabel>Vape</SmokeLabel>
                <BarCompWrap>
                     <BarChartComp
              barChartData={data} 
              bar1Key="value" 
              label="Vape" 
              layout="vertical"
                />
                </BarCompWrap>
                </BarWrap>
                  <p>On average, <Percentage>33%</Percentage> of the population consumes vape annually, while <Percentage>23.5%</Percentage> do so within a span of 30 days.</p> */}
                  <Drinks>
                    <p>Drinks on average you consumed before having sex is <span style={{color: "#f1646c"}}>10</span> and population avg is <span style={{color: "#f1646c"}}>7</span>.</p>
                  </Drinks>
                  </SmokeWrap>
                {/* <PieChartComp /> */}
                </Content>   
                <Resources>
            <h3>Resources</h3>
            {/* <p>In a moment, you will have a chance to review some personalized feedback based on your responses to the questions in this survey. Please take a look at this feedback and the information in the Tips, Facts and Support screens.</p> */}
            </Resources> 
            <ResourceContent>Some people can stop or reduce their drinking by themselves, while others might need some additional support. See which option below suits you best.</ResourceContent> 
            <Content>
              <ResourcesBox>
                <h4>Free HIV Testing: Recurring Monthly Testing Events</h4>
                <ul>
                  <li></li>
                  <li><img src={Web} /><strong>Website</strong><p>https://everyonestopaidsnow.org/</p></li>
                  <li><img src={Info} /><strong>Additional Info</strong><p>High Impact Prevention Project, funded by the Florida Department of Health, lists free HIV testing sites in the Alachua, Bradford, Columbia, Lake, Marion, and Putnam counties.</p></li>
                </ul>
              </ResourcesBox>
              </Content>     
        </ContentWrap>
        </MetricsWrap>
    );
};

const MetricsWrap = styled.article`
display: flex;
flex-direction: column;
background-image: url(${YouthBg});
background-size: cover;
      background-position: center;
      background-size: 650px 300px;
    width: 100%; 
    @media only screen and (max-width: 550px) {
      background-size: unset;
      box-shadow: none;
    }
    /* height: 100%;  */
`;

const Drinks = styled.section`
display: flex;
align-items: center;
`;

const Resources = styled.section`
    background-color: #025DC7;
    color: white;
    padding: 10px;
    text-align: center;
    h3{
      margin: 0;
    }
    @media only screen and (max-width: 550px) {
        h3{
            font-size: 12px !important;
        }
    }
`;

const ResourceContent = styled.section`
padding: 20px 50px 0;
margin: 0;
`;

const ResourcesBox = styled.section`
border: solid 2px #5e5e60;
border-radius: 10px;
margin-top: 20px;
h4{
    background-color: #025dc7;
    margin: 0;
    padding: 10px 15px;
    color: #ffffff;
    border-radius: 8px 8px 0 0;
    border-bottom: 2px solid #5e5e60;
}
    li{
      display: flex;
    align-items: center;
    color: #025dc7;
    img{
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
      strong{
        min-width: 170px;
    }
    p{
      margin: 0;
      color: #5e5e60;
    }
    }
`;

const Heading = styled.section`
        display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    h2{
      margin: 0;
    }
    @media only screen and (max-width: 550px) {
    font-size: 18px;
    }
`;

const ContentWrap = styled.article`
width: 85%;
    align-self: center;
    background-color: #D3EEFF;
        box-shadow: 0 0 25px #646464;
    @media only screen and (max-width: 550px) {
    width: 100%;
    }
  margin-bottom: 40px;
`;

const BACScoreWrap = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: solid 1.5px #4a4a4a30;
padding: 50px 0;
@media only screen and (max-width: 550px) {
  flex-direction: column;
  align-items: normal;
  padding: 10px 0;
  align-items: center;
}
`;

const AuditScoreWrap = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 0;
@media only screen and (max-width: 550px) {
  flex-direction: column;
  align-items: normal;
}
`;

const Legend = styled.section`
    margin-top: 30px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
border-bottom: solid 1.5px #4a4a4a30;
padding-bottom: 30px;
@media only screen and (max-width: 550px) {
  margin-top: 0;
  padding-bottom: 5px;
}
`;

const AuditTypes = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    .selected-text{
      h4{
      color: white !important;
      }
    }
`;

const Round = styled.span`
display: block;
width: 20px;
height: 20px;
background-color: #fafafa;
border: 4px solid #fafafa;
border-radius: 25px;
margin-bottom: 20px;
@media only screen and (max-width: 550px) {
  width: 12px;
  height: 12px;
    margin-bottom: 10px;
  /* border: 2px solid #fafafa; */
}
`;

const SmokeWrap = styled.section`
border-bottom: solid 1.5px #4a4a4a30;
padding: 20px 0;
p{
  text-align: center;
  >span{
    color: #f1646c;
    font-weight: bold;
    font-size: 20px;
  }
}
@media only screen and (max-width: 550px) {
  h3, h2{
    font-size: 12px;
    line-height: 15px;
    >span{
      font-size: 13px;
      line-height: 17px;
    }
  }
  p{
    font-size: 11px;
    line-height: 15px;
    >span{
      font-size: 13px;
      line-height: 17px;
    }
  }
  span{
      font-size: 18px;
    }
}
`;

const AlcoholWrap = styled.section`
border-bottom: solid 1.5px #4a4a4a30;
 padding: 20px 0;
`;

const SmokeLabel = styled(BaseSmokeLabel)`
    margin-right: 20px;
`;

const AuditContent = styled.div`
/* margin: 50px 0; */
width: 50%;
h3{
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  line-height: 35px;
}
.auditScore{
  font-size: 40px;
  color: #f1646c;
}
h4{
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  line-height: 25px;
}
p{
  line-height: 30px;
}
@media only screen and (max-width: 550px) {
  width: 100%;
  h3, h4{
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  }
  p{
    font-size: 10px;
    line-height: 15px;
  }
  .auditScore{
    font-size: 16px;
  }
}
`;

const BarCompWrap = styled.div`
width: 800px;
height: 120px;
@media only screen and (max-width: 550px) {
  width: 550px;
  height: 80px;
  text{
    font-size: 10px !important;
  }
}
`;

const BarCompHorizontalWrap =styled.div`
width: 250px;
height: 320px;
@media only screen and (max-width: 550px) {
  width: 250px;
  height: 200px;
  text{
    font-size: 10px !important;
  }
}
`;

const PieChartWrap = styled.div`
width: 100%;
height: 400px;
@media only screen and (max-width: 550px) {
 height: 250px;
}
`;

const AlcoholContent = styled.div`
margin: 0 50px;
h3{
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  line-height: 35px;
}
@media only screen and (max-width: 550px) {
  margin: 0;
h3, h2{
    font-size: 12px;
    line-height: 15px;
  }
  p{
    font-size: 10px;
    line-height: 15px;
  }
}
`;

const BelowAvgTextWrap = styled.section`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
h2{
  margin: 0;
}
`;

const Percentage = styled.span`
  font-size: 35px;
  line-height: 30px;
  color: #025DC7;
`;

const RectangleAuditBox = styled.div`
width: 150px;
height: 150px;
border-radius: 5px;
background-color: #fafafa;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4{
      margin: 0;
    }
    .audit-number{
      font-size: 28px;
    }
    .audit-text{
      font-size: 20px;
      color: #919191;
    }
    @media only screen and (max-width: 550px) {
      width: 100px;
      height: 100px;
      margin-bottom: 15px;
      .audit-number{
      font-size: 20px;
    }
    .audit-text{
      font-size: 13px;
    }
    }    
`;

const BACChartWrap = styled.div`
width: 500px;
height: 270px;
@media only screen and (max-width: 550px) {
  width: 250px;
  height: 140px;
  text{
    font-size: 10px !important;
  }
  margin-bottom: 10px;
}
`;

const BarWrap = styled.div`
display: flex;
align-items: center;
font-weight: bold;
color: #5e5e5e;
`;

const BACPopData = styled.section`
display: flex;
    width: 43%;
    justify-content: space-between;
    img{
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 550px) {
      width: auto;
      justify-content: unset;
    }
`;

const DonutChartWrap = styled.div`
width: 100%;
height: 350px;
@media only screen and (max-width: 550px) {
  height: 200px;
}
`;

const MaleData = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    p{
      margin: 0;
      >span:first-of-type{
      margin-right: 15px;
    }}
    @media only screen and (max-width: 550px) {
      padding-right: 20px;
    }
`;

const FemaleData = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    p{
      margin:0;
       >span:first-of-type{
      margin-right: 15px;
    }
  }
`;

const BarChartWrap = styled.section`
display: flex;
align-items: center;
`;

const PopData = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Top = styled.section`
    background-color: #025DC7;
    color: white;
    padding: 20px;
    @media only screen and (max-width: 550px) {
        h3{
            font-size: 12px !important;
        }
        p{
            font-size: 10px !important;
        }
    }
`;
const Content = styled.section`
    padding: 0 50px;
    @media only screen and (max-width: 550px) {
    padding: 0 20px;
    }
`;

export default MIMetrics2;