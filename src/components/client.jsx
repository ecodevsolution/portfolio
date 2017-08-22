import React, { Component } from 'react';

import emerg from '../assets/images/clients/emrg.png';
import background from '../assets/images/clients.png';

class Client extends Component {
    render() {

        var  a ={
            backgroundImage : `url(${background})`            
        }
        return (
            <div>
                 <section id="clients" className="clients parallax" style={a}>
                    <div className="parallax-overlay">
                        <div className="container">
                            <div className="row">                                
                                <div className="section-title item_bottom text-center">
                                    <div>
                                        <span className="fa fa-users fa-2x"></span>
                                    </div>
                                    <h1 className="white">My <span>Clients</span></h1>
                                </div>                                
                            </div>

                            <div className="row new-line item_fade_in">
                                <h4 className="white">Some of <strong>my clients</strong></h4>
                                <div className="carrousel-container">
                                   
                                    <div id="carousel_inner">
                                        <ul className="clearfix" id="carousel_ul">
                                            <li><span><img src={emerg} alt="emerg" /></span></li>
                                        </ul>
                                    </div>
                                    
                                    
                                    <input type="hidden" id="hidden_auto_slide_seconds" value="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Client;