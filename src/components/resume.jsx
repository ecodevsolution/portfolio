import React, { Component } from 'react';

class Resume extends Component {
    render() {

        var style = {
            opacity: '1',
            bottom: '0px'
        };

        return (
            <div>
                <div className="fullwidth-section bg-callout">
                    <div className="container">
                        <div className="col-md-12 text-center item_bottom" style={style}>
                            <h1 className="white padBottom killMargin">I am available for <strong>Freelancer</strong></h1>
                            <a href="#contact" className="scroll btn btn-trans btn-border-w btn-large">Hire Me</a>&nbsp;&nbsp;<a className="btn btn-primary btn-lg" href=""><i className="fa fa-download"></i> Download Resume</a>
                        </div>
                    </div>
                </div>

                 <section classID="experience" className="section-content bg2">
                    <div className="container">
                        <div className="row">                            
                            <div className="section-title item_bottom text-center" style={style}>
                                <div>
                                    <span className="fa fa-book fa-2x"></span>
                                </div>
                                <h1>My <span>Resume</span></h1>
                            </div>                            
                        </div>

                         <div className="row">
                            <ul className="timeline list-unstyled">                                
                                <li className="title">Present</li>
                                <li className="note item_right">
                                    <h4>Creative Agency</h4>
                                    <h5>Project Manager</h5>
                                    <p className="desc">
                                        Lorem Ipsum roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
                                    </p>
                                    <span className="date">
                                    DEC 2013 to Present</span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                <li className="note item_left">
                                    <h4>Infosys</h4>
                                    <h5>UI/UX Designer</h5>
                                    <p className="desc">
                                        Lorem Ipsum roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
                                    </p>
                                    <span className="date">
                                    JUN 2012 to NOV 2013 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                <li className="note item_right">
                                    <h4>Micro Web Planet</h4>
                                    <h5>Web Developer</h5>
                                    <p className="desc">
                                        Lorem Ipsum roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, quis bibendum auctor, nisi elit consequat.
                                    </p>
                                    <span className="date">
                                    Jan 2012 MAY 2012 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                <li className="note item_left">
                                    <h4>Creative Solution</h4>
                                    <h5>Web Designer</h5>
                                    <p className="desc">
                                        Lorem Ipsum roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
                                    </p>
                                    <span className="date">
                                    Jan 2011 to Dec 2012 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>                                
                                <li className="title">Education</li>
                                <li className="note item_left">
                                    <h4>Master Degree of Computer Science</h4>
                                    <h5>Oxford University</h5>
                                    <p className="desc">
                                        This is Photoshop's version Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                    </p>
                                    <span className="date">
                                    2012 - 2013 </span>
                                    <span className="arrow fa fa-play"></span>
                                </li>
                                <li className="note item_right">
                                    <h4>Bechelor Degree of Computer Science</h4>
                                    <h5>Oxford University</h5>
                                    <p className="desc">
                                        Lorem Ipsum. This is Photoshop's version Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                    </p>
                                    <span className="date">
                                    2007 - 2011 </span>
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