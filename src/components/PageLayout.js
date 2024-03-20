import React from "react";
import colors from "../constants";
import ProgressBar from "./ProgressBar";
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    background-color: ${colors.background};
    min-height: 100vh;
    width: 100%;
`

const MainDiv = styled.div`
    margin: 0 auto;
    background-color: white;
    width: 70%;
    margin: 30px auto;
    border-radius: 4px; 
    color: black; 
    padding: 20px;
    position: relative;
    z-index: 1;

    @media(max-width: 992px){
        width: 80%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }

   
`

const PageLayout = (props) => (
    <BackgroundDiv>
        <ProgressBar />
            <MainDiv>
                {props.children}            
            </MainDiv>        
    </BackgroundDiv>
)

export default PageLayout;