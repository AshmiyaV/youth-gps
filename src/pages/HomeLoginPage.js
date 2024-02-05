import './HomeLoginPage.css'
import vectorImage from '../resources/home-page-vector.png'
import peopleImage from '../resources/People together background v image 2.png'
import logo from '../resources/logo-new.png'
import vectorImage2 from '../resources/home-page-vector2.png'
import React from 'react'

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
            <>
                <div className="Home">
                    <div className='MainDiv'>
                        <div className='images'>
                            <img className='vector1' src={vectorImage} alt="Welcome to Youth GPS"></img>
                            <img className='peopleImage' src={peopleImage} alt="Welcome to Youth GPS"></img>
                        </div>
                        <div className="textDiv">
                            <img className='logoImage' src={logo}></img>
                            <div style={{fontSize: '30px'}}>Welcome to Survey</div>
                            <div style={{fontFamily: 'Inder', fontSize: '10px', margin: "auto 20px 20px 20px"}}>
                                This survey will ask questions about your alcohol and tobacco use and provide you personalized feedback on your drinking. It will take approximately 10 minutes to complete.
                                The survey is conducted by the University of Florida to explore the use of alcohol by young adults. Administrators at the University of Florida will not be made aware of your responses. 
                            </div>
                            <div style={{fontFamily: 'Inder', fontSize: '10px', margin: "auto 20px"}}>
                                In order for us to personalize this survey for you, please enter a name in the box below.Please do not enter your last name.                    </div>
                            <div>
                                <input type='text' onChange={(e)=>this.onNameChangeFunction(e.target.value)} className='nameInput' placeholder='Your Name' value={this.state.name}></input>
                                <input onChange={(e)=>this.onIdChangeFunction(e.target.value)} className='idInput' placeholder='Your ID' value={this.state.id}></input>
                            </div>
                            <div>
                                <button className='loginButton'>Let's Get Started</button>
                            </div>
                            <div>
                                <img className='vector2' src={vectorImage2} alt="Welcome to Youth GPS"></img>
                            </div>
                            <div style={{fontFamily: 'Inder', fontSize: '10px', margin: "auto"}}>
                                Admin?<span style={{color: 'blue'}}> Login Here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default HomeLoginPage;