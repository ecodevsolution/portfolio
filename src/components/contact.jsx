import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact" className="section-content bg2">
                    <div className="container">
                        <div className="row">                            
                            <div className="section-title item_bottom text-center">
                                <div>
                                    <span className="fa fa-envelope fa-2x"></span>
                                </div>
                                <h1>Get in <span>touch</span></h1>
                            </div>                            
                        </div>
                        <div className="row item_fade_in">
                            <div className="col-md-6 col-md-offset-3 text-center contact-block">                                
                                <i className="fa fa-map-marker fa-3x"></i>                                
                                <div className="social-icon">
                                    <a className="https://twitter.com/madhinugraha"><i className="fa fa-twitter-square fa-3x"></i></a>
                                    <a className="http://id.linkedin.com/in/madinugraha/"><i className="fa fa-linkedin-square fa-3x"></i></a>
                                </div>                                
                            </div>
                        </div>                        
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;