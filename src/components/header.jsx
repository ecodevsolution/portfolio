import React, { Component } from 'react';
import Logo from '../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <div>             
                 <div className="navbar navbar-transparent navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href=""><img className="logo" src={Logo} alt="" /></a>
                        </div>
                        <nav id="my-nav" className="navbar-collapse collapse" roles="navigation">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="">
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
            </div>

           
           
        );
    }
}

export default Header;