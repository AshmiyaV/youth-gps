import React from "react"
import userActive from '../resources/user-active-icon.png'
import vape from '../resources/vape-icon.png'
import logo from '../resources/logo-new3.png';

class ProgressBar extends React.Component {
    render () {
        return (
            <>
                <div>
                    <div style={{display: 'grid', gridTemplateColumns: '50% 50%', margin: '10px'}}>
                        <div style={{alignItems: 'left'}}>
                            <img style={{float: 'left', marginLeft: '0',width: '14%'}} src={logo} ></img>
                        </div>
                        <div style={{fontSize: '16px', color: 'black', textAlign: 'right', fontFamily: 'Inder'}}>
                            Hi, Student Name
                        </div>
                    </div>
                    <div className='progressBar' style={{display: 'flex', alignItems: 'center', margin: '40px auto', justifyContent: 'center'}}>
                    <div style={{width: '5.2%'}}>
                        <img style={{width: '100%', }} src={userActive}></img>
                    </div>
                    <div style={{height: '4px', backgroundColor: 'white', width: '4%'}}></div>
                    <div style={{width: '5%'}}>
                        <img style={{width: '100%', filter: 'brightness(0.5)' }} src={vape}></img>
                    </div>
                    <div style={{height: '4px', backgroundColor: 'white', width: '4%'}}></div>
                </div>
                </div>
            </>
        )
    }
}

export default ProgressBar;