import styled from 'styled-components';

const Button = styled.button`
    border: #D3EEFF;
    background-image: linear-gradient(to bottom, #214EDF, #5478EC);
    background-image: linear-gradient(to bottom, #3a5dd1, #7089db);
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

const NextButton = (props) => (
        <Button>Next Section</Button>
)

export default NextButton;