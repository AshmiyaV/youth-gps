import styled from 'styled-components';
import React, { useRef } from "react";

const Button = styled.button`
    border: #D3EEFF;
    background-image: ${props => props.enabled ? 'linear-gradient(to bottom, #214EDF, #5478EC)' : 'grey'};
    background-image: ${props => props.enabled ? 'linear-gradient(to bottom, #3a5dd1, #7089db)' : 'grey'};
    height: 40px;
    width: 160px;
    text-align: center;
    border-radius: 30px;
    color: #FFF;
    font-size: 12px;
    font-family: Inknut Antiqua;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const NextButton = (props) => {
    const [enableButton, setEnableButton] = React.useState(props.enabled);

    React.useEffect(() => {
        setEnableButton(props.enabled);
        } , [props.enabled]
    )
    console.log("enableButton", enableButton);
    return <Button enabled={enableButton} onClick={props.goToNextSextion}>Next Section</Button>
}

export default NextButton;