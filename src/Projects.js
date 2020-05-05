import React, { Component } from 'react'
import capture1 from './images/InGameCaptures/capture1.png'
import Scroller from './Scroller.js'
import GameDev from './GameDev.js'
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div id='project' className='project scrollMark'>
                <h2 className='scrollFadeBottom' data-delay='0.0s'>Projects</h2>
                <div className='roww'>
                    <div className='coll'>
                        <img src={capture1} className='scrollFadeBottom' alt='gameDevPic' data-toggle="modal" data-target="#gameDevDetail" data-delay='0s'></img>
                        <img src={capture1} className='scrollFadeBottom' alt='gameDevPic' data-toggle="modal" data-target="#gameDevDetail" data-delay='0.2s'></img>
                    </div> 
                    <div className='colr'>
                        <img src={capture1} className='scrollFadeBottom' alt='gameDevPic' data-toggle="modal" data-target="#gameDevDetail" data-delay='0.3s'></img>
                        <img src={capture1} className='scrollFadeBottom' alt='gameDevPic' data-toggle="modal" data-target="#gameDevDetail" data-delay='0.4s'></img>
                    </div> 
                </div>
                <GameDev/>
                <Scroller/>
            </div>
        )
    }
}

export default Projects
