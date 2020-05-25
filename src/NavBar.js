import React, { Component } from 'react'
import './navbar.css'

export class NavBar extends Component {

    componentDidMount() {
        window.onscroll = function() {stickNavBar()};

        var header = document.getElementById("navbar");
        var sticky = header.offsetTop;

        function stickNavBar() {

            if(window.pageYOffset > sticky) {
                header.classList.add('navBarScroll');
            }else {
                header.classList.remove('navBarScroll');
            }
        }
    }

    render() {
        return (
            <nav id='navbar' className='navBar'>
                <ul className='navList'>
                    <li className='logo'>
                        <a href='#top' className='navLink'>
                            <span className='navText'>Yiming</span>
                            <svg className="bi bi-chevron-double-right color-pri color-sec"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
</svg>
                        </a>
                    </li>
                    <li className='navItem'>
                        <a href='#profile' className='navLink'>
                            <span className='navText'>Profile</span>
                            <svg className="bi bi-people-circle color-pri color-sec" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
  <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
  <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
</svg>
                        </a>
                    </li>
                    <li className='navItem'>
                        <a href='#project' className='navLink'>
                        <span className='navText'>Projects</span>
                        <svg className="bi bi-collection-fill color-pri color-sec"viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="10" rx="1.5" transform="matrix(1 0 0 -1 0 14.5)"/>
  <path fillRule="evenodd" d="M2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z" clipRule="evenodd"/>
</svg>
                        </a>
                    </li>
                    <li className='navItem'>
                        <a href='#experience' className='navLink'>
                            <span className='navText'>Experiences</span>
                            <svg className="bi bi-briefcase-fill color-pri color-sec" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z" clipRule="evenodd"/>
  <path fillRule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" clipRule="evenodd"/>
</svg>
                        </a>
                    </li>
                    <li className='navItem'>
                        <a href='#contact' className='navLink'>
                        <span className='navText'>Contact</span>
                        <svg className="bi bi-chat-dots-fill color-pri color-sec" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
</svg>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
