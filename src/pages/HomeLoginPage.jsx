import './HomeLoginPage.css'
import styled from "styled-components";
// import vectorImage from '../resources/home-page-vector.png'
import peopleImage from '../resources/homepage-bg.svg';
import logo from '../resources/logo.svg'
// import vectorImage2 from '../resources/home-page-vector2.png'
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// class HomeLoginPage extends React.Component {
    const HomeLoginPage = () => {
        const [id, setId] = React.useState("");
        const [name, setName] = React.useState("");
        const history = useNavigate();
    // state={};

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         isAdmin: false,
    //         name: null,
    //         id: null,
    //         loggedIn: false
    //     };
    // }

   const onNameChangeFunction = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
        // this.state.name = name;
    }

   const onIdChangeFunction = (e) => {
        console.log(e.target.value);
        setId(e.target.value)
        // this.state.id = id;
    }

    const onLogin = () => {
        if(!!name && !!id){
        history("/MI")
        }
        else if(!name){
            toast.error('Please enter your name');
        }
        else{
            toast.error('Please enter your ID');
        }
    };

    // render() {
        return (
                <Home>
                     <ToastContainer position="top-center" closeOnClick />
                    <div className='MainDiv'>
                        <ImageDiv>
                            {/* <img className='vector1' src={vectorImage} alt="Welcome to Youth GPS"></img> */}
                            {/* <img className='peopleImage' src={peopleImage} alt="Welcome to Youth GPS"></img> */}
                        </ImageDiv>
                        <div className="textDiv">
                            <img width="150px" height="60px" src={logo}></img>
                            <Welcome>Welcome to Survey</Welcome>
                            <p>
                                This survey will ask questions about your alcohol and tobacco use and provide you personalized feedback on your drinking. It will take approximately 10 minutes to complete.
                                The survey is conducted by the University of Florida to explore the use of alcohol by young adults. Administrators at the University of Florida will not be made aware of your responses. 
                            </p>
                            <p>
                                In order for us to personalize this survey for you, please enter a name in the box below.Please do not enter your last name.                    
                                </p>
                            <div>
                                <input type='text' onChange={onNameChangeFunction} className='nameInput' placeholder='Your Name' value={name}></input>
                                <input onChange={onIdChangeFunction} className='idInput' placeholder='Your ID' value={id}></input>
                            </div>
                            <div>
                                <LoginBtn onClick={onLogin}>Let's Get Started</LoginBtn>
                            </div>
                            <div>
                                {/* <img className='vector2' src={vectorImage2} alt="Welcome to Youth GPS"></img> */}
                            </div>
                            <Admin>
                                <span>Are you an admin?</span><span className='admin'>Login Here</span>
                            </Admin>
                        </div>
                    </div>
                </Home>
        );
    // }
}

const Home = styled.article`
 text-align: center;
    color: black;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    .MainDiv{
        height: 100%;
        position: relative;
    display: grid; 
    grid-template-columns: 50% 50%; 
    /* overflow: hidden; */
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
    @media only screen and (max-width: 820px) {
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

const ImageDiv = styled.div`
   background-image: url(${peopleImage});
   background-size: cover;
      background-position: center;
    width: 100%; 
    height: 100%; 
    /* overflow: hidden; */
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