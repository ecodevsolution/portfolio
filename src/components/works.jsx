import React, { Component } from 'react';
import Listwork from './listwork';

class Works extends Component {
    render() {

        var style = {
            opacity: '1',
            bottom: '0px'
        };

        var portfolio = {
            position: 'relative',
            overflow: 'hidden',
            height: '575.063px',
            opacity: '1',
            right: '0px'
        };
        
        var btm = {
            paddingBottom: '0px'
        };

        return (
            <div>
                <section classID="portfolio" className="section-content bg3" style={btm}>
                    <div className="container">
                        <div className="row">                            
                            <div className="section-title item_bottom text-center" style={style}>
                                <div>
                                    <span className="fa fa-briefcase fa-2x"></span>
                                </div>
                                <h1 className="white">My <span>Works</span></h1>
                            </div>                            
                        </div>

                         <div classID="portfolio-filter">
                            <div className="row text-center">
                                <div className="col-md-12">                            
                                    <ul className="portfolio-filter-list white">
                                        <li>
                                            <a className="active" href="" data-cat="*">ALL</a>
                                        </li>
                                        <li>
                                            <a href="" data-cat="web">Website or Web Application</a>
                                        </li>
                                        <li>
                                            <a href="" data-cat="desktop">Desktop Application</a>
                                        </li>
                                    </ul>                                    
                                </div>                                
                            </div>                            
                        </div>                
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div classID="portfolio-items" className="portfolio-items item_fade_in" style={portfolio}>


                                    <Listwork />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Works;