import React, { Component } from 'react'
import MePic from './images/Me.png'
import Scroller from './Scroller.js'
import './Profile.css'

export class Profile extends Component {
    render() {
        return (
            <div id='profile' className='profile scrollMark'>
                <h2 className='scrollFadeTop' data-delay='0s'>Profile</h2>
                <img src={MePic} className='avatar scrollFadeTop' data-delay='0s' alt='mePic'></img>

                <h3 className='scrollFadeTop' data-delay='0.3s'>Skill Set</h3>

                <h3 className='scrollFadeTop' data-delay='0.4s'>Intro</h3>
                <p className='scrollFadeTop' data-delay='0.5s'>
                I am a software engineer as well as a game enthusiast. 
                I have been quite a gamer for years, and eventually, this brought my curiosity all the way toward game developing.
                </p>

                <span className='scrollFadeTop' data-delay='0.6s'>
                    <a href="https://twitter.com/FrancisYiming?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="en" data-show-count="false">Follow</a>
                </span>
                <Scroller/>
            </div>
        )
    }
}

export default Profile
