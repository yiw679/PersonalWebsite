import React, { Component } from 'react'
import Parallax from './Parallax.js'
import Bg from './images/bgi.jpg'
import Scroller from './Scroller.js'


const parallaxStyle =  {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: "url(" + Bg + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    overflow:'hidden'
}

const nameStyle = {
    color: 'F89C00',
    width: '100%',
    fontFamily: 'Electrolize',
    fontWeight: '300',
    textAlign: 'center',
    paddingTop: '40vh',
    position:'absolute'
}

const divLineStyle = {
    height: '5px',
    width: '60%',
    borderWidth: '0',
    backgroundColor: '#CACACA'
}

const subtitleStyle = {
    fontSize: '30px'
}

export class Banner extends Component {
    render() {
        return (
            <div id='top' style={parallaxStyle} className='scrollMark'> 
                <h1 className = 'display-4' style = {nameStyle}>
                    Yiming Wang
                    <hr style={divLineStyle}></hr>
                    <p style= {subtitleStyle}>Software Engineer</p>
                </h1>
                <Parallax/>
                <Scroller/>
            </div>
        )
    }
}

export default Banner

