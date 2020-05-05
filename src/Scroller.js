import React, { Component } from 'react'
import './scroller.css'

export class Scroller extends Component {
    scrollUp() {
        var marks = document.querySelectorAll('.scrollMark');

        var closestOne = marks[0];

        var i;
        for(i = 1; i < marks.length; i ++) {
            var dis = marks[i].getBoundingClientRect().top;
            if(dis < 0 && Math.abs(dis) < Math.abs(closestOne.getBoundingClientRect().top)) {
                closestOne = marks[i];
            }
        }

        window.scrollBy(0, -Math.abs(closestOne.getBoundingClientRect().top));
    }

    scrollDown() {
        var marks = document.querySelectorAll('.scrollMark');

        var closestOne = marks[0];

        var i;
        for(i = 1; i < marks.length; i ++) {
            var dis = marks[i].getBoundingClientRect().top;
            if(dis > 0 && Math.abs(dis) < Math.abs(closestOne.getBoundingClientRect().top)) {
                closestOne = marks[i];
            }
        }

        window.scrollBy(0, Math.abs(closestOne.getBoundingClientRect().top));
    }

    render() {
        return (
            <span className='holder'>
                <svg onClick={this.scrollUp} className="bi bi-chevron-double-up scrollFadeBottom svgUp" data-delay='0s' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 3.707 2.354 9.354a.5.5 0 11-.708-.708l6-6z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 7.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd"/>
                </svg>

                <svg onClick={this.scrollDown} className="bi bi-chevron-double-down scrollFadeTop svgDown" data-delay='0s' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"/>
                </svg>
            </span>
        )
    }
}

export default Scroller
