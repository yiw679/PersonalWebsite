import React, { Component } from 'react'
import './Experience.css'

export class Experience extends Component {
    render() {
        return (
            <div id='experience' className='experience'>
                <h1 className='scrollFadeBottom' data-delay='0s'>Experiences</h1>

                <div className='scrollFadeTop expBox' data-delay='0.1s'>
                    <div className='period'>
                        <span>Junior Full-Stack / Game Developer</span>
                        <span>05/2020 – present</span>
                    </div>
                    <div className='des'>
                    <span>Create a web animation platform for Dungeon and Dragon video content creators, which allows them to
easily turn their characters alive and their game sessions into animated videos.</span>
                    </div>
                </div>

                <div className='scrollFadeTop expBox' data-delay='0.2s'>
                    <div className='period'>
                        <span>Game Developer - Detective Storyline RPG Game</span>
                        <span>01/2020 – 03/2020</span>
                    </div>
                    <div className='des'>
                    <span>Finished implementing a complete RPG game system for various needs and finished the first level design</span>
                    <span>Systems Implemented: Global mouse clicks handling system, NPC AI system, Inventory system, etc.</span>
                    <span>3D game asset modeling, texturing, and humanoid animations etc.</span>
                    </div>
                </div>


                <div className='scrollFadeTop expBox' data-delay='0.3s'>
                    <div className='period'>
                        <span>Full-Stack Web Developer</span>
                        <span>03/2019 – 06/2019</span>
                    </div>

                    <div className='des'>
                        <span>Awarded the 3rd team over 15 teams, and personally awarded the MVP badge in our team. </span>
                        <span>Developed web services, built custom web components, and ported components from online libraries to
                        improve performance, flexibility, and functionalities as needed by customers</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Experience
