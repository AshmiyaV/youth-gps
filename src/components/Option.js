import styled from 'styled-components'; 

const TextField = styled.p`
    padding: 2px;
    margin: auto 10px;
    font-size: 14px;
    color: white;
    text-align: left;
`


const Option = (props) => {
  return (
    <div style={{display: props.show ? 'block' : 'none', width: '100%', height: '30px'}}>
        <TextField>{props.value}</TextField>
    </div>
  );
};

export default Option;