import React, { Component } from 'react';

class Process extends Component {
    render() {
        return (
            <div>
               <section id="process" className="section-content bg3">
                    <div className="container">
                        <div className="row">                                        
                            <div className="section-title item_bottom text-center">
                                <div>
                                    <span className="fa fa-cogs fa-2x"></span>
                                </div>
                                <h1 className="white">My <span>Process</span></h1>
                            </div>                      
                            <ol className="process-flow list-unstyled">
                                <li className="active">
                                    <div className="process-node active">
                                        <i className="fa fa-comments"></i>
                                    </div>
                                    <h4>Discussion</h4>
                                    <p>First, i will be discuss to my client to find out about what the problem is.</p>
                                    <div className="line">
                                        <div className="progress"></div>
                                    </div>
                                </li>
                                <li className="active">
                                    <div className="process-node active">
                                        <i className="fa fa-lightbulb-o"></i>
                                    </div>
                                    <h4>Idea</h4>
                                    <p>Second, i will give some idea's to solve a problem has been discussed.</p>
                                    <div className="line">
                                        <div className="progress"></div>
                                    </div>
                                </li>
                                <li className="active">
                                    <div className="process-node active">
                                        <i className="fa fa-desktop"></i>
                                    </div>
                                    <h4>Planning and Design</h4>
                                    <p>Third, Make a plan and design system</p>
                                    <div className="line">
                                        <div className="progress"></div>
                                    </div>
                                </li>
                                <li className="active">
                                    <div className="process-node active">
                                        <i className="fa fa-flash"></i>
                                    </div>
                                    <h4>Review</h4>
                                    <p>Fourth, review with client about the plan and design has been made</p>
                                    <div className="line">
                                        <div className="progress"></div>
                                    </div>
                                </li>
                                <li className="active">
                                    <div className="process-node active">
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <h4>Working</h4>
                                    <p>Fifth, if everything has done, and then project will be started</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Process;