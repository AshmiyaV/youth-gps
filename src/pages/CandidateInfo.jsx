import React from "react";
import logo from '../resources/logo-new3.png';
import ProgressBar from "./ProgressBar";
class CandidateInfo extends React.Component {
    state = {};

    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }

    render() {
        return (<>
            <div style={{backgroundColor: '#D3EEFF', minHeight: '100vh',width: '100%'}}>
                <div style={{display: 'grid', gridTemplateColumns: '50% 50%', margin: '10px'}}>
                    <div style={{alignItems: 'left'}}>
                        <img style={{float: 'left', marginLeft: '0',width: '14%'}} src={logo} ></img>
                    </div>
                    <div style={{fontSize: '16px', color: 'black', textAlign: 'right', fontFamily: 'Inder'}}>
                        Hi, Student Name
                    </div>
                </div>
                <ProgressBar />
            </div>
        </>
        );
    }
}

export default CandidateInfo;