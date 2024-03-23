import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import VapeView from "./VapeView";
import DrugsView from "./DrugsView";
import BACView from "./BACView";
import RightArrow from '../resources/right-arrow.svg';

const MIView1 = () => {
    const components = [
        {
            title:"vape",
            view: <VapeView />,
        },
        {
            title:"drugs",
            view: <DrugsView />,
        },
        {
            title:"bac",
            view: <BACView />,
        },
        // {
        //     title:"drugs",
        //     img: DrugsIcon,
        // },
        // {
        //     title:"alcohol",
        //     img: Alcohol,
        // },
        // {
        //     title:"bac",
        //     img: BAC,
        // }
    ];
    const [index, setIndex] = React.useState(0);
    const [selected, setSelected] = React.useState("vape");
    const onSectionChange = () => {
        setSelected(components[index+1].title);
        setIndex(index+1);
    };
    return(
        <VapeWrap>
            <Content>     
            <ProgressBarWrap>
               <ProgressBar selected={selected} />
            </ProgressBarWrap>
            <Form>
                {components.filter((i) => i.title === selected)[0]?.view}
                <ButtonWrap>
                <Button onClick={onSectionChange}>Next <img src={RightArrow} height={30} /></Button>
            </ButtonWrap>
            </Form>
            </Content> 
        </VapeWrap>
    );
}

const VapeWrap = styled.article`
width: 100%;
overflow-y: scroll;
height: -webkit-fill-available;
background-color: #D3EEFF;
display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 0 0 40px;
    .rc-slider{
        /* width: 70%; */
    }
    .rc-slider-handle{
        &:focus{ 
              /* border: none !important; */
           outline: black;
           /* box-shadow: none; */
        }
            /* background-color: black; */
    }
    h2{
        /* font-size: 1em; */
        font-size: 22px;
        margin: 0;
        /* margin-left: 35px; */
    }
    h3{
        /* font-size: 0.8em; */
        font-size: 18px;
        margin: 0;
        /* padding: 5px 0; */
        /* line-height: 0; */
    }
    p{
        /* font-size: 0.6em; */
        font-size: 14px;
        margin: 0;
        /* padding: 5px 0; */
        line-height: 25px;
    }
`;
const ProgressBarWrap = styled.section`
display: flex;
    justify-content: center;
    margin: 50px 0 20px 0;
    width: 100%;
`;
export const Content = styled.div`
display: flex;
    align-items: center;
    flex-direction: column;
`;
const Form = styled.section`
width: 80%;
position: relative;
background-color: white;
margin: 20px 100px;
padding: 30px;
@media only screen and (max-width: 700px) {
      width: 85%;
      margin: 0px;
      padding: 10px 15px;
    }
`;
const Button = styled.button`
background-color: #333ADB;
cursor: pointer;
border: none;
border-radius: 25px;
color: white;
display: flex;
    align-items: center;
    img{
        margin-left: 10px;
    }
    padding: 0px 20px;
    @media only screen and (max-width: 700px) {
font-size: 10px;
    height: 22px !important;
    padding: 0px 10px;
    img{
        height: 17px;
        margin-left: 5px;
    }
}
`;
const ButtonWrap = styled.div`
position: absolute;
bottom: -50px;
right: -5px;
`;

export default MIView1;