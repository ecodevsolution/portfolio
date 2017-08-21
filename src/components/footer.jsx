import React, { Component } from 'react';
import Logo from '../assets/images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div>
               <footer className="text-center">
                    <div className="container text-center item_top" style={{opacity: '1',top: '0px'}}>
                        <img className="footer-logo" src={Logo} alt="footer logo" /><br /> 
                        &copy; Copyright 2017. All Rights Reserved.
                    </div>
                </footer>
                 
            </div>
        );
    }
}

export default Footer;