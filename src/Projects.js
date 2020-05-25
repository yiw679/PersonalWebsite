import React, { Component } from 'react'
import capture1 from './images/InGameCaptures/capture1.png'
import GameDev from './GameDev.js'
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div id='project' className='project scrollMark'>
                <h1 className='scrollFadeBottom' data-delay='0.0s'>Projects</h1>
                <img src={capture1} className='scrollFadeTop projectIcon' alt='gameDevPic' data-toggle="modal" data-target="#gameDevDetail" data-delay='0.1s'></img>
                <GameDev/>
                <h2 className='scrollFadeTop moreText' data-delay='0.2s'>More Wait To Be Added</h2>
            </div>
        )
    }
}

export default Projects
