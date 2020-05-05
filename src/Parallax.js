import React, { Component } from 'react'
import './parallax.css'

export class Parallax extends Component {

    moveIt(e){
        let width = window.innerWidth / 2;
        let height = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let pos1 = `${10 - (mouseX - width) * 0.01}% ${60 - (mouseY - height) * 0.01}%`;
        let pos2 = `${5 - (mouseX - width) * 0.03}% ${30 - (mouseY - height) * 0.03}%`;
        let pos3 = `${90 - (mouseX - width) * 0.02}% ${90 - (mouseY - height) * 0.02}%`;
        let pos4 = `${100 - (mouseX - width) * 0.012}% ${40 - (mouseY - height) * 0.012}%`;
        let pos5 = `${80 - (mouseX - width) * 0.028}% ${15 - (mouseY - height) * 0.028}%`;
        let pos6 = `${50 - (mouseX - width) * 0.007}% ${80 - (mouseY - height) * 0.007}%`;
        let pos7 = `${40 - (mouseX - width) * 0.042}% ${10 - (mouseY - height) * 0.042}%`;
        let pos8 = `${15 - (mouseX - width) * 0.012}% ${90 - (mouseY - height) * 0.012}%`;

        let x = `${pos1}, ${pos2}, ${pos3}, ${pos4}, ${pos5}, ${pos6}, ${pos7}, ${pos8}`

        e.target.style.backgroundPosition = x;
    }

    render() {
        return (
            <div className='parallax' onMouseMove={this.moveIt}></div>
        )
    }
}

export default Parallax
