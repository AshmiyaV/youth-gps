import './HomeLoginPage.css'
import styled from "styled-components";
// import vectorImage from '../resources/home-page-vector.png'
import peopleImage from '../resources/homepage-bg.svg'
import logo from '../resources/logo-new.png'
// import vectorImage2 from '../resources/home-page-vector2.png'
import * as React from 'react'

class HomeLoginPage extends React.Component {

    state={};

    constructor(props) {
        super(props);
        this.state={
            isAdmin: false,
            name: null,
            id: null,
            loggedIn: false
        };
    }

    onNameChangeFunction = (name)=> {
        console.log(name);
        this.state.name = name;
    }

    onIdChangeFunction = (id)=> {
        console.log(id);
        this.state.id = id;
    }

    render() {
        return (
                <Home>
                    <div className='MainDiv'>
                        <div className='images'>
                            {/* <img className='vector1' src={vectorImage} alt="Welcome to Youth GPS"></img> */}
                            <img className='peopleImage' src={peopleImage} alt="Welcome to Youth GPS"></img>
                        </div>
                        <div className="textDiv">
                            <img width="50px" height="50px" src={logo}></img>
                            <Welcome>Welcome to Survey</Welcome>
                            <p>
                                This survey will ask questions about your alcohol and tobacco use and provide you personalized feedback on your drinking. It will take approximately 10 minutes to complete.
                                The survey is conducted by the University of Florida to explore the use of alcohol by young adults. Administrators at the University of Florida will not be made aware of your responses. 
                            </p>
                            <p>
                                In order for us to personalize this survey for you, please enter a name in the box below.Please do not enter your last name.                    
                                </p>
                            <div>
                                <input type='text' onChange={(e)=>this.onNameChangeFunction(e.target.value)} className='nameInput' placeholder='Your Name' value={this.state.name}></input>
                                <input onChange={(e)=>this.onIdChangeFunction(e.target.value)} className='idInput' placeholder='Your ID' value={this.state.id}></input>
                            </div>
                            <div>
                                <LoginBtn>Let's Get Started</LoginBtn>
                            </div>
                            <div>
                                {/* <img className='vector2' src={vectorImage2} alt="Welcome to Youth GPS"></img> */}
                            </div>
                            <Admin>
                                <span>Are you an admin?</span><span className='admin'> Login Here</span>
                            </Admin>
                        </div>
                    </div>
                </Home>
        );
    }
}

const Home = styled.article`
 text-align: center;
    color: black;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    .MainDiv{
    display: grid; 
    grid-template-columns: 50% 50%; 
    overflow: hidden;
    >div:nth-child(2){
margin: 20px;
    }
}
    .peopleImage{
    /* position: absolute; */
    float: left;
    width: 100%;
    /* height: 100%; */
    /* top: 10px; */
    /* left: 20px; */
}
    p{
        font-size: 14px;
    }
    img{
    overflow:hidden; }
    @media only screen and (max-width: 768px) {
  /* For everything bigger than 768px */
  .peopleImage{
    display: none;
  }
  .MainDiv{
    grid-template-columns: 0 100%; 
  }
}
`;

const Welcome = styled.h2`
margin: 0;
`;

const LoginBtn = styled.button`
font-size: 12px;
margin: 10px;
height: 30px;
padding: 0px 25px 0px;
border: none;
    border-radius: 25px;
    background-color: #333ADB;
    color: white;
    cursor: pointer;
`;

const Admin = styled.section`
font-size: 12px;
.admin{
    color: #333ADB;
    cursor: pointer;
}
`;

export default HomeLoginPage;