import React, { Component } from 'react';

import tumb from '../assets/images/portfolio/thumb1.jpg';
import tumb2 from '../assets/images/portfolio/thumb2.jpg';

class Works extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="section-content bg3">
                    <div className="container">
                        <div className="row">                                
                            <div className="section-title item_bottom text-center">
                                <div>
                                    <span className="fa fa-briefcase fa-2x"></span>
                                </div>
                                <h1 className="white">My <span>Works</span></h1>
                            </div>                                
                        </div>
                        <div className="portfolio-top"></div>
                        
                        <div id="portfolio-wrap" tabindex="1">
                            <div id="portfolio-page">
                                <div id="portfolio-content">
                                    <div className="container">
                                        <div className="row">
                                            <div id="protfolio-control">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4 col-xs-4">
                                                        <a href="" id="prev-project" title="Previous Project"><i className="fa fa-arrow-left"></i></a>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                                                        <a href="" id="close-project" title="Close Project"><i className="fa fa-times"></i></a>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                                                        <a href="" id="next-project" title="Next Project"><i className="fa fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="portfolio-ajax"></div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>                            
                        </div>                      

                        <div id="portfolio-filter">
                            <div className="row text-center">
                                <div className="col-md-12">                                    
                                    <ul className="portfolio-filter-list white">
                                        <li>
                                            <a className="active" href="" data-cat="*">ALL</a>
                                        </li>
                                        <li>
                                            <a href="" data-cat="website">Website App</a>
                                        </li>
                                        <li>
                                            <a href="" data-cat="desktop">Desktop App</a>
                                        </li>
                                    </ul>                                    
                                </div>                                
                            </div>                            
                        </div>
                    </div>       

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="portfolio-items" className="portfolio-items item_fade_in">
                                    
          
                                    <article className="desktop">
                                            <a href="#!projects/project-single.html">
                                                <img src={tumb} alt=""/>
                                                <div className="overlay">
                                                    <div className="item-info">
                                                        <i className="fa fa-film"></i>
                                                        <h3>Project with video</h3>
                                                        <span>Photo / Web</span>
                                                    </div>
                                                </div>                                            
                                            </a>
                                    </article>

                                    <article className="website">
                                        <a href="#!projects/project-single.html">
                                            <img src={tumb2} alt=""/>
                                            <div className="overlay">
                                                <div className="item-info">
                                                    <i className="fa fa-film"></i>
                                                    <h3>Project with video</h3>
                                                    <span>Photo / Web</span>
                                                </div>
                                            </div>                                            
                                        </a>
                                    </article>

                                    
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