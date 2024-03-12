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
                {/* <div className='progressBar' style={{display: 'flex', alignItems: 'center', margin: '40px 0 0 20px'}}> */}

                    {/* <div style={{width: '5.2%'}}>
                        <img style={{width: '100%', }} src={User}></img>
                    </div>
                    <div style={{height: '4px', backgroundColor: 'white', width: '4%'}}></div>
                    <div style={{width: '5%'}}>
                        <img style={{width: '100%', filter: 'brightness(0.5)' }} src={vape}></img>
                    </div>
                    <div style={{height: '4px', backgroundColor: 'white', width: '4%'}}></div> */}
                {/* </div> */}
                <Bar>
                  {sections.map((i) => {
                   return( <SectionDiv key={i.title}>
                    <ImgWrap className= {classNames({
		'selected': selected === i.title
	})}>
                        <img width="80px" height="80px" src={i.img} />
                        </ImgWrap>
                        <span />
                    </SectionDiv>)
                  })}
                </Bar>
            </>
        )
}

const Bar = styled.section`
display: flex;
width: 80%;
justify-content: space-between;
/* :nth-last-child(){ */
    div:last-child{
        width: 6%;
        ::after{
        display: none !important;
        }
    }
/* } */
`;

const ImgWrap = styled.section`
margin-left: -1px;
z-index: 1;
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
::after{
    content: '';
  position: absolute;
  width: 80%;
  height: 10px;
  background-color: white;
  top: 35px;
  /* bottom: 0; */
  margin-left: -1px;
  z-index: -1;
}
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
        border: 3px solid #333ADB;
        box-shadow: 0px 0px 10px 3px grey;
        border-radius: 50%;
        ::after{
    content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
    }
}
`;

export default ProgressBar;