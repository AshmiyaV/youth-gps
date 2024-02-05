import React from "react"
import userActive from '../resources/user-active-icon.png'
import vape from '../resources/vape-icon.png'

class ProgressBar extends React.Component {
    render () {
        return (
            <>
                <div className='progressBar' style={{display: 'flex', alignItems: 'center', margin: '40px 0 0 20px'}}>
                    <div style={{width: '5.2%'}}>
                        <img style={{width: '100%', }} src={userActive}></img>
                    </div>
                    <div style={{height: '4px', backgroundColor: 'white', width: '4%'}}></div>
                    <div style={{width: '5%'}}>
                        <img style={{width: '100%', filter: 'brightness(0.5)' }} src={vape}></img>
                    </div>
                    <div style={{height: '4px', backgroundColor: 'white', width: '4%'}}></div>
                </div>
            </>
        )
    }
}

export default ProgressBar;