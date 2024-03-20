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
`

const NextButton = (props) => (
    <div>
    <Button>Next Section</Button>
    </div>
)

export default NextButton;