import React, { Component } from 'react';

import agency from '../assets/images/portfolio/agency.PNG';
import adi from '../assets/images/portfolio/adi.PNG';
import rina from '../assets/images/portfolio/rina1.PNG';
import shoper from '../assets/images/portfolio/shoper.PNG';
import kitchen from '../assets/images/portfolio/kitchen.PNG';
import stock from '../assets/images/portfolio/stock1.PNG';
import asisi from '../assets/images/portfolio/asisi.png';
import coco from '../assets/images/portfolio/coco keratin treatment.png';

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
                        
                        <div id="portfolio-wrap" tabIndex="1">
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
                                    
          
                                   <article className="website">                                       
                                        <img src={adi} alt="adinugraha.my.id"/>
                                        <div className="overlay">
                                            <div className="item-info">
                                                <i className="fa fa-picture-o"></i>
                                                <h3>Adinugraha</h3>
                                                <span>Portfolio Website</span>
                                            </div>
                                        </div>                                                                                       
                                    </article>
                                    
                                    <article className="website">                                       
                                         <img src={rina} alt="rinaramadhan.com"/>
                                         <div className="overlay">
                                             <div className="item-info">
                                                 <i className="fa fa-picture-o"></i>
                                                 <h3>Rinaramadhan</h3>
                                                 <span>Portfolio Website and Blog</span>
                                             </div>
                                         </div>                                                                                       
                                    </article>

                                    <article className="website">                                        
                                        <img src={kitchen} alt="kitchennetwork.co.id"/>
                                        <div className="overlay">
                                            <div className="item-info">
                                                <i className="fa fa-picture-o"></i>
                                                <h3>KitchenNetwork</h3>
                                                <span>Website Application</span>
                                            </div>
                                        </div>                                                                                        
                                    </article>

                                    <article className="website">                                        
                                        <img src={shoper} alt="preview.shoper.co.id"/>
                                        <div className="overlay">
                                            <div className="item-info">
                                               <i className="fa fa-picture-o"></i>
                                                <h3>Shopper E-Commerce</h3>
                                                <span>Web E-commerce</span>
                                            </div>
                                        </div>                                                                                    
                                    </article>
                                    
                                     <article className="desktop">                                        
                                        <img src={asisi} alt="asisi"/>
                                        <div className="overlay">
                                            <div className="item-info">
                                                <i className="fa fa-camera"></i>
                                                <h3>Balkesmas ASISI</h3>
                                                <span>Desktop Application</span>
                                            </div>
                                        </div>                                                                                    
                                    </article>

                                    <article className="desktop">                                        
                                        <img src={coco} alt="Coco Indah Jaya"/>
                                        <div className="overlay">
                                            <div className="item-info">
                                                <i className="fa fa-camera"></i>
                                                <h3>CoCo Indah Jaya</h3>
                                                <span>Desktop Application</span>
                                            </div>
                                        </div>                                                                                    
                                    </article>
                                    

                                    <article className="website">                                    
                                        <img src={agency} alt="portal.agencyjakarta.co.id"/>
                                        <div className="overlay">
                                            <div className="item-info">
                                                <i className="fa fa-picture-o"></i>
                                                <h3>AgencyJakarta</h3>
                                                <span>Website Application</span>
                                            </div>
                                        </div>                                                                                    
                                    </article>

                                    <article className="website">                                    
                                        <img src={stock} alt="stock.shoper.co.id" />
                                        <div className="overlay">
                                            <div className="item-info">
                                                <i className="fa fa-picture-o"></i>
                                                <h3>Beebow Point of Sales</h3>
                                                <span>Website Application</span>
                                            </div>
                                        </div>                                                                                        
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