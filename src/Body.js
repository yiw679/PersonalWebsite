import React, { Component } from 'react'
import NavBar from './NavBar.js'
import Profile from './Profile.js'
import Projects from './Projects.js'
import './body.css'

export class Body extends Component {

    componentDidMount() {
        const scrollFadeTops = document.querySelectorAll('.scrollFadeTop');

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = 
                        `fadeFromTop 1s ${entry.target.dataset.delay} forwards ease`;
                } else {
                    entry.target.style.animation = `none`;
                }
            })
        })

        scrollFadeTops.forEach(obj => {
            obj.style.opacity = 0;
            observer.observe(obj);
        })

        const scrollFadeBottoms = document.querySelectorAll('.scrollFadeBottom');

        var observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = 
                        `fadeFromBottom 1s ${entry.target.dataset.delay} forwards ease`;
                } else {
                    entry.target.style.animation = `none`;
                }
            })
        })

        scrollFadeBottoms.forEach(obj => {
            obj.style.opacity = 0;
            observer1.observe(obj);
        })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <main>
                    <Profile/>
                    <Projects/>
                    <Profile/>
                </main>
            </div>
        )
    }
}

export default Body


