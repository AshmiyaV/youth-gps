import React from "react";
import classNames from 'classnames';
import User from '../resources/user.svg';
import CheckList from '../resources/checklist.svg';
import styled from "styled-components";
import Vape from '../resources/vape.svg';
import DrugsIcon from '../resources/drugsIcon.svg';
import Alcohol from '../resources/alcohol.svg';
import BAC from '../resources/bac.svg';
import logo from '../resources/logo-new3.png';


const ProgressBar = (props) => {
    const sections = [
        {
            title:"basic_info",
            img: User,
        },
        {
            title:"checklist",
            img: CheckList,
        },
        {
            title:"vape",
            img: Vape,
        },
        {
            title:"drugs",
            img: DrugsIcon,
        },
        {
            title:"alcohol",
            img: Alcohol,
        },
        {
            title:"bac",
            img: BAC,
        }
    ];
    const selected = props.selected ? props.selected : "vape";
        return (
            <>
            <div style={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
                    <div style={{alignItems: 'left'}}>
                        <img style={{float: 'left', marginLeft: '0',width: '14%'}} src={logo} ></img>
                    </div>
                    <div style={{fontSize: '16px', color: 'black', textAlign: 'right', fontFamily: 'Inder'}}>
                        Hi, Student Name
                    </div>
                </div>
                <Bar>
                  {sections.map((i, index) => {
                   return( <SectionDiv key={i.title}>
                    <ImgWrap className= {classNames({
		'selected': selected === i.title
	})}>
                        <img width="60px" height="60px" src={i.img} />
                        </ImgWrap>
                        {index !== sections.length - 1 && <Line />}
                    </SectionDiv>)
                  })}
                </Bar>
            </>
        )
}

const Bar = styled.section`
display: flex;
width: 85%;
justify-content: space-between;
margin: auto;
/* :nth-last-child(){ */
    div:last-child{
        width: fit-content;
        ::after{
        display: none !important;
        }
    }
/* } */
`;

const ImgWrap = styled.section`
margin-left: -1px;
z-index: 1;
margin-top: 5px;
/* ::after{
    content: '';
  position: absolute;
  width: 6px;
  background-color: black;
  width: 50px;
  height: 10px;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
} */
`;

const SectionDiv = styled.div`
display: flex;
align-items: center;
position: relative;
width: 20%;
/* ::after{
    content: '';
  position: absolute;
  width: 80%;
  height: 10px;
  background-color: white;
  top: 50px;
   bottom: 0;
  margin-left: -1px;
  z-index: -1;
} */
/* span{
    display: block;
    width: 100px;
    height: 10px;
    background-color: white;
    margin-left: -1px;
} */
.selected{
    img{
        width: 80px;
        height: 80px;
        border: 3px solid #333ADB;
        box-shadow: 0px 0px 10px 3px grey;
        border-radius: 50%;
        /* margin-right: 10%; */
        margin-left: -15%;
        /* ::after{
    content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
} */
    }
}
`;
const Line = styled.span`
    height: 10px;
    display: block;
    background-color: white;
    margin-left: -20px;
    margin-right: -5px;
    width: 100%;
    /* padding: -6px; */
    margin-top: -10px;
`;

export default ProgressBar;