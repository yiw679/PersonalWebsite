import React, { Component } from 'react'
import './Contact.css'
import GitHubButton from 'react-github-btn'

export class Contact extends Component {
    render() {
        return (
            <div id='contact' className='contact'>
                <h1 className='scrollFadeBottom' data-delay='0s'>Contact</h1>

                <h2 className='scrollFadeTop' data-delay='0.1s'>Email:</h2>

                <h3 className='scrollFadeTop' data-delay='0.2s'>zdwym1997@gmail.com</h3>

                <h2 className='scrollFadeTop' data-delay='0.3s'>LinkedIn:</h2>

                <h3 className='scrollFadeTop' data-delay='0.4s'>https://www.linkedin.com/in/yiming-wang-0999b2187/</h3>

                <h2 className='scrollFadeTop' data-delay='0.3s'>Social:</h2>

                <h3 className='scrollFadeTop' data-delay='0.4s'>WeChat: FrancisYeeming</h3>

                <span className='scrollFadeTop socialBtns' data-delay='0.6s'>
                    <a href="https://twitter.com/FrancisYiming?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="en" data-show-count="false">Follow</a>
                    <GitHubButton href="https://github.com/yiw679/" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Use this template yiw679/Detective-Storyline-GameDev on GitHub">Github</GitHubButton>
                </span>

                <h3 className='scrollFadeTop' data-delay='0.5s'>Quick Note (updated 5/25/2020):</h3>
                <p className='scrollFadeTop' data-delay='0.6s'>My personal website is still under development</p>
                <p className='scrollFadeTop' data-delay='0.7s'>It may appear buggy as I am constantly changing layouts, elements, interactions etc.</p>
            </div>
        )
    }
}

export default Contact
