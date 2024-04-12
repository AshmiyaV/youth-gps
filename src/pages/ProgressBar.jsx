import React from "react";
import classNames from 'classnames';
import User from '../resources/user.svg';
import CheckList from '../resources/checklist.svg';
import styled from "styled-components";
import Vape from '../resources/vape.svg';
import DrugsIcon from '../resources/drugsIcon.svg';
import Alcohol from '../resources/alcohol.svg';
import BAC from '../resources/bac.svg';

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
                <Bar>
                  {sections.map((i, index) => {
                   return( <SectionDiv key={i.title}>
                    <ImgWrap className= {classNames({
		'selected': selected === i.title
	})}>
                        <img src={i.img} />
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
img{
    width: 80px;
    height: 80px;
}
@media only screen and (max-width: 700px) {
  /* For everything bigger than 768px */
  img{
    width: 35px;
    height: 35px;
  }
}
@media only screen and (min-width: 701px) and (max-width: 1150px) {
  /* For everything bigger than 768px */
  img{
    width: 65px;
    height: 65px;
  }
}
`;

const SectionDiv = styled.div`
display: flex;
align-items: center;
position: relative;
width: 20%;
.selected{
    img{
        width: 100px;
        height: 100px;
        border: 3px solid #025dc7;
        box-shadow: 0px 0px 10px 3px grey;
        border-radius: 50%;
        /* margin-right: 10%; */
        margin-left: -15%;
    }
    @media only screen and (max-width: 700px) {
  /* For everything bigger than 768px */
  img{
    width: 45px;
    height: 45px;
  }
}
    @media only screen and (min-width: 701px) and (max-width: 1150px) {
  /* For everything bigger than 768px */
  img{
    width: 75px;
    height: 75px;
  }
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
    @media only screen and (max-width: 700px) {
  /* For everything bigger than 768px */
  height: 4px;
}
`;

export default ProgressBar;