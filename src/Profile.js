import React, { Component } from 'react'
import MePic from './images/Me.png'
import './Profile.css'

export class Profile extends Component {
    render() {
        return (
            <div id='profile' className='profile'>
                <h1 className='scrollFadeBottom' data-delay='0s'>Profile</h1>

                <div className="avatarIntro">
                    <img src={MePic} className='avatar scrollFadeTop' data-delay='0s' alt='mePic'></img>
                    <div>
                        <h2 className='scrollFadeTop' data-delay='0.7s'>Intro</h2>
                        <p className='scrollFadeTop' data-delay='0.8s'>
                        I am a software engineer as well as a game enthusiast. 
                        I have been quite a gamer for years, and eventually, this brought my curiosity all the way toward game developing.
                        </p>
                        <p className='scrollFadeTop' data-delay='0.8s'>
                        I enjoy making games and websites that not only appeal to myself but also appeal to audiences,  
                        and I believe that I have a high standard on the products coming out of my hands. 
                        </p>
                    </div>
                </div>

                <h2 className='scrollFadeTop' data-delay='0.3s'>Skills</h2>

                <div className="skillSet scrollFadeTop" data-delay='0.4s'>
                    <h3>Game and Software Development:</h3>
                    <h3><span class="badge badge-info">Java</span></h3>
                    <h3><span class="badge badge-info">C</span></h3>
                    <h3><span class="badge badge-info">C#</span></h3>
                    <h3><span class="badge badge-info">C++</span></h3>
                    <h3><span class="badge badge-info">Unity 3D</span></h3>
                </div>

                <div className="skillSet scrollFadeTop" data-delay='0.5s'>
                    <h3>Web Development:</h3>
                    <h3><span class="badge badge-info">HTML</span></h3>
                    <h3><span class="badge badge-info">JavaScript</span></h3>
                    <h3><span class="badge badge-info">CSS</span></h3>
                    <h3><span class="badge badge-info">React.JS</span></h3>
                    <h3><span class="badge badge-info">Bootstrap</span></h3>
                </div>

                <div className="skillSet scrollFadeTop" data-delay='0.6s'>
                    <h3>Frameworks and Tools:</h3>
                    <h3><span class="badge badge-info">Git</span></h3>
                    <h3><span class="badge badge-info">Google Cloud</span></h3>
                    <h3><span class="badge badge-info">AWS Amplify</span></h3>
                    <h3><span class="badge badge-info">Adobe CC</span></h3>
                    <h3><span class="badge badge-info">Firebase</span></h3>
                </div>

                <div className="skillSet scrollFadeTop" data-delay='0.6s'>
                    <h3>Fundamentals:</h3>
                    <h3><span class="badge badge-info">Data Structures</span></h3>
                    <h3><span class="badge badge-info">Algorithms</span></h3>
                    <h3><span class="badge badge-info">Coding Best Practices</span></h3>
                    <h3><span class="badge badge-info">Math / 3D Math</span></h3>
                </div>
            </div>
        )
    }
}

export default Profile
