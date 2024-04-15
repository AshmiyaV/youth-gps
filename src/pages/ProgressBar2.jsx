import React from "react";
import classNames from 'classnames';
import Risk from '../resources/risk.svg';
import styled from "styled-components";
import Abuse from '../resources/abuse.svg';
import HIVIcon from '../resources/hiv.svg';
import Alcohol from '../resources/alcohol.svg';
import Heart from '../resources/heart.svg';

const ProgressBar2 = (props) => {
    const sections = [
        {
            title:"alcohol",
            img: Alcohol,
        },
        {
            title:"intercourse",
            img: Heart,
        },
        {
            title:"risk",
            img: Risk,
        },
        {
            title:"abuse",
            img: Abuse,
        },
        {
            title:"hiv",
            img: HIVIcon,
        }
    ];
    const selected = props.selected ? props.selected : "alcohol";
        return (
            <>
                <Bar>
                  {sections.map((i, index) => {
                   return( <SectionDiv key={i.title}>
                    <ImgWrap className= {classNames({
		'selected': selected === i.title
	})}>
                        <img width="80px" height="80px" src={i.img} />
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
width: 25%;
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
        width: 110px;
        height: 110px;
        border: 3px solid #025dc7;
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

export default ProgressBar2;