import React, { Component } from 'react';

class Resume extends Component {
    render() {

        return (
             <div>
                <div className="fullwidth-section bg-callout">
                    <div className="container">
                        <div className="col-md-12 text-center item_bottom">
                            <h1 className="white padBottom killMargin">I am available for <strong>Freelancer</strong></h1>
                            <a href="#contact" className="scroll btn btn-trans btn-border-w btn-large">Hire Me</a>&nbsp;&nbsp;<a className="btn btn-primary btn-lg" href="images/resume/Curiculum-Vitae.pdf"><i className="fa fa-download"></i> Download Resume</a>
                        </div>
                    </div>
                </div>

                <section id="experience" className="section-content bg2">
                    <div className="container">
                        <div className="row">                            
                            <div className="section-title item_bottom text-center">
                                <div>
                                    <span className="fa fa-book fa-2x"></span>
                                </div>
                                <h1>My <span>Resume</span></h1>
                            </div>                        
                        </div>
                        <div className="row">
                            <ul className="timeline list-unstyled">                                
                                <li className="title"><h4>Such as</h4></li>
                                <li className="note item_right">
                                    <h4>Coco Indah Jaya</h4>
                                    <h5>Dekstop Application Developers</h5>
                                    <p className="desc">
                                        Coco Indah jaya is a company engaged in the field of wholesale salon equipment. The system create for help a company in sales order and checking item in the warehouse.
                                    </p>
                                    <span className="date">Jan 2013 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                
                                <li className="note item_left">
                                    <h4>Bheuporia Grand Arloji</h4>
                                    <h5>Dekstop Application Developers</h5>
                                    <p className="desc">
                                        Bheuporia Grand Arloji is a company engaged in the field of arloji at plaza melawai Blok M. The system create for helping company in sales order and checking product to produce valid data.
                                    </p>
                                    <span className="date">OCT 2013 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                
                                <li className="note item_right">
                                    <h4>Balkesmas 'ASISI'</h4>
                                    <h5>Dekstop Application Developers</h5>
                                    <p className="desc">
                                        Balkesmas ASISI, located in TEBET. The system create using C# language with MYSQL database for helping registration patient, drug sales and medical records.
                                    </p>
                                    <span className="date">March 2014</span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                
                                <li className="note item_left">
                                    <h4>Agency Jakarta</h4>
                                    <h5>Web Application Developer</h5>
                                    <p className="desc">
                                        Agency Jakarta is a company business from PT Bagus Pratama Mandiri , The system create using PHP with MYSQL database to helping perfomance of employee for recruitment, employement contract, scheduling, salary and client payment so all of process can be integrated
                                    </p>
                                    <span className="date"> JAN 2015 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                                            
                                <li className="title">Education</li>
                                <li className="note item_left">
                                    <h4>Bachelor Degree of Computer Science</h4>
                                    <h5>Binus University</h5>
                                    <p className="desc">
                                        I hold a bachelor's degree of Information System from the Binus University with interest on Business Intelegence (BI).
                                    </p>
                                    <span className="date">2010 - 2015 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>                                
                                <li className="start fa fa-bookmark"></li>
                                <li className="clear"></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Resume;