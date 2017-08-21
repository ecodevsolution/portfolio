import React, { Component } from 'react';
import Logo from '../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <div>                
                <div className="container" >
                    <div className="navbar-header" >
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" style={{marginLeft: '-15px'}} href=""><img className="logo" src={Logo} alt="" /></a>
                    </div>
                    <nav classID="my-nav" className="navbar-collapse collapse" >
                        <ul className="nav navbar-nav" >
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Works</a>
                            </li>
                            <li>
                                <a href="#skill">Skills</a>
                            </li>
                            <li>
                                <a href="#experience">Resume</a>
                            </li>
                            <li>
                                <a href="#clients">Clients</a>
                            </li>
                            <li>
                                <a href="#process">Process</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>                        
                </div>
            </div>
           
        );
    }
}

export default Header;